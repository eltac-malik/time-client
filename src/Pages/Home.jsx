import React,{useEffect} from 'react'
import "../assets/css/Home.css"
import SliderCarousel from 'components/Slider/SliderCarousel'
import Support from 'components/Support/Support'
import Famous from 'components/FamousCardCarousel'
import Gift from 'components/Gift/Gift'
import Watch from 'components/Watch/Watch';

function Home() {


  useEffect(()=>
  {
    if (JSON.parse(localStorage.getItem("basket"))===null)
    {
      localStorage.setItem("basket",JSON.stringify([]))  
    }
  },[])

    return (
        <div className='home'>
        <SliderCarousel/>
        <div className="cont">
        <Support/>
        </div>
        <div className="cont">
            <Famous/>
        </div>
        <div className="cont">
            <Gift/>
        </div>
        <div className="cont">
            <Watch/>
        </div>
        </div>
    )
}

export default Home