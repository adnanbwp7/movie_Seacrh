import axios from 'axios';
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const NavBar = ({ setData, search, setSearch }) => {
    const location = useLocation()

    const getData = async (value) => {
        const apikey = import.meta.env.VITE_API_KEY
        const res = await axios.get(`http://www.omdbapi.com/?s=${value}&apikey=${apikey}`)
        if (res.data.Response === "True") {
            res.data.Search.length > 0 ? setData(res.data.Search) : setData([])
        } else {
            setData([])
        }
    }

    const onSearch = (e) => {
        setSearch(e.target.value)
        getData(e.target.value)
    }

    return (
        <>
            <nav className="bg-black border-gray-200 px-0 md:px-4 py-2.5 rounded dark:bg-gray-900 sticky w-full top-0 z-40">
                <div className="container flex flex-wrap flex-col sm:flex-row items-center justify-between mx-auto p-5">
                    <a className="flex items-center sm:w-fit md:w-3/12">
                        <svg id="home_img" class="ipc-logo" xmlns="http://www.w3.org/2000/svg" width="64" height="32" viewBox="0 0 64 32" version="1.1"><g fill="#F5C518"><rect x="0" y="0" width="100%" height="100%" rx="4"></rect></g><g transform="translate(8.000000, 7.000000)" fill="#000000" fill-rule="nonzero"><polygon points="0 18 5 18 5 0 0 0"></polygon><path d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path><path d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path><path d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path></g></svg>
                    </a>
                    <div className="flex w-full sm:w-9/12 md:w-8/12 items-center flex-wrap justify-between">
                        <div className="flex w-full sm:w-1/2 md:w-1/3 my-5 sm:my-1 justify-around min-w-[200px]">
                            <Link className={`hover:underline ${location.pathname === "/" ? 'text-yellow-400 font-bold underline' : 'text-white font-normal'}`} to="/">Home</Link>
                            <Link className={`hover:underline ${location.pathname === "/favorite" ? 'text-yellow-400 font-bold underline' : 'text-white font-normal'}`} to="/favorite">Favorite</Link>
                        </div>
                        <div className="relative w-full sm:w-1/2 md:w-1/3 min-w-[200px]">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" name='search' value={search} onChange={onSearch} id="search-navbar" className=" w-full p-2 pl-8 text-sm text-gray-50 border border-gray-800 rounded-lg bg-black " placeholder="Search Movies Here..." />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar