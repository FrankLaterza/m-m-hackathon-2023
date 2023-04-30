import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Head from 'next/head';
const inter = Inter({ subsets: ["latin"] });
import Link from 'next/link';
import { SlPaperClip } from 'react-icons/sl';


type ChatProp = {
    id: number;
    user: string;
    text: string;
}
type ChatItems = ChatProp[];


export default function Home() {
    const [update, setUpdate] = useState("false");
    const [promp, setPrompt] = useState("");
    const [text, setText] = useState("");

    const [items, setItems] = useState<ChatItems>([
        { id: 1, user: 'bot', text: 'Hello! How can I assist you today?' },
    ]);
    function scrollToBottom() {
        window.scrollTo(0, document.body.scrollHeight);
    }
    useEffect(() => {
        scrollToBottom();
    }, [items, items.length]);


    function MessageBubble({ id, user, text }: ChatProp) {
        return (
            <div
                className={`flex flex-col ${user === 'human' ? 'items-end' : 'items-start'
                    } mb-4`}
            >
                <div
                    className={`rounded-lg px-4 py-2 max-w-xs break-words ${user === 'human' ? 'bg-blue-600 text-white' : 'bg-gray-200'
                        }`}
                >
                    <p className="text-sm">{text}</p>
                </div>
                <p className="text-xs text-gray-100">{user}</p>
            </div>
        );
    }

    // textbox update
    const handleChange = (event: any) => {
        setText(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (text.trim()) {
            items.push({ id: items.length + 1, user: 'human', text: text });
            chatRequest(text)
            setText('');
        }
    };

    async function chatRequest(input: string) {
        setPrompt("hello world");
        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(input),
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                const newMessage = { id: items.length + 1, user: 'bot', text: data.result };
                setItems([...items, newMessage]); // update state with new message
            } else {
                return 0;
            }
        } catch (error) {
            console.log("api failed");
        }
    }

    // file upload
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmitFile = (e) => {
        console.log('hello')
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
    };

    return (
        <div className="flex flex-col justify-center items-center bg-[#323848]">
            <Head>
                <title>Messaging App</title>
                <meta name="description" content="Messaging App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="bg-[#323848] shadow-md w-full">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <div className="">
                        <Link href="/">
                            <span>
                                <img className="h-8 w-auto" src="/owl.webp" alt="Logo" />
                            </span>
                        </Link>
                    </div>
                    <nav className="block">
                        <ul className="space-x-10 flex align-content">
                            <li>
                                <Link href="/">
                                    <span className="text-gray-100 hover:text-gray-300">Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <span className="text-gray-100 hover:text-gray-300">About</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <span className="text-gray-100 hover:text-gray-300">Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* text box */}
            <div className="w-11/12 mt-4 pb-14">
                <div className="rounded-lg bg-[#383838] border-2 border-[#767676]">
                    <ul className="list-disc list-inside p-10">
                        {items.map((item) => (
                            <div key={item.id}>{MessageBubble(item)}</div>
                            // <p key={item.id}>{item.text}</p>
                        ))}
                    </ul>

                </div>
                {/* type box */}
            </div>
            <form onSubmit={handleSubmit} className="z-10 mt-4 fixed w-10/12 bottom-10">
                <div className="flex items-center rounded-md border border-gray-300 overflow-hidden">

                    <SlPaperClip type="file" onClick={handleSubmitFile} className="ml-2 h-6 w-6" />
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        className="w-full px-4 py-2 bg-white text-gray-700 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 p-3 text-white font-semibold flex items-center justify-center"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                        </svg>
                    </button>
                </div>
            </form>
            {/* bottom blur */}
            <div className="z-0 fixed bottom-0 w-full h-40 bg-gradient-to-t from-40% from-white via 50% to-transparent to-90%" />

        </div >
    );
}
