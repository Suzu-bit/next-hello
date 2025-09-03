"use client"

// rfc と入力
// useState をインポート
import React, { use, useState } from 'react'

export default function Counter() {
    // state
    const [count, setCount] = useState(0);

    function handelIcrement() {
        if (count < 10) {
        setCount(count + 1);
      }
    }

    function handelDecrement() {
        // count が 0 より大きかったらマイナス
        if (count > 0) {
        setCount(count - 1);
      }
    }

    function handleReset() {
        setCount(0);
   }

    return (

        <div className="bg-white text-black px-10 py-6 rounded-2xl shadow">
          
            <p className="text-center text-2xl md:text-3xl">{count}</p>

            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="bg-pink-300 px-3 py-2 text-white rounded-xl"
                onClick={handelDecrement}
              >-1
              </button>

              <button
                className="bg-green-300 px-3 py-2 text-white rounded-xl"
                onClick={handleReset}
              >reset
              </button>

              <button
                className="bg-pink-300 px-3 py-2 text-white rounded-xl"
                onClick={handelIcrement}
              >+1
              </button>
            </div>

        </div>
    )
}
