import React from 'react'
import "./Wish.css"
import {useSelector,useDispatch} from 'react-redux'
import {setWish} from 'redux/basketSlice'

function Wish({wish}) {
    const wishList = useSelector(state => state.basket.wishList)
    const dispatch = useDispatch()
    const delWish = (e)=>
    {
        let wish = JSON.parse(localStorage.getItem('wish'))
        let newWish = wish.filter(z=> z.id!=e.id)
        localStorage.setItem("wish",JSON.stringify(newWish))
        let newArr = JSON.parse(localStorage.getItem("wish"))
        dispatch(setWish(newArr))

    }


    return (
        <div className={`wish ${wish}`}>
            {
                wishList&&wishList.map(e=>
                    {
                        return(
                            <p className='wish-p'><p className='wish-img'><img src={`http://ejtacmalik-001-site1.btempurl.com/downloads/${e.secondImage}`} alt=""/></p><p className='widh-name'>{e.name}</p><p className='wish-del'><i className="bi bi-trash2-fill" onClick={()=> delWish(e)} ></i></p></p>
                        )
                    })
            }
        </div>
    )
}

export default Wish
