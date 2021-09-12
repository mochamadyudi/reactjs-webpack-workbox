import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
import TheHeaders from "../../component/header/TheHeaders";

const MainWrapper = ({children})=> {
    return(
        <div className={`min-w-screen min-h-screen`}>
            <TheHeaders/>
            {children}
        </div>
    )
}

MainWrapper.propTypes = {
    children: PropTypes.element.isRequired
}

export default MainWrapper
