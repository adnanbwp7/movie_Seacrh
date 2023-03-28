import React from 'react'
import MovieCard from './MovieCard'

const Home = ({ setFavourites, search, data }) => {
    return (
        <>

            <div className="flex flex-col justify-around gap-14 w-11/12 max-w-screen-xl mx-auto mt-16 mb-8">
                <div className=" text-2xl  font-bold text-center">Searched Movies</div>

                {data.length !== 0 ?
                    <div className="flex flex-wrap justify-evenly gap-14 w-full min-h-[100vh]">
                        <MovieCard data={data} setFavourites={setFavourites} />
                    </div>
                    :
                    search &&
                    <div className="flex my-20 mx-auto w-fit">
                        <div className="flex lds-hourglass" />
                    </div>
                }
            </div>
        </>
    )
}

export default Home