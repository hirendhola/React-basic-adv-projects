import React, { useEffect, useState } from 'react';

function RandomColor() {
    const [color, setColor] = useState("#3EF1B5");
    const [typeOfColor, setTypeOfColor] = useState('HEX');


    const hexColorRange = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

    const randomNumber = (length) => {
        return Math.floor(Math.random() * length)
    }

    const randomHexColor = () => {
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hexColorRange[randomNumber(hexColorRange.length)]
        }
        // console.log(hexColor);
        setColor(hexColor)
    }
    const randomRgbColor = () => {
        let r = randomNumber(256)
        let g = randomNumber(256)
        let b = randomNumber(256)
        setColor(`rgb(${r}, ${g}, ${b})`)
        // console.log(r,g,b)   
    }

    return (
        <div style={{ '--bg-color': color }} className={`w-screen h-screen overflow-hidden   bg-[var(--bg-color)]`}>
            <div className={" w-[100%] h-[100%] flex flex-row gap-4 items-center justify-center "}>
                <button className="text-xl self-center font-bold my-3 bg-slate-50 text-slate-950 p-2 rounded-xl"
                    onClick={() => setTypeOfColor("HEX")}>
                    Enable HEX Color
                </button>
                <button className="text-xl self-center font-bold my-3 bg-slate-50 text-slate-950 p-2 rounded-xl"
                    onClick={() => { setTypeOfColor("RGB") }}>
                    Enable RGB Color
                </button>
                <button className="text-xl self-center font-bold my-3 bg-slate-200 text-slate-950 p-2 rounded-xl"
                    onClick={typeOfColor === "HEX" ? randomHexColor : randomRgbColor}>
                    Genarate Random Color
                </button>
                <h1 className="text-3xl font-bold my-3  "> {color} </h1>
            </div>
        </div>
    );
}

export default RandomColor;
