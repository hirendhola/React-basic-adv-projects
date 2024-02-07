import { useEffect, useState } from "react";

function QrCodeGenerator({ url }) {
    const [qrCode, setQrCode] = useState("");
    const [inputData, setInputData] = useState("");

    const fetchQrCode = async (url, inputData) => {
        try {
            const data = await fetch(`${url}&data=${inputData}`);
            setQrCode(data.url);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchQrCode(url, inputData)
    }, [inputData, url])

    return (
        <div className="h-screen w-screen flex justify-center items-center flex-col gap-5 bg-slate-300">
            <input type="url" value={inputData} onChange={(e) => setInputData(e.target.value)}
                placeholder="Enter the URL to generate QR code"
                className="w-72 overflow-hidden h-12 px-3 border-2 border-slate-300 rounded-md"
            />
            <div className="width-fit h-fit p-3 content-center border-2 grid place-content-center rounded-md">
                <img src={qrCode} alt="Enter Link" className="" />
            </div>
        </div>
    )
}

export default QrCodeGenerator