import React, { useState, useEffect } from "react";
import "assets/css/Shop.css";
import { Link } from "react-router-dom";
import ShopCard from 'components/ShopCard/ShopCard'
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Shop() {
  const [inp,setInp] = useState("") 
  
  
  
  const [category, setCategory] = useState('');
  const [brands, setBrands] = useState('');
  const [color, setColor] = useState('');

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleChangeBrand = (event) => {
    setBrands(event.target.value);
  };
  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };



  return (
    <div className="shop">
      <div className="route">
        <p className="route-path">
          <Link className="link-b" to="/">
            Home
          </Link>{" "}
          <i className="fa-solid fa-angle-right btw"></i>{" "}
          <Link className="link-b crnt" to="/shop">
            Shop
          </Link>
        </p>
      </div>

      <div className="shop-content">
        <div className="search-bar">
          <div className="search-part">
            <h3 className="search-title">Search</h3>
            <input onChange={(e)=> setInp(e.target.value)} className="inp-search" type="text" />
          </div>

          <div className="search-part adv">
            <h3 className="search-title">Categories</h3>
            
      <Box className='box-search' sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChangeCategory}
        >
          <MenuItem value={'Digital'}>Digital</MenuItem>
          <MenuItem value={'Quatrz'}>Quatrz</MenuItem>
          <MenuItem value={'Solar'}>Solar</MenuItem>
          <MenuItem value={'Solar'}>Analog</MenuItem>
        </Select>
      </FormControl>
    </Box>
     </div>
   
   
   
   
     <div className="search-part adv">
       <h3 className="search-title">Brands</h3>
                        
      <Box className='box-search' sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Brand</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={brands}
          label="Brand"
          onChange={handleChangeBrand}
        >
          <MenuItem value={''}>All</MenuItem>
          <MenuItem value={'5'}>Casio</MenuItem>
          <MenuItem value={'6'}>Rolex</MenuItem>
          <MenuItem value={'7'}>Tissot</MenuItem>
          <MenuItem value={'13'}>Calvin Clain</MenuItem>
        </Select>
      </FormControl>
    </Box>

          </div>



       
        </div>
        <ShopCard category={category} brands={brands} inp={inp}/>
    
      </div>
  


  
  
    </div>
  );
}

export default Shop;