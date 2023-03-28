import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './loader'

const Detail = () => {
    const [data, setData] = useState({})
    const [rating, setRating] = useState('')
    const params = useParams()
    const apikey = import.meta.env.VITE_API_KEY

    const getDetail = async () => {
        const res = await axios.get(`http://www.omdbapi.com/?i=${params.id}&apikey=${apikey}`)
        if (res.status === 200) {
            setData(res.data)
            if (data?.Ratings?.length > 0)
                setRating(data.Ratings.find(item => item.Source === "Rotten Tomatoes")?.Value)
        }
    }

    useEffect(() => {
        getDetail()
    }, [])


    return (
        <>
            {data ?
                <section className="text-gray-700 body-font overflow-hidden bg-black">
                    <div className="container px-5 py-8 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img className={`lg:w-1/2 w-full object-cover object-center rounded-3xl border border-gray-200 ${data.Poster === "N/A" ? "hidden" : "flex"}`} src={data.Poster} />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h1 className="text-gray-50 text-3xl title-font font-medium mb-1">
                                    {data?.Title}
                                    {data?.Year && <span className='text-xl ml-2' >({data?.Year})</span>}
                                </h1>

                                <p className="leading-relaxed text-gray-50">
                                    {data?.Plot}
                                </p>
                                <div className="flex flex-col">
                                    {data.imdbRating &&
                                        <div className="flex items-center text-gray-50 text-3xl title-font font-medium my-4 gap-2">
                                            <span className='text-xl mr-2' >
                                                <svg id="home_img" class="ipc-logo" xmlns="http://www.w3.org/2000/svg" width="64" height="32" viewBox="0 0 64 32" version="1.1"><g fill="#F5C518"><rect x="0" y="0" width="100%" height="100%" rx="4"></rect></g><g transform="translate(8.000000, 7.000000)" fill="#000000" fill-rule="nonzero"><polygon points="0 18 5 18 5 0 0 0"></polygon><path d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path><path d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path><path d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path></g></svg>
                                            </span>
                                            <span className='text-4xl mr-2' >{data?.imdbRating}</span>
                                        </div>}
                                    {rating &&
                                        <div className="flex items-center text-gray-50 text-3xl title-font font-medium my-4 gap-2">
                                            <span className='text-xl mr-2' >
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="70" height="35" viewBox="0 0 80 80" version="1.1"><title>Icons/Tomatometer &amp; AS/fresh</title><desc>Created with Sketch.</desc><defs>    <polygon id="path-1" points="0.000109100102 0.246970954 77.0827837 0.246970954 77.0827837 63.7145228 0.000109100102 63.7145228" /></defs><g id="Icons/Tomatometer-&-AS/fresh" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><g id="Group"><rect id="Rectangle-Copy-2" fill="#000000" opacity={0} x={0} y={0} width={80} height={80} /><g id="RT_Fresh_Tomato_RGB-(1)" transform="translate(1.327801, 0.000000)"><g id="Group-3" transform="translate(0.000000, 16.265560)"><mask id="mask-2" fill="white"><use xlinkHref="#path-1" /></mask><g id="Clip-2" /><path d="M77.0137759,27.0426556 C76.2423237,14.6741909 69.9521992,5.42041494 60.4876349,0.246970954 C60.5414108,0.548381743 60.273195,0.925145228 59.9678008,0.791701245 C53.7772614,-1.91634855 43.2753527,6.84780083 35.9365975,2.25825726 C35.9917012,3.90539419 35.6700415,11.940249 24.3515353,12.4063071 C24.0843154,12.4172614 23.9372614,12.1443983 24.1062241,11.9512033 C25.619917,10.2247303 27.1482158,5.85360996 24.9507054,3.5233195 C20.2446473,7.74041494 17.5117012,9.32746888 8.48829876,7.23319502 C2.71103734,13.2740249 -0.562655602,21.5419087 0.08,31.8413278 C1.39120332,52.86639 21.0848133,64.8846473 40.9165145,63.6471369 C60.746888,62.4106224 78.3253112,48.0677178 77.0137759,27.0426556" id="Fill-1" fill="#FA320A" mask="url(#mask-2)" /></g><path d="M40.8717012,11.4648963 C44.946722,10.49361 56.6678838,11.3702905 60.4232365,16.3518672 C60.6486307,16.6506224 60.3312863,17.2159336 59.9678008,17.0572614 C53.7772614,14.3492116 43.2753527,23.113361 35.9365975,18.5238174 C35.9917012,20.1709544 35.6700415,28.2058091 24.3515353,28.6718672 C24.0843154,28.6828216 23.9372614,28.4099585 24.1062241,28.2167635 C25.619917,26.4902905 27.1478838,22.1191701 24.9507054,19.7888797 C19.8243983,24.3827386 17.0453112,25.8589212 5.91900415,22.8514523 C5.55485477,22.753195 5.67900415,22.1679668 6.06639004,22.020249 C8.16929461,21.2165975 12.933444,17.6965975 17.4406639,16.1450622 C18.2987552,15.8499585 19.1541909,15.6209129 19.9890456,15.4878008 C15.02639,15.0443154 12.7893776,14.3541909 9.63286307,14.8302075 C9.28697095,14.8823237 9.05195021,14.479668 9.26639004,14.2034855 C13.5193361,8.7253112 21.3540249,7.07087137 26.1878838,9.98107884 C23.2082988,6.28912863 20.8743568,3.34473029 20.8743568,3.34473029 L26.4046473,0.203485477 C26.4046473,0.203485477 28.6894606,5.30821577 30.3518672,9.02340249 C34.4657261,2.94506224 42.119834,2.38406639 45.3536929,6.69676349 C45.5455602,6.95302905 45.3450622,7.31751037 45.0247303,7.30987552 C42.3926971,7.24580913 40.9434025,9.63983402 40.833527,11.4605809 L40.8717012,11.4648963" id="Fill-4" fill="#00912D" /></g></g></g></svg>
                                            </span>
                                            <span className='text-4xl mr-2' >
                                                {rating}
                                            </span>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <Loader />
            }
        </>
    )
}

export default Detail