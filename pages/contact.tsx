import Image from "next/image";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import owl from "public/icons/owl.svg";
import folder from "public/icons/icon__folder_add_.svg";
import map from "public/icons/icon__map_.svg";
import phone from "public/icons/icon__phone_arrow_right_bold_.svg";

export default function Contact() {
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
            {/* main content */}
            <div className="flex justify-center items-center bg-no-repeat bg-grey-100 bg-cover bg-center w-full backdrop-opacity-80 bg-[url('/images/HOA_1.png')]">
                {/* jordy info */}

                <div className=" flex flex-row items-start justify-start w-3/6 my-28 opacity-100">
                    <div className="flex flex-col items-start items-center ">
                        <div className="text-white">
                            <p className="mb-3 font-bold text-4xl">Contact Us</p>
                            <p className="mb-3 text-xl">
                                You are seconds away from hiring a affiliated attorney
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <div className="flex justify-center items-start gap-10 w-8/12 h-full my-10">
                    <div className="flex flex-col justify-center items-center w-full bg-[#394052] h-42 rounded-lg">
                        <div className="mt-10 flex justify-center items-center">
                            <Image
                                src={phone}
                                alt="My Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <p className="mt-6 mb-3 text-white font-bold text-xl">BY PHONE</p>
                        <p className="text-center text-white px-6 pb-4">
                            9:00 am to 4:00 pm, Monday through Friday (EST)
                            <br />
                            +1 (407) 391-3918
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center w-full bg-[#394052] rounded-lg">
                        <div className="mt-10 flex justify-center items-center">
                            <Image
                                src={folder}
                                alt="My Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <p className="mt-6 mb-3 text-white font-bold text-xl">START A NEW CASE</p>
                        <p className="text-center text-white px-6 pb-4">
                            initiate your case today by filling out our
                            simple online form on our law firm's website
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full bg-[#394052] rounded-lg ">
                        <div className="mt-10 flex justify-center items-center">
                            <Image
                                src={map}
                                alt="My Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <p className="mt-6 mb-3 text-white font-bold text-xl">OUR OFFICE</p>
                        <p className="text-center text-white px-6 pb-4">
                            8745 Lakeview Terrace
                            Orlando, FL 32810
                        </p>
                    </div>
                </div>
            </div>

        </div>

    );
}