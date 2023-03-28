import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ favourite, data }) => {

    const addToFavorite = (item) => {
        let arr = []
        const data = JSON.parse(localStorage.getItem('favorite'))

        if (data)
            arr = data

        arr.push(item)
        localStorage.setItem("favorite", JSON.stringify(arr))
        alert("Favorite Added Successfully!")
    }

    return (
        <>
            {data?.length >= 0 ?
                data?.map((item) => {
                    return (
                        <div key={item.imdbID} className="max-w-md bg-black border border-gray-800 rounded-3xl shadow-lg shadow-blue-500/50 ">
                            <div className='flex'>
                                <img className={`rounded-t-3xl h-auto w-full ${item.Poster === "N/A" ? "hidden" : "flex"}`} src={item.Poster} alt />
                            </div>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{item?.Title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item?.Year}</p>

                                <div className="flex flex-col sm:flex-row w-11/12 mx-auto justify-between gap-5 my-6">
                                    {!favourite
                                        && <button onClick={() => addToFavorite(item)} className="items-center px-3 py-2 text-sm font-medium text-center text-black bg-yellow-300 rounded-lg hover:bg-yellow-400 max-w-[150px] mx-auto">
                                            Add to Favourites
                                        </button>}
                                    <Link to={`/details/${item.imdbID}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-yellow-300 rounded-lg hover:bg-yellow-400 max-w-[150px] mx-auto">
                                        Read more
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })
                :
                <div className="flex flex-wrap justify-evenly gap-14 w-full">
                    <h2>No Data Found! </h2>
                </div>
            }
        </>
    )
}

export default MovieCard