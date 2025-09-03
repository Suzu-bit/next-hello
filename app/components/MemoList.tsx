"use client"

import React, {useState,useEffect} from "react";
import { addMemo, loadMemos, removeMemo } from "../services/MemoService";

export default function MemoList() {

    //useStateでtext管理
    const [text, setText] = useState<string>("");
    //useStateでmemos管理
    const [memos, setMemos] = useState<string[]>([]);
    //メッセージの状態を管理するuseState
    const [message, setMessage] = useState<string>("メモを入力してください");

    //初回レンダリング時にメモをAPIから取得するためのuseEffect
    useEffect(() => {
        const fetchMemos = async () => {
            const result = await loadMemos();
            setMessage(result?.message);
            setMemos(result?.memos);
        }
        fetchMemos();
    }, []);

    //useEffectを使って、messageを3秒後に消す
    useEffect(() => {
        const timer = setTimeout(() => {
            //メッセージを空にする
            setMessage("");
        }, 3000);
        return () => clearTimeout(timer);
    }, [message]);


    //textを更新する関数
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
        console.log(event.target.value);
    }

    //メモを追加する関数
    const handleAddMemo = async () => {
        setMemos([...memos, text]); // memos に text を追加
        setText(""); // 入力欄をクリア

        // APIにPOSTリクエストを送信
        const result = await addMemo(text)
        //メッセージを表示
        setMessage(result.message);
    };

    // メモを削除する処理
    const handleRemoveMemo = async (index: number) => {
        if (confirm('本当に削除しますか？')) {
            //メモのリストを更新
            setMemos(memos.filter((_, i) => i !== index));
            //APIに削除リクエストを送信
            const result = await removeMemo(index);
            //メッセージを表示
            setMessage(result.message);
        }
    }

    return (
    <main className="flex justify-center pt-10">     
        <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
            {message && 
                (<div className="text-center mb-5">
                    {message}
                </div>)
            }
            {/* 入力フォーム */}
            <div className="flex space-x-2">

                <input type="text" placeholder="メモを入力"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                    value={text}
                    onChange={handleChange}
                />
                <button className="bg-green-300 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-300 transition"
                    onClick={handleAddMemo}
                    disabled={!text}>
                    追加
                </button>

            </div>

            {/* 下線のレイアウト */}
            <hr className="my-4 border-gray-300" />
            {/* メモが無い時「メモがありません」メッセージ */}
            {memos.length === 0 && (
                <div className="text-center text-gray-400 mt-4">
                    メモがありません
                </div>
            )}
            {/* メモの一覧表示 */}
            <div className="space-y-3">
                {memos.map((memo, index) => (
                    <div key={index}
                        className="bg-white p-4 rounded-xl shadow border border-gray-200">
                        {/* 削除ボタン追加 */}
                        <button 
                        onClick={() => handleRemoveMemo(index)}
                        className="bg-red-500 text-white px-3 py-2 text-xs mr-4 rounded">
                            削除
                        </button>
                        {memo}
                    </div>
                    ))}
            </div>

        </div>
    </main>
  );
}