import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Baseurl } from '../baseURL/baseURL'
import Header from '../header/Header'
import Loader from '../loader/Loader'
import '../exchanges/Exchanges.css'
import { Link } from 'react-router-dom'
const Coins = () => {
// loader
const [loading, setLoading] = useState(false)
const [coins, setCoins] = useState([])
const [currency, setCurrency] = useState('inr')
    const currencySymbol = currency === 'inr' ? "₹" : "$"
    // useEffect(()=>{
    //     const setCoinData =async ()=>{
    //         const {data} = await axios.get(`${Baseurl}/coins/markets?vs_currency=${currency}`)
    //         console.log(data)
    //     }
    //     setCoinData();
    //  setLoading(true) // when uncommnt change the loading
    // },[])

  return (
    <>
    {
        
        loading ? <Loader/> :
        <>
        <Header/>
        <div className="btn">
            <button onClick={()=>setCurrency('inr')}>inr</button>
            <button onClick={()=>setCurrency('usd')}>usd</button>
        </div>

        {
            coins.map((data, index)=>
            
            <CoinCard data = {data} index = {index} id= {data.id} currencySymbol= {currencySymbol}/>
            

        
            )
        }
        </>
    }
    </>
  )
}

const CoinCard = ({data, index, currencySymbol, id})=>{
    const profit = data.price_change_percentage_24h > 0
    return(
        <Link to={`/coins/${id}`} style={{color:"white", textDecoration:"none"}}>
        <div key={index} className='ex-cards'>
                <div className={data.image}>
                    <img src="" alt="image" />
                </div>
                <div className='name'>
                    {data.name}
                </div>
                <div className="price">{currencySymbol} {data.current_price.toFixed(2)}</div>
                <div className="rank" style={profit ? {color: "green"} : {color:"red"}}>{profit ? "+"+data.price_change_percentage_24h.toFixed(2) : "-"+data.price_change_percentage_24h.toFixed(2)}</div>
            </div>
        </Link>
    )
}

export default Coins