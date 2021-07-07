import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import { useRouter } from 'next/router'
import {useRef} from 'react'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'


const Header = () => {
    // const router = useRouter();
    // const searchInputRef = useRef(null);

    // const search = e => {
    //     e.preventDefault();
    //     const term = searchInputRef.current.value;
    //     if(!term) return;

    //     router.push(`/search/${term}`);
    // }

    const searchInputRef = useRef(null);
    const router = useRouter();
    const search = e => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if(!term) return;
        router.push(`/search?term=${term}`)
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src="https://cdn.pixabay.com/photo/2015/11/02/14/01/google-1018443_960_720.png"
                    height={40}
                    width={120}
                    className="cursor-pointer"
                    onClick={()=>{router.push('/')}}
                />
                <form onSubmit={search} className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl 
                item-center px-6 py-3 ml-10 mr-5">
                    <input
                        ref={searchInputRef}
                        type="text"
                        className="flex-grow w-full focus:outline-none"
                        defaultValue={router.query.term}
                    />
                    <XIcon onClick={()=>searchInputRef.current.value=""} className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 
                    transform hover:scale-125"/>
                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 
                    pl-4 border-gray-400"/>
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <Avatar className="ml-auto" url="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"/>
            </div>

            <HeaderOptions/>

        </header>
    )
}

export default Header
