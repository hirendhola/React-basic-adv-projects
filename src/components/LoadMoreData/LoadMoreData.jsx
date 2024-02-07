import Result from "postcss/lib/result";
import { useState, useEffect } from "react";

function LoadMoreData() {

    const [loading, setLoading] = useState(false);
    const [Product, setProduct] = useState([]);
    const [count, setCount] = useState(0);

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            const data = await response.json();
            if(data && data.products && data.products.length > 0){
            setProduct( prevData => [...prevData, ...data.products]);
            }
        }
        catch (err) {
            console.log(err.message)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchData();
    }, [count]);

    if (loading) {
        return <h1>Loading data please Wait!!!</h1>
    }

    return (
        <div className="w-screen min-h-screen bg-slate-200  ">
            <div className="grid grid-cols-4 gap-4">
                {
                    Product && Product.length > 0 ? Product.map((item, index) => {
                        return (
                            <div key={index} className="w-[300px] max-h-[300px] flex justify-center flex-col m-10 h-fit  text-slate-900 rounded-xl overflow-hidden gap-4 cursor-pointer p-1 border-2 border-slate-600 shadow-xl" >
                                <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover  bg-center " />
                                <div className="flex flex-col items-start mx-5 mb-5 ">
                                    <h1 className="text-xl font-semibold">{item.title}</h1>
                                    <h1 className="text- font-semibold">Price: {item.price}</h1>
                                </div>
                            </div>
                        )
                    }) : null
                }
            </div>
            <div>
                <button onClick={() => setCount(count + 1)} className="bg-slate-600 text-white py-2  rounded-sm b-2">
                    Load More</button>      
            </div>
        </div>
    )
}

export default LoadMoreData