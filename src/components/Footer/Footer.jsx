import React,{useState,useEffect} from "react";
import axios from 'axios'
import "./Footer.css";

function Footer() {

  const [foot,setFoot] = useState([])
  useEffect(()=>
  {
    axios.get("http://ejtacmalik-001-site1.btempurl.com/api/Blogs")
    .then(resp=> setFoot(resp.data))
  },[])

  let seen = foot&&foot.slice(0,2)

  return (
    <div className="footer">
      <div className="address foot">
        <div className="address-img">
        {/* <img
            src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/Timekeeper-b_150x.png?v=1559116234"
            alt=""
          /> */}
        </div>
        <div className="address-data">
            <h3>Address</h3>
            <p>AF Business House</p>
        </div>
        <div className="address-data need">
            <h3>Need Help?</h3>
            <p>Call: 1-800-345-6789</p>
        </div>
        <div className="socials">
            <div className="icon-s fb"><i className="fa-brands fa-facebook-f"></i></div>
            <div className="icon-s tw"><i className="fa-brands fa-twitter"></i></div>
            <div className="icon-s gg"><i className="fa-brands fa-google"></i></div>
            <div className="icon-s yt"><i className="fa-brands fa-youtube"></i></div>
            
        </div>
      </div>
      <div className="about-use foot">
        <div className="about-usefull">
          <h2>About Menu</h2>
          <p>Home</p>
          <p>Shop New</p>
          <p>Product Sale</p>
          <p>Blog</p>
          <p>Pages</p>
        </div>
        <div className="about-usefull">
          <h2>Usefull Links</h2>
          <p>Privacy Policy</p>
          <p>Shop New</p>
        </div>
      </div>
      <div className="latest foot">
        <h2>Latest Blogs 📠</h2>
        {
          seen.map(e=>
            {
              return(
                <div className="footcard">
                  <div className="foot-img">
                  <img src={`http://ejtacmalik-001-site1.btempurl.com/blogs/${e.image}`} alt=""/>
                  </div>
                  <div className="foot-cont">
                    <h4>{e.name}</h4>
                  </div>
                </div>
              )
            })
        }
      </div>
    </div>
  );
}

export default Footer;