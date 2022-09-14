import {useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router,Routes,Route,useLocation,Navigate} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from 'Pages/Contact'
import Login from 'Pages/Login'
import Base from 'Routes/BaseRoutes'
import Shop from 'Pages/Shop'
import Profile from 'Pages/Profile'
import Blog from 'Pages/Blog'
import Reset from 'components/ResetPassword/index'
import Details from 'Pages/ProductDetails'
import BDetails from 'Pages/BlogDetails'
import Registers from 'Pages/Registers'
import {useDispatch} from 'react-redux'
import {setBasket} from 'redux/basketSlice'


function App() {



  useEffect(()=>
  {
    if (JSON.parse(localStorage.getItem("basket"))===null)
    {
      localStorage.setItem("basket",JSON.stringify([]))  
    }
  },[])

  const dispatch = useDispatch()
  useEffect(()=>
  {
    
    if (JSON.parse(localStorage.getItem("basket"))===null)
    {
      console.log("salaaslkakhdakjfhskfhksjhfjksdhfkdsh");
      localStorage.setItem("basket",JSON.stringify([])) 
      dispatch(setBasket(JSON.parse(localStorage.getItem("basket"))))
      
    }
    else
    {
      dispatch(setBasket(JSON.parse(localStorage.getItem("basket"))))
    }
  },[])

  let location = useLocation()

  return (
    <div className="App">

        <Routes  location={location} key={location.key}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Base><Home/></Base>}/>
          <Route path='/details/:id' element={<Base><Details/></Base>}/>
          <Route path='/profile' element={<Base><Profile/></Base>}/>
          <Route path='/reset' element={<Base><Reset/></Base>}/>
          <Route path='/blog' element={<Base><Blog/></Base>}/>
          <Route path='/blog/:id' element={<Base><BDetails/></Base>}/>
          <Route path='/registers' element={<Registers/>}/>
          <Route path='/contact' element={<Base><Contact/></Base>}/>
          <Route path='/shop' element={<Base><Shop/></Base>}/>

        </Routes>
    </div>
  );
}

export default App;