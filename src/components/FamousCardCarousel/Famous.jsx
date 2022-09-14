import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setBasket,addCount} from 'redux/basketSlice'

function Famous({e}) {



  const navigate = useNavigate()
  const dispatch = useDispatch()

    const handleBasket = ()=>
    {
      if(JSON.parse(localStorage.getItem("Utoken"))===null)
      {
        navigate("/login")
      }
      else
      {
          let basket = JSON.parse(localStorage.getItem("basket"))
        let z = basket.find(y=> y.id == e.id)

        if (z===undefined)
        {
            localStorage.setItem("basket",JSON.stringify([...basket,e]))
             dispatch(setBasket(JSON.parse(localStorage.getItem("basket"))))
             dispatch(addCount())
        }
           
      }
    }

    return (
        <>
               <div key={e.id} className='card-fam'>
                <div className="blck">      
                <div className="cards-img">
                <img src={`http://ejtacmalik-001-site1.btempurl.com/downloads/${e.secondImage}`} alt=""/>
                </div>
                </div>
                <h3>{e.name}</h3>
                <div className="add-crd">
                <p className='bs-c' onClick={handleBasket}>Add to Cart</p>
                </div>
              </div>
        </>
    )
}

export default Famous
