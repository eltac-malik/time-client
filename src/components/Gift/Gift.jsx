import React from 'react'
import './Gift.css'
import {useNavigate} from 'react-router-dom'


function Gift() {

    const navigate = useNavigate()

    return (
        <div className='gifts'>
            <div className="gift-sec">
            <div className="gift-content">
            <div className="gift-c">
            <p className='special'>SPECIAL OFFER</p>
            <p className='succelent'>SUCCULENT GARDEN</p>
            <h1>GIFT BOXES</h1>
            <p className='planter'>From planter materials to style options, discover which planter is best for your space.</p>
            <div className="btn-explore">
            <button onClick={()=> navigate("/shop")}>Explore The Shop</button>
            </div>
           </div>
             </div>
            <div className="gift-img">
            <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/694x424_e23c122a-8d28-40ec-ba10-87e28f07c2ba.jpg?v=1559383318" alt=""/>
            </div>
            </div>
        </div>
    )
}

export default Gift