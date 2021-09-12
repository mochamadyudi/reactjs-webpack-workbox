import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const MainWrapper = ({children})=> {
    return(
        <div className={`min-w-screen min-h-screen`}>
            <div className="w-full h-20 bg-gray-100">
                <Link to={'/'}>Home</Link>
                <Link to={'/login'}>Login</Link>
            </div>
            {children}
        </div>
    )
}

MainWrapper.propTypes = {
    children: PropTypes.element.isRequired
}

export default MainWrapper
