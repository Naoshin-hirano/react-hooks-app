import React, { useCallback, useState } from "react";
import "./App.css";
import { Cat } from "./components/Cat";

function App() {
    const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);
    /**
     * 関数や配列やオブジェクトは異なるインスタンスからできているので、値は一緒でも異なるものと見なされる
     * useCallback: レンダリングされる度に作られるインスタンスでなく、値が前回と同じならキャッシュを参照するので、関数が同等のインスタンスのままなので再レンダリング起きない
     */
    const meow = useCallback(() => console.log("meow!!!"), []);
    return (
        <>
            {cats &&
                cats.map((name: string, i: number) => {
                    return <Cat key={i} name={name} meow={meow} />;
                })}
            <button
                onClick={() => {
                    setCats([...cats, prompt("Name a cat") as string]);
                }}
            >
                Add a cat
            </button>
        </>
    );
}

export default App;
