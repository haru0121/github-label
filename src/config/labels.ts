export interface Label {
  name: string;
  color: string;
  description: string;
}

const labels:Label[] = [
    {
      "name": "good first issue",
      "color": "#7057ff",
      "description": "初めてコントリビュートするのに向いてる小さめのissueにラベル付けされます。"
    },
    {
      "name": "help wanted",
      "color": "#008672",
      "description": "解決策がまだ明確に定まっていない、誰かに助けてほしい系のissueにラベル付けされます。"
    },
    {
      "name": "Close: duplicate",
      "color": "#cfd3d7",
      "description": "重複したissueにラベル付けされます。"
    },
    {
      "name": "Close: invalid",
      "color": "#cfd3d7",
      "description": "正しくない/誤ったissueにラベル付けされます。"
    },
    {
      "name": "Close: wontfix",
      "color": "#cfd3d7",
      "description": "対応しないissueにラベル付けされます。"
    },
    {
      "name": "Feedback: feature request",
      "color": "#A5684C",
      "description": "ユーザや顧客などから得られた新機能要求等のissueにラベル付けされます。"
    },
    {
      "name": "Feedback: question",
      "color": "#A5684C",
      "description": "質問系のissueにラベル付けされます。"
    },
    {
      "name": "Priority: high",
      "color": "#D93F0B",
      "description": "優先度の高いissueにラベル付けされます。"
    },
    {
      "name": "Priority: low",
      "color": "#BFE3C7",
      "description": "優先度の低いissueにラベル付けされます。"
    },
    {
      "name": "Problem: bug",
      "color": "#d73a4a",
      "description": "プロダクトのバグに関するissueにラベル付けされます。"
    },
    {
      "name": "Problem: security",
      "color": "#d73a4a",
      "description": "セキュリティに関する問題を報告するissueにラベル付けされます。"
    },
    {
      "name": "Type: design",
      "color": "#0E8A16",
      "description": "プロダクトの設計を議論するissueにラベル付けされます。"
    },
    {
      "name": "Type: documentation",
      "color": "#0E8A16",
      "description": "プロダクトのドキュメントに関するissueにラベル付けされます。"
    },
    {
      "name": "Type: improvement",
      "color": "#0E8A16",
      "description": "プロダクトの改善に関するissueにラベル付けされます。"
    },
    {
      "name": "Type: new feature",
      "color": "#0E8A16",
      "description": "プロダクトの新機能に関するissueにラベル付けされます。"
    }
]

export default labels;
