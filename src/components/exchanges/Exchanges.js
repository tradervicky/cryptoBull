import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Baseurl } from '../baseURL/baseURL'
import Header from '../header/Header'
import Loader from '../loader/Loader'
import './Exchanges.css'
const Exchanges = () => {
// loader
const [loading, setLoading] = useState(false)
const [exchanges, setExchanges] = useState([])

    
    // useEffect(()=>{
    //     const getExchangesData =async ()=>{
    //         const {data} = await axios.get(`${Baseurl}/exchanges`)
    //         console.log(data)
    //  setLoading(false)
    //  setExchanges(data)
    //     }
    //     getExchangesData();
    // },[])
  return (
    <>
    {
        loading ? <Loader/> :<>
        <Header/>
        <div>
            {exchanges.map((data, index)=>
            <div key={index} className='ex-cards'>
                <div className={data.image}>
                    <img src="" alt="image" />
                </div>
                <div className='name'>
                    {data.name}
                </div>
                <div className="price">{data.trade_volume_24h_btc.toFixed(2)}</div>
                <div className="rank">{data.trust_score_rank}</div>
            </div>)}

        </div>
        </> 
    }
    
    </>
  )
}

export default Exchanges