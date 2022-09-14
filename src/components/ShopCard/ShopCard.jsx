import React, { useState, useEffect } from "react";
import './ShopCard.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setBasket,addCount,setWish} from 'redux/basketSlice'


function ShopCard({inp,category,brands}) {

    const [pdata,setPdata] = useState([])
    const [style,setStlye] = useState("crds")

    useEffect(()=>
    {
      axios.get("http://ejtacmalik-001-site1.btempurl.com/api/Products/getall/2")
      .then(resp=> setPdata(resp.data.items))
    },[])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(pdata);
    
    
    const handleBasket = (e)=>
  {
    if(JSON.parse(localStorage.getItem("Utoken"))===null)
    {
      navigate("/login")
    }
    else
    {
        let x = JSON.parse(localStorage.getItem("basket"))
        let z = x.find(y=>y.id==e.id)
        if (z==undefined)
        {
            localStorage.setItem("basket",JSON.stringify([...x,e]))
            dispatch(setBasket(JSON.parse(localStorage.getItem("basket"))))
            dispatch(addCount())
        }
    }
  }
 
    const handleDeatils = (e)=>
    {
        navigate(`/details/${e}`)
    }

    const handleWish = (e)=>
    {
        console.log(e);
        let wish = JSON.parse(localStorage.getItem('wish'))
        let z = wish.find(x=> x.id === e.id)
        if (z===undefined)
        {
            localStorage.setItem('wish',JSON.stringify([...wish,e]))
            let wished = JSON.parse(localStorage.getItem('wish'))
            dispatch(setWish(wished))
        }
        else
        {
            let delWish = wish.filter(z=> z.id !=e.id)
            localStorage.setItem('wish',JSON.stringify(delWish))
            let wishes = JSON.parse(localStorage.getItem('wish'))
            dispatch(setWish(wishes))
        }
    }


    return (
        <div className='sp-card'>
            <div className="adverstment">
                <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/825x220.jpg?v=1559383366" alt=""/>
            </div>
            <div className="style-map">
                <div className="st-map">
                    <p className='sort-st'>Sort Style</p>
                    <div onClick={(e)=>{setStlye("crds")}} className="st1">
                    <i className="bi bi-grid-3x3-gap-fill map-icon"></i>
                    </div>
                    <div onClick={()=>{setStlye("crds-style")}} className="st1 st2">
                    <i className="bi bi-list map-icon line-icon"></i>
                    </div>
                    
                </div>
            </div>
            <div className="all-card">
            {
                pdata&&pdata.filter(e=>
                    {
                        if(inp==="")
                        {
                            return e
                        }
                        else if(e.name.toLowerCase().includes(inp.toLowerCase())||e.code.toLowerCase().includes(inp.toLowerCase()))
                        {
                            return e
                        }
                    }).filter(e=> brands!==''?e.brandId===brands:e).filter(e=> !e.isDeleted).map(e=> 
                {
                    return(
                        <div key={e.id} onClick={(z)=>
                        {
                            handleDeatils(e.id)
                            z.stopPropagation()
                        }}  className={style}>
                        <div className="card-img">
                            <img src={`http://ejtacmalik-001-site1.btempurl.com/downloads/${e.secondImage}`} alt=""/>
                            <div className="cmnd">
                            <i className="bi bi-info-circle"></i>
                            <i className={`bi bi-heart`} onClick={(z)=> 
                            {
                                handleWish(e)
                                z.stopPropagation()
                            }}></i>
                            <i className="bi bi-bag-plus"></i>
                            </div>
                        </div>
                        <p className='c-title'>{e.name} {e.code}</p>
                        <div className="p-list">
                            <p className='d-pr'>$ {e.discountPrice}</p>
                            <p className='pr'>$ {e.price}</p>
                        </div>
                        <div onClick={(z)=>
                        {
                            handleBasket(e)
                            z.stopPropagation()
                        }} className="add">
                        <i className="bi bi-cart"></i>
                        Add to Cart
                        </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ShopCard