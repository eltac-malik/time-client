import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import './Slider.css'
import axios from 'axios'

function SliderCarousel() {

  const [sld,setSld] = useState([])

  useEffect(()=>
    {
      axios.get("http://ejtacmalik-001-site1.btempurl.com/api/Homes/slider")
      .then(resp=> setSld(resp.data))
    },[])

    
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <>
      <Slider {...settings}>
      {
        sld&&sld.map(e=>
          {
            return(
        <div key={e.id} className="slider-item">
            <img src={`http://ejtacmalik-001-site1.btempurl.com/sliders/${e.image}`} alt=""/>
        </div>
            )
          })
      }
      </Slider>
    </>
  );
}

export default SliderCarousel;