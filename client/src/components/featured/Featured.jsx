import React, { useState } from 'react'
import {useNavigate}  from "react-router-dom"
import './Featured.scss'

const Featured = () => {
  const [input,setInput] = useState("")
  const navigate = useNavigate()

  const handleSubmit = ()=>{
    navigate(`/gigs?search=${input}`)
  }
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
        <h1>
            {/* Find the perfect <span>freelance</span> services for your business */}
            Find the perfect<span style={{textShadow:"3px 3px #a91d3a"}}> spots </span> to showcase your brand.
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="" placeholder="Try building mobile app" onChange={(e) => setInput(e.target.value)} />
            </div>
            <button style={{
              backgroundColor:"#a91d3a",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px"
            }} onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            {/* <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button> */}
        
          </div>
        </div>

        <div className="right">
            <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Featured
