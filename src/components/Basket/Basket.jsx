import React,{useEffect,useState} from 'react'
import './Basket.css'
import {useSelector,useDispatch} from 'react-redux'
import {setBasket,decCount} from 'redux/basketSlice'

function Basket({bs}) {

    const [bsdata,setBsData] = useState([])
    const dispatch = useDispatch()
    const x = useSelector(state => state.basket.basket)
    
    useEffect(()=>
    {
        setBsData(JSON.parse(localStorage.getItem("basket")))
    },[])

    let sum = 0;

    x&&x.forEach(element => {
        sum = sum= sum+element.discountPrice
    });
  
    const handleOrder = ()=>
    {
        
    }

    const handleDel = (e)=>
    {
        let newBasket = x.filter(z=> z.id != e.id)
        localStorage.setItem('basket',JSON.stringify(newBasket))
        dispatch(setBasket(localStorage.getItem('basket')))
    }



    return (
        <div className={`bskt ${bs}`}>
                            {
                    x!==[]?x.map((e)=>
                    {
                        return(
                            <div className='bs-item'>
                            <p className='item-name'>{e.name}</p>
                                <p className='item-name'>{e.discountPrice} AZN</p>
                                <i class="fa-solid fa-trash basket-trash" onClick={()=> handleDel(e)}></i>
                            </div>
                        )
                    }):<div>salam</div>
                }

            <div className="totalsum">
                <p className='sub-basket' onClick={()=> handleOrder()}>Submit Basket</p>
                <h1 className='price'>TOTAL : {sum===0?0:sum}AZN</h1>
            </div>
        </div>
    )
}

export default Basket