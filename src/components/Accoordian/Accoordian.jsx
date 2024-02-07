import { useEffect, useState } from "react"
function Accoordian() {
    const [fakeData, setFakeData] = useState([])
    const [selected, setSelected] = useState(null)
    // const [multiple, setMultiple] = useState([])
    // const [enableMultiSelection, setEnableMultiSelection] = useState(false)


    useEffect(() => {
        setFakeData([
            {
                "id": 1,
                "questions": "What is your favorite color? How old are you? Where do you live?",
                "answers": "My favorite color is blue. I am 25 years old. I live in New York."
            },
            {
                "id": 2,
                "questions": "What is your favorite hobby? Do you have any pets? What's your favorite book?",
                "answers": "My favorite hobby is playing the guitar. Yes, I have a cat named Whiskers. My favorite book is 'The Great Gatsby'."
            },
            {
                "id": 3,
                "questions": "What is your dream vacation spot? Can you cook? Who is your role model?",
                "answers": "My dream vacation spot is Bora Bora. Yes, I can cook. My role model is Elon Musk."
            },
            {
                "id": 4,
                "questions": "What is your favorite movie genre? Are you a morning person? Do you enjoy hiking?",
                "answers": "I love comedy movies. No, I'm not a morning person. Yes, I enjoy hiking in the mountains."
            },
            {
                "id": 5,
                "questions": "What's your go-to comfort food? Do you play any sports? Any hidden talents?",
                "answers": "My go-to comfort food is mac and cheese. I play soccer occasionally. My hidden talent is juggling."
            },
            {
                "id": 6,
                "questions": "Are you a coffee or tea person? What's your favorite season? Can you speak any other languages?",
                "answers": "I prefer coffee over tea. My favorite season is autumn. I can speak fluent Spanish and French."
            },
            {
                "id": 7,
                "questions": "Do you enjoy reading? What's your favorite type of music? Any travel bucket list destinations?",
                "answers": "Yes, I love reading novels. I enjoy listening to indie rock. My travel bucket list includes Japan and Iceland."
            }
        ]
        )
    }, [])

    const handleSingleSelection = ({ id }) => {
        setSelected(id === selected ? null : id)
    }
    // const handleMultipleSelection = ({ id }) => {

    // }

    return (
        <>

            <div className="h-screen bg-slate-800 flex flex-col items-center justify-center text-slate-300">
                <div className="flex flex-row gap-5 items-center">
                    <h1 className="text-3xl font-bold my-3  ">Accoordian </h1>

                </div>
                <div className=" text-xl w-[55vw] bg-slate-500 p-8 rounded-xl shadow-lg" >
                    {fakeData.map(item => (
                        <div
                            key={item.id} onClick={
                                () => handleSingleSelection(item)}
                            className="my-3 bg-slate-600 p-3 rounded-xl cursor-pointer">
                            <div
                                className="flex flex-row gap-3 justify-between"
                            >
                                <h5
                                    className="font-bold"
                                >{item.questions}</h5>
                                <span
                                    className="self-center font-bold"
                                >+</span>
                            </div>
                            {item.id === selected ? (
                                <div className="flex flex-col gap-3">
                                    <h5 className="text-xl  ">{fakeData.find(item => item.id === selected).answers}</h5>
                                </div>
                            ) : null
                            }
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default Accoordian;