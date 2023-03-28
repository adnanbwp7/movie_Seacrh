import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

const Favorite = () => {
    const [data, setData] = useState([])

    const getData = () => {
        setData(JSON.parse(localStorage.getItem('favorite')))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="flex flex-col justify-around gap-14 w-11/12 max-w-screen-xl mx-auto mt-16 mb-8">
                <div className="text-2xl font-bold text-center">Favourite Movies</div>

                {data?.length !== 0 ?
                    <div className="flex flex-wrap justify-evenly gap-14 w-full">
                        <MovieCard data={data} favourite />
                    </div>
                    :
                    <div className="flex flex-wrap justify-evenly gap-14 w-full">
                        <h2>No Data Found! </h2>
                    </div>
                }
            </div>
        </>
    )
}

export default Favorite