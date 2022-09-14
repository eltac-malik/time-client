import React, { useState, useEffect } from "react";
import 'assets/css/BlogDetails.css'
import {useParams} from 'react-router-dom'
import axios from "axios";
import { Link } from "react-router-dom";



function BlogDetails() {

    const {id} = useParams()
    const [oddB,setOddB] = useState(undefined)

      
  useEffect(()=>
  {
    axios.get("http://ejtacmalik-001-site1.btempurl.com/api/Blogs")
    .then(resp=> setOddB(resp.data))
  },[])

  let x = oddB&&oddB.find(e=> e.id ===Number(id))
  console.log(x);
  
    return (
        <div className='shop blog'>
           
      <div className="route">
        <p className="route-path">
          <Link className="link-b" to="/">
            Home
          </Link>{" "}
          <i className="fa-solid fa-angle-right btw"></i>{" "}
          <Link className="link-b crnt" to={`/blog`}>
            Blog Details
          </Link>
        </p>
      </div>

      <div className="blog-bar shop-content">

        <div className="search-bar">

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
        <div className="blg-dt">
            <div className="img-title">
                <marquee>{x&&x.name}</marquee>
            </div>
            <div className="img-blogs">
            <img src={`http://ejtacmalik-001-site1.btempurl.com/blogs/${x&&x.image}`} alt=""/>
            </div>
            <div className="img--content">
              <div className="main-blg">
              <p className='m-blg'>{x&&x.mainBlog}</p>
              <p className='sub-blg'>{x&&x.subBlog}</p>
              </div>
              <Link to='/blog' className='link-b reg'>⬅ Go Back</Link>
            </div>
        </div>
      </div>

        </div>
    )
}

export default BlogDetails