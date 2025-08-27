

import React, { useState } from "react";

const colors = ["white", "blue", "green", "yellow", "red", "pink", "brown", ];

function ColorBtn() {
    const [bgColor, setBgColor] = useState("white");

    const changeColor = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBgColor(randomColor);
    };

    return (
        <div style={{ minHeight: "100vh", backgroundColor: bgColor, transition: "background 0.3s" }}>
            <button onClick={changeColor} style={{ padding: "1rem 2rem", fontSize: "1.2rem", marginTop: "2rem" }}>
                Change Background Color
            </button>
        </div>
    );
}

export default ColorBtn;