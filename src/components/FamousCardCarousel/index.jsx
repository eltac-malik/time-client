import React,{useEffect,useState} from "react";
import "./FamousCard.css";
import axios from 'axios'
import Slider from "react-slick";
import Famous from './Famous'

function Index() {

  var cardSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [fam,setFam] = useState([]);
  
  useEffect(()=>
  {
    axios.get("http://ejtacmalik-001-site1.btempurl.com/api/Products/getall/2")
    .then(resp=> setFam(resp.data.items))
  },[])



  return (
    <div className="famous">
      <Slider className='card-slide' {...cardSettings}>

        {
          fam&&fam.map(e=>
            {
              return(
                <Famous e={e}/>
              )
            })
        }
      </Slider>
    </div>
  );
}

export default Index;