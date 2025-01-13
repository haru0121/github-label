import LabelController from '@/labels/LabelController';

const testLabelDataList = [
  {
    name: "good first issue",
    color: "#7057ff",
    description: "初めてコントリビュートするのに向いてる小さめのissueにラベル付けされます。"
  },
  {
    name: "help wanted",
    color: "#008672",
    description: "解決策がまだ明確に定まっていない、誰かに助けてほしい系のissueにラベル付けされます。"
  },
]

describe("Labelリストのキー形式テスト", () => {
    const validKeys = ["name", "description", "color"];
    const labelController = new LabelController();

    it("すべてのオブジェクトが正しいキーを持っているか確認する", () => {
      const labelList = labelController.loadInsertLabelData(testLabelDataList);
      const allKeysAreValid = labelList.every((obj:any) =>
        Object.keys(obj).every((key) => validKeys.includes(key))
      );
  
      expect(allKeysAreValid).toBe(true);
    });
});

describe("LabelControllerの取得テスト", () => {
    it("ラベル作成用のリクエストパラメータが正しく作成されるか", () => {

      // 認証をする
      const labelController = new LabelController();
      const labels = labelController.loadInsertLabelData(testLabelDataList);
      const requestLabels = labelController.getLabelRequestData("owner", "repo", labels);
      expect(requestLabels).toEqual(expect.arrayContaining([
        {
          owner: "owner",
          repo: "repo",
          name: "good first issue",
          color: "#7057ff",
          description: "初めてコントリビュートするのに向いてる小さめのissueにラベル付けされます。"
        },
        {
          owner: "owner",
          repo: "repo",
          name: "help wanted",
          color: "#008672",
          description: "解決策がまだ明確に定まっていない、誰かに助けてほしい系のissueにラベル付けされます。"
        }
      ]));
    })
});


