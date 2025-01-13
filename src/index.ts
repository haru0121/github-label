import LabelController from "@/labels/LabelController";
import labelDataJson from "@/data/labelData.json";
import dotenv from "dotenv";

const main = async () => {
try{
    console.log('GitHubのラベルの作成処理を開始します。');
    dotenv.config({
        path: '.env.local'
    });

    //　認証データを読み込む
    const owner = process.env.OWNER;
    const repo = process.env.REPO;

    if(!owner || !repo){
        throw new Error('OWNERまたはREPOの環境変数が設定されていません。');
    }

    //　ラベルデータを読み込む
    const labelController = new LabelController();
    const labels = labelController.loadInsertLabelData(labelDataJson);
    
    //　DELETE_DEFALT_LABELがtrunならデフォルトラベルを削除
    if(process.env.DELETE_DEFAULT_LABELS){
        console.log('デフォルトラベルを削除します。');
        await labelController.deleteDefaultLabels(owner, repo);
    }

    //ラベルを作成
    const requestLabels = labelController.getLabelRequestData("owner", "repo", labels);
    await labelController.createLabels(owner, repo, requestLabels);

    console.log('GitHubのラベルの作成処理が完了しました。');

    }catch(e){
    console.error(e);
    }
}

// メイン関数を実行
main();