//POSTルーティング作成
import { addMemo } from '@/app/repositories/MemoRepository'; // MemoRepository.tsからaddMemo関数をインポート
import { NextResponse } from 'next/server';

//http://localhost:3000/api/memo/add 
export async function POST (req: Request) {
    //リクエストからデータを取得
    const {text} = await req.json();

    //textをRDBまたはファイルに保存
    await addMemo(text);

    //レスポンスデータ作成
    const data = { 
        message: "メモを保存しました",
        memo: text,
    }
    return NextResponse.json(data);
}