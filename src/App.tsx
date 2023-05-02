import React, { useState } from "react";
import "./App.css";
import { PureCat } from "./components/Cat";

function App() {
    const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);
    return (
        <>
            {cats &&
                cats.map((name: string, i: number) => {
                    return <PureCat key={i} name={name} />;
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
