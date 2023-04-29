import Image from "next/image";
import {Inter} from "next/font/google";
import {useEffect, useState} from "react";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    const [update, setUpdate] = useState("false");
    const [promp, setPrompt] = useState("");


    async function hello() {
        setPrompt("hello world");
        try {
            const response = await fetch("/api/lawyer", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(promp),
            });


            if (response.ok) {
                const data = await response.json();
                console.log(data)
            } else {
                return 0;
            }
        } catch (error) {
            console.log("api failed");
        }
    }

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <div onClick={hello} className="">
                hi kenny
            </div>

            <div>{update}</div>
        </main>
    );
}
