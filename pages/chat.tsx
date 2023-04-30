import Image from "next/image";
import {Inter} from "next/font/google";
import {useEffect, useState} from "react";
import Head from "next/head";
const inter = Inter({subsets: ["latin"]});
import Link from "next/link";
import human from "/public/icons/cute_avatar.svg";
import {SlPaperClip} from "react-icons/sl";
import {TbSend} from "react-icons/tb";
import owl from "public/icons/owl.svg";
import {DotPulse} from "@uiball/loaders";

type ChatProp = {
    id: number;
    user: string;
    text: string;
};
type ChatItems = ChatProp[];

export default function Home() {
    const [text, setText] = useState("");
    const [items, setItems] = useState<ChatItems>([
        {id: 1, user: "bot", text: "Hello! How can I assist you today?"},
    ]);
    function scrollToBottom() {
        window.scrollTo(0, document.body.scrollHeight);
    }
    useEffect(() => {
        scrollToBottom();
    }, [items, items.length]);

    // handels the message bubble
    function MessageBubble({id, user, text}: ChatProp) {
        return (
            <div
                className={`flex flex-col ${
                    user === "human" ? "items-end" : "items-start"
                } mb-4`}
            >
                <div
                    className={`flex items-center ${
                        user === "human" ? "flex-row-reverse" : "flex-row"
                    } mb-4`}
                >
                    <Image
                        src={user === "human" ? human : owl}
                        alt="My Image"
                        width={30}
                        height={30}
                        className="mx-2"
                    />
                    <div
                        className={`w-12/12 rounded-lg px-4 py-2 max-w-xs break-words ${
                            user === "human"
                                ? "bg-[#DF9A2A] text-white"
                                : "bg-[#D9D9D9]"
                        }`}
                    >
                        <p className="text-sm">{text}</p>
                    </div>
                    {/* <p className="text-xs text-gray-100">{user}</p> */}
                </div>
            </div>
        );
    }

    // textbox update
    const handleChange = (event: any) => {
        setText(event.target.value);
    };

    // submits the textbox
    async function handleSubmit(event: any) {
        event.preventDefault();
        if (text.trim()) {
            items.push({id: items.length + 1, user: "human", text: text});
            const contents = file != null ? await readFile(file) : "";
            chatRequest(text + contents);
            setText("");
        }
    }

    const [loaderState, setLoaderState] = useState(0);
    // makes the open ai request
    async function chatRequest(input: string) {
        setLoaderState(1);
        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(input),
            });
            if (response.ok) {
                const data = await response.json();
                setLoaderState(0);
                const newMessage = {
                    id: items.length + 1,
                    user: "bot",
                    text: data.result,
                };
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

    const readFile = (file: any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsText(file);
        });
    };

    const handleFileUpload = (event: any) => {
        setFile(event.target.files[0]);
    };

    return (
        <div className="flex-grow flex flex-col items-center bg-[#323848] min-h-screen">
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
                                <Image
                                    src={owl}
                                    alt="My Image"
                                    width={40}
                                    height={40}
                                    className="rounded-lg shadow-lg"
                                />
                            </span>
                        </Link>
                    </div>
                    <nav className="block">
                        <ul className="space-x-10 flex align-content">
                            <li>
                                <Link href="/">
                                    <span className="text-gray-100 hover:text-gray-300">
                                        Home
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/chat">
                                    <span className="text-gray-100 hover:text-gray-300">
                                        Chat
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <span className="text-gray-100 hover:text-gray-300">
                                        Contact
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* text box */}
            <div className="flex-grow flex flex-col justify-center items-center w-8/12 mt-4 pb-28">
                <div className="flex-1 w-full rounded-lg bg-[#333741] border-2 border-[#6A707E] overflow-y-auto">
                    <ul className="list-disc list-inside px-10 pb-1 pt-6">
                        {items.map((item) => (
                            <div key={item.id}>{MessageBubble(item)}</div>
                            // <p key={item.id}>{item.text}</p>
                        ))}
                        {loaderState ? (
                            <div className="flex items-center mb-4 gap-0">
                                <Image
                                    src={owl}
                                    alt="My Image"
                                    width={30}
                                    height={30}
                                    className="mx-2"
                                />
                                <div className="flex justify-center items-center bg-[#D9D9D9] rounded-lg h-10 w-16 p-2 px-4 py-2">
                                    <DotPulse
                                        size={40}
                                        speed={1.3}
                                        color="orange"
                                    />
                                </div>
                            </div>
                        ) : null}
                    </ul>
                </div>
            </div>
            {/* type box */}
            <form
                onSubmit={handleSubmit}
                className="w-8/12 flex items-center justify-center z-10 mt-4 fixed bottom-8"
            >
                <div className="flex w-full rounded-md border border-gray-300 overflow-hidden">
                    {/* file upload */}
                    <div className="h-12 w-12 bg-white flex justify-center items-center">
                        <input
                            type="file"
                            id="file-upload"
                            onChange={handleFileUpload}
                            style={{display: "none"}}
                        />
                        <label htmlFor="file-upload" className="react-icon">
                            {/* Replace this with your React icon */}
                            <SlPaperClip className=" h-6 w-6" />
                        </label>
                    </div>

                    {/* text box */}
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        className="w-full h-12 px-4 px-2 bg-white text-gray-700 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-[#DF9A2A] hover:bg-[#AB761F] p-3 text-white font-semibold flex items-center justify-center"
                    >
                        <TbSend className="h-6 w-6" />
                    </button>
                </div>
            </form>
            {/* bottom blur */}

            {/* <div className="z-0 fixed bottom-0 w-full h-40 bg-gradient-to-t from-20% from-[#373737] via 50% to-transparent to-90%" /> */}
        </div>
    );
}
1; //1
