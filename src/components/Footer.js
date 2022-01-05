import React from 'react';

const Footer = (props) => {
    let { info,onMovieSelect } = props;
    return (<>
        <div className="footerr bg-black bg-opacity-90 p-7 h-fit ">
        
            <div className="temp flex text-white mx-14">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                </svg>
                <span className="mx-4 text-xl font-bold">Trending</span>
            </div><br />
            <hr className="text-white" /><br />
            {/* **************************CARD *********************************  */}
            <div className="card flex flex-wrap">
                {
                    info?.length ? info.map(rs =>
                        <div className="mx-4 my-4 card_box w-44 h-fit shadow-2xl  shadow-blue-500/50 rounded-xl"
                            onClick={() => { onMovieSelect(rs.imdbID) }}
                        >
                            <img className="h-52 w-full rounded-xl" src={rs.Poster} alt="" />
                            <div className="box flex justify-between ">
                                <div className="name flex flex-col p-1 ">
                                    <span className="text-sm font-bold text-yellow-500 font-serif">{rs.Title}</span>
                                    <span className="text-sm text-gray-500">{rs.Year}</span>
                                </div>
                                <div className="box flex flex-col text-yellow-500 my-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    <div className="box flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="text-sm text-gray-500">9.5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : <h2 className='innerr'>No result found</h2>

                }
            </div>
        </div>
    </>)
}

export default Footer;