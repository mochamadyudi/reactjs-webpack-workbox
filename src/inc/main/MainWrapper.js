import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
import TheHeaders from "../../component/header/TheHeaders";

const MainWrapper = ({children})=> {
    return(
        <div className={'space-y-6 w-full block'}>
            <TheHeaders/>
            <div className="block w-full h-screen border max-w-6xl mx-auto">
                {children}
            </div>

        </div>
    )
}

MainWrapper.propTypes = {
    children: PropTypes.element.isRequired
}

export default MainWrapper
