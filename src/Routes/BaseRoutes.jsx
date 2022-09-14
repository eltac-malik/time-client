import React from 'react'
import Nav from'components/Nav/Navbar'
import Foot from 'components/Footer/Footer'

function BaseRoutes({children}) {
    return (
        <div>
            <Nav/>
            {children}
            <Foot/>
        </div>
    )
}

export default BaseRoutes