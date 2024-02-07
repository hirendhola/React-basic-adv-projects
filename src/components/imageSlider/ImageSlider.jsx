import { useState, useEffect } from "react";
import FetchImages from "./FetchImages";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function ImageSlider({ url, limit }) {
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await FetchImages(url, limit);
                setImages(data);
            } catch (error) {
                setErr(`Error fetching images: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, limit]);

    if (loading) return <h1>Loading...</h1>;
    if (err) return <h1>Error occurred: {err}</h1>;

    const handleNext = () => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    };

    const handlePrev = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };

    return (
        <>
            <div className="w-screen h-screen bg-slate-100 flex justify-center flex-col " >
                <div className="pt-3">
                    <h1 className="text-center text-3xl font-bold" >
                        ImageSlider
                    </h1>
                </div>
                <div className=" self-center  w-screen h-screen flex items-center justify-center">

                    <div className="w-[500px] h-[350px] bg-gray-100 flex relative rounded-base overflow-hidden justify-center">
                        <FaAngleLeft
                            className="absolute text-white w-7 h-7 left-4 top-[46%] cursor-pointer"
                            onClick={handlePrev}
                        />
                        {images && images.length > 0 ? (
                            <img
                                key={images[currentImage].id}
                                src={images[currentImage].download_url}
                                alt={images[currentImage].download_url}
                                className="w-full h-full object-cover"
                            />
                        ) : null}
                        <FaAngleRight
                            className="absolute text-white w-7 h-7 right-4 top-[46%] cursor-pointer"
                            onClick={handleNext}
                        />
                        <span className="flex absolute bottom-4">
                            {images && images.length > 0
                                ? images.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`w-3 m-1 outline-none h-3 rounded-full ${index === currentImage ? "bg-gray-600" : "bg-gray-200"
                                            }`}
                                        onClick={() => setCurrentImage(index)}
                                    />
                                ))
                                : null}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ImageSlider;
