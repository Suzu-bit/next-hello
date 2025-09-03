"use client"

// rfc で作成
import React, { useState } from 'react'
import Loading from './Loading';

export default function AIBot() {
    const [message, setMessage] = useState("Geminiに聞いてみよう!");
    const [text, setText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const sendMessage = async () => {
        if (text && confirm('Geminiに聞いてみますか？')) {

            // setMessage("Geminiに聞いています...");
            //ローディングをオンにする
            setIsLoading(true);

            // APIにリクエストを送信
            const res = await fetch('/api/gemini',
                {
                    method: 'POST',
                    body: JSON.stringify({ "text": text }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = await res.json();
            setMessage(data.message);
            
             // ローディングをオフにする
            setIsLoading(false);
        }
    };

    return (
        <div
            className="mx-auto max-w-2xl p-6 rounded-lg shadow-md space-y-4"
            style={{
            backgroundImage: "url('/sakura.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "400px",
            height: "350px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            }}
        >
            <h2 className="text-2xl font-bold">教えて!Gemini!</h2>
            {/* /* テキストボックスを作成 */}
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="質問を入力してください"
                className="w-full px-3 py-2 bg-white rounded"
            />

            <div
            className="text-left p-3 bg-white rounded shadow text-sm whitespace-pre-wrap overflow-auto"
            style={{
                maxHeight: "300px",
                minHeight: "120px",
            }}
            >
            {message}
            </div>

            <div className="flex justify-center">
            <button
                onClick={sendMessage}
                className="px-6 py-3 bg-green-300 text-white rounded-xl shadow hover:bg-pink-300 font-semibold cursor-pointer">
                教えて!Gemini!
            </button>
            </div>

            {/* ローディング表示 */}
            {isLoading && <Loading />}

        </div>
    )
}