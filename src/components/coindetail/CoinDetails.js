import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Baseurl } from '../baseURL/baseURL'
import Loader from '../loader/Loader'
import { useParams } from 'react-router-dom'
import './CoinDetail.css'
const CoinDetails = () => {
const {id} = useParams();
const [loading, setLoading] = useState(false)
  // useEffect(()=>{
  //   const getCoinDetail = async()=>{
  //     const {data} = await axios.get(`${Baseurl}/coins/${id}`)
  // setCoin(data)
  // setLoading(false)
  //   }
  //   getCoinDetail();
  // },[])
  return (
    <>
    {
      loading ? <Loader/> :
      <>
      <div className="coin-detail">
        <div className="coin-info">
          <div className="time"></div>
          <div className="coin-image"><img src="" alt="" /></div>
          <div className="coin-name"></div>
          <div className="coin-price"></div>
          <div className="coin-profit"></div>
          <div className="coin-marketrank"></div>
          <div className="coin-desc"></div>
        </div>
      </div>
      </>
    }
    </>
  )
}

export default CoinDetails