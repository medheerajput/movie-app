import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Info from './Info';
import Footer from './Footer';
const Navbar = () => {
    let[search,setSearch]=useState();
    let[name,setName]=useState();
    let [timeID,setTimeID]=useState();
    let [block ,setBlock]=useState();
    let [info,setInfo]=useState([]);
    let [movieSelect ,onMovieSelect]=useState();
    const getData = async (searchValue) => {
axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=59ca5fb7`).then((res)=>{
    setInfo(res.data.Search);
    console.log(res.data.Search);
}).catch((err)=>{console.log(err)});
        // console.log(response.data.Search)
    }
    useEffect(()=>{
        axios.get(`http://www.omdbapi.com/?s=${name}&apikey=59ca5fb7`).then((res)=>{
    setInfo(res.data.Search);
    console.log(res.data.Search);
}).catch((err)=>{console.log(err)});
    },[])
    const getSearch=(event)=>{
        setSearch(event.target.value);
        const timeout=setTimeout(()=>{getData(event.target.value)},500);
        setTimeID(timeout);
        clearTimeout(timeID);
    }


    const showBox=()=>{
        setBlock("block");
    }
    return (<>
        <nav className=" flex justify-between bg-black p-3 text-white fixed z-10 w-full bg-opacity-90">
            <span className='text-red-600 text-2xl mx-14  font-bold'>NETFLIX</span>
            <ul className='flex text-orange-100 mx-4 font-sans '>
                <li className='mx-4 hover:underline decoration-red '>Home</li>
                <li className='mx-4 hover:underline'>Movies</li>
                <li className='mx-4 hover:underline flex'>
                {
                    block ? <input 
                    className="rounded-full w-36 outline-none h-7 bg-gray-700 text-gray-300 font-bold text-center" 
                    type="text" 
                    onChange={getSearch}
                     />:<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-1 mx-2" onClick={showBox} fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                }
                
                </li>
                <li className='mx-4 hover:underline'>Login</li>
                <li className='mx-4 hover:underline text-orange-100'>
                    <button className="bg-red-500 hover:bg-blue-700 text-white  px-4 py-0.5 rounded-full text-sm">
                        Sign Up
                    </button>
                </li>
            </ul>
        </nav>
        {/* this component for movie_info */}
        {
              movieSelect && <Info movieSelect={movieSelect}/>
        }
        <Footer 
        info={info}
        onMovieSelect={onMovieSelect}
        />
        {/* ************************************************************************ */}
        
    </>)
}

export default Navbar;