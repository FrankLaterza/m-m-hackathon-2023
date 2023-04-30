import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import book from "public/images/bankruptcy-docs.png";
import owl from "public/icons/owl.svg";
import bank from "public/icons/icon_bank.svg";
import pencil from "public/icons/icon_edit.svg";
import message from "public/icons/icon_messages.svg";
import people from "public/images/people.svg";

export default function Home() {
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

            {/* main content */}
            <div className="flex justify-center items-center bg-no-repeat bg-grey-100 bg-cover bg-center w-full backdrop-opacity-80 bg-[url('/images/bank.png')]">
                {/* jordy info */}

                <div className="flex flex-row my-24 opacity-100">
                    <div className="flex flex-col justify-center items-center ">
                        <div className="w-6/12 text-white">
                            <p className="mb-3 font-bold text-4xl">Jordy</p>
                            <p className="mb-3 text-xl">
                                AI-Powered HOA Document Review and Consoltation
                                Service
                            </p>

                            <Link href="/chat">
                                <button className="bg-transparent border-white border-2 text-white rounded-full px-6 py-2 hover:bg-white hover:text-black transition-colors">
                                    <span className="text-gray-100 hover:text-gray-300">
                                        Try For Free
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center items-center rounded">
                        <Image
                            src={people}
                            alt="My Image"
                            width={500}
                            height={300}
                            className=""
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <div className="flex justify-center items-start gap-10 w-8/12 h-full my-10">
                    <div className="bg-[#394052] h-42 rounded-lg">
                        <div className="mt-10 flex justify-center items-center">
                            <Image
                                src={message}
                                alt="My Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <p className="text-white p-6">
                            By leveraging AI technology, our document review and
                            consultation service can provide faster and more
                            accurate analysis, helping to identify potential
                            issues and save time for our clients.
                        </p>
                    </div>

                    <div className="bg-[#394052] rounded-lg">
                        <div className="mt-10 flex justify-center items-center">
                            <Image
                                src={bank}
                                alt="My Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <p className="text-white p-6">
                            Our document review and consultation service can
                            help HOA members and renters understand their rights
                            by quickly identifying relevant laws and regulations
                            and providing clear explanations and guidance.
                        </p>
                    </div>
                    <div className="bg-[#394052] rounded-lg">
                        <div className="mt-10 flex justify-center items-center">
                            <Image
                                src={pencil}
                                alt="My Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <p className="text-white p-6">
                            Our online document review and consultation service
                            offers a quick and accurate way for clients to
                            access expert analysis and advice without scheduling
                            a live consultation, providing a time-saving
                            solution powered by advanced AI technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
