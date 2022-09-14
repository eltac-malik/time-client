import React, { useState, useEffect } from "react";
import "assets/css/Shop.css";
import { Link } from "react-router-dom";
import ShopCard from 'components/ShopCard/ShopCard'
import 'assets/css/Blog.css'
import {useNavigate} from 'react-router-dom'
import axios from "axios";

function Shop() {
  const [inpb,setInpb] = useState("") 
  const [blog,setBlog] = useState([]) 
  
  useEffect(()=>
  {
    axios.get("http://ejtacmalik-001-site1.btempurl.com/api/Blogs")
    .then(resp=> setBlog(resp.data))
  },[])


  const navigate = useNavigate()

  const handleRead = (e)=>
  {
    navigate(`/blog/${e}`)
  }

  return (
    <div className="shop blogs">
      <div className="route">
        <p className="route-path">
          <Link className="link-b" to="/">
            Home
          </Link>{" "}
          <i className="fa-solid fa-angle-right btw"></i>{" "}
          <Link className="link-b crnt" to="/blog">
            Blog
          </Link>
        </p>
      </div>

      <div className="shop-content">
        <div className="search-bar">
          <div className="search-part">
            <h3 className="search-title">Search</h3>
            <input onChange={(e)=> setInpb(e.target.value)} className="inp-search" type="text" />
          </div>

          <div className="search-part adv">
            <h3 className="search-title">Custom Menu</h3>
            <div className="search-data">
              <Link to='/' className="search-param">Home</Link>
              <Link to='/blog' className="search-param">Blog</Link>
              <Link to='/contact' className="search-param">Contact</Link>
              <Link to='/shop' className="search-param">Products</Link>
            </div>
          </div>
          <div className="search-part adv">
            <h3 className="search-title">Archive</h3>
            <div className="search-data">
              <label htmlFor="1" className="search-param x-par">
                Best Fashion Smartwatch Collection
              </label>
              <label htmlFor="1" className="search-param x-par">
              Nice Leather Watch Collection
              </label>
              <label htmlFor="1" className="search-param x-par">
              Blackshine Smartwatch Collection
              </label>


            </div>
          </div>

       
        </div>

    <div className="blgs">

    {
      blog&&blog.filter(e=>
        {
          if (inpb==='')
          {
          return e  
          }
          else if(e.name.toLowerCase().includes(inpb.toLowerCase())||e.mainBlog.toLowerCase().includes(inpb.toLowerCase()))
          {
            return e
          }
        }

      ).map(e=>
        {
          return(
        <div key={e.id} className="blg-map">
          <div className="blg-img">
            <img src={`http://ejtacmalik-001-site1.btempurl.com/blogs/${e.image}`} alt=""/>
          </div>
          <div className="blg-cnt">
            <p className='blg-title'>{e.name}</p>
            <p className='blg-t'>{e.mainBlog.slice(0,50)}......</p>
            <p className='blg-t'>{e.subBlog.slice(0,100)}......</p>
            <div className="blg-btn">
              <div onClick={()=> handleRead(e.id)} className="blg-read">
                Read More
              </div>
            </div>
          </div>
        </div>  
        )
    }
      )}

      </div>

    </div>

  


  
  
    </div>
  );
}

export default Shop;