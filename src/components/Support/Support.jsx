import React from 'react'
import './Support.css'

function Support() {
    return (
        <div className='support'>
            <div className="free-shop sup">
                <div className="sup-img">
                    {/* <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/333_small.png?v=1559367618" alt=""/> */}
                </div>
                <div className="sup-content">
                    <h3 className='sup-h'>Free Shipping</h3>
                    <p className='sup-p'>Free Shipping on order</p>
                </div>
            </div>
            <div className="support-call sup">
            <div className="sup-img">
                    {/* <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/111_small.png?v=1559367608" alt=""/> */}
                </div>
                <div className="sup-content">
                    <h3 className='sup-h'>Support 24/7</h3>
                    <p className='sup-p'>Contact us 24 hrs a day</p>
                </div>
            </div>
            <div className="payment-sec sup">
            <div className="sup-img">
                    {/* <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/222_small.png?v=1559367648" alt=""/> */}
                </div>
                <div className="sup-content">
                    <h3 className='sup-h'>Payment Secure</h3>
                    <p className='sup-p'>Free shipping on order</p>
                </div>
            </div>
        </div>
    )
}

export default Support