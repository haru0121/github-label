import Label from "./Label";
import { Octokit } from "@octokit/rest";

type requestLabel = {
    owner: string;
    repo: string;
    name: string;
    color: string | undefined;
    description: string | undefined;
}

class LabelController {
    private octokit;

    constructor() {
        this.octokit = new Octokit({ auth: process.env.GIT_ACCESS_TOKEN });
    }
    loadInsertLabelData(labelDataList:Label[]) {
        const labels = labelDataList.map((labelData) => new Label(labelData.name, labelData.color, labelData.description));
        return labels
    }
    getLabelRequestData(owner:string, repo:string, labels:Label[]) {
        const requestLabels:requestLabel[] = labels.map((label) => ({
            owner,
            repo,
            name: label.name,
            color: label.color,
            description: label.description,
        }));
        return requestLabels
    }
    private async createLabel(label:requestLabel) {
        return await this.octokit.request(`POST /repos/${label.owner}/${label.repo}/labels`, {
            owner: label.owner,
            repo: label.repo,
            name: label.name,
            description: label.description,
            color: label.color,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
    }
    async createLabels(owner:string, repo:string, labels:Label[]) {
        try {
            const requestLabels:requestLabel[] = this.getLabelRequestData(owner, repo, labels);
            const result = Promise.all(requestLabels.map(async (requestLabel) => {
                await this.createLabel(requestLabel);
            }));
            return result;
        } catch (error) {
            console.error(error);
        }
    }
}

export default LabelController;