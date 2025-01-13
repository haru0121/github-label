import { Octokit } from "@octokit/rest";
import labels, { Label } from '@/config/labels';


try {

  console.log(labels);
  const octokit = new Octokit({ auth: process.env.GIT_ACCESS_TOKEN });
    // const args = process.argv.slice(2);
    // const [owner, repo] = args[0].split('/');
    // const labels = labelData.map((label) => ({
    //     owner,
    //     repo,
    //     name: label.name,
    //     color: label.color,
    //     description: label.description,
    // }));

} catch (error) {
    console.error(error);
}