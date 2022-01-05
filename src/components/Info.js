import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Info = (props) => {
    let [result, setResult] = useState();
    let { movieSelect } = props;
    useEffect(() => {
        let url = `http://www.omdbapi.com/?i=${movieSelect}&apikey=59ca5fb7`;
        axios.get(url).then((res) => { setResult(res.data) }
        )
    }, [movieSelect])
    result?.Title ? console.log(result) : console.log("no result");
    return (<>
        {
            result?.Title ?
                <div className="Home w-full h-screen border-2 border-black">
                    <div className="">
                        <img className='w-full h-screen object-cover '
                            src={result.Poster}
                            alt="" />
                        <img className='w-full h-screen object-cover absolute top-0 opacity-50'
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/640px-Black_colour.jpg"
                            alt="" />
                        <div className="flex">
                            <div className="boxx absolute top-44 left-20">
                                <span className='text-blue-200 text-4xl font-bold font-serif'>{result.Title}</span>
                                <br />
                                <span className='text-yellow-400 text-sm font-bold'>Director : </span> <span
                                    className='text-blue-200 font-serif font-thin'> {result.Director}</span>
                                <span className='text-yellow-400 text-sm mx-3 font-bold'>Stars :</span> <span
                                    className='text-blue-200 font-serif font-thin -mx-3'>{result.Actors}</span>
                                <br />
                                <ul className='text-gray-400 w-96 '>
                                    <li><span className='font-bold text-yellow-400'>Awards</span> : {result.Awards}</li>
                                    <li><span className='font-bold text-yellow-400'>Country</span> : {result.Country}</li>
                                    <li><span className='font-bold text-yellow-400'>Hours</span> : {result.Runtime}</li>
                                    <li><span className='font-bold text-yellow-400'>Type</span> : {result.Type}</li>
                                    <li><span className='font-bold text-yellow-400'>Writer</span> : {result.Writer}</li>
                                    <li><span className='font-bold text-yellow-400'>Year</span> : {result.Year}</li>
                                    <li><span className='font-bold text-yellow-400'>Plot</span> : {result.Plot}</li>
                                </ul>
                                <div className="Rating flex my-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <div className="btn flex ">
                                    <button className='py-2 px-8 bg-orange-700 rounded-full text-white'>Play Now</button>
                                    <button className='py-2 mx-4 px-8 bg-blue-700 rounded-full text-white'>Watch Later</button>
                                </div>
                            </div>
                            <div className="w-60 h-96  absolute top-52 right-80">
                                <div className="">
                                    <img className="w-56 h-72 shadow-yellow-400 shadow-xl rounded-xl" src={result.Poster} alt="default-img" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                : "no result"
        }
    </>)
}

export default Info;