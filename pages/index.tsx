import Head from 'next/head';
import Link from 'next/link';

export default function Home() {

    return (
        <div className="flex flex-col justify-center items-center">
            <Head>
                <title>Messaging App</title>
                <meta name="description" content="Messaging App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="bg-white shadow-md w-full">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <div className="">
                        <Link href="/">
                            <span>
                                <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
                            </span>
                        </Link>
                    </div>
                    <nav className="block">
                        <ul className="space-x-10 flex align-content">
                            <li>
                                <Link href="/">
                                    <span className="text-gray-500 hover:text-gray-700">Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <span className="text-gray-500 hover:text-gray-700">About</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <span className="text-gray-500 hover:text-gray-700">Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>



            <div> MAKE YOUR CHANGES HERE</div>

        </div >
    );
}
