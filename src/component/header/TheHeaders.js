import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

const TheHeaders = ()=> {
    return(
        <div className="min-w-screen h-20 bg-white rounded-br-lg rounded-bl-lg">
            <ul className={'flex items-center w-1/2 mx-auto'}>
                <li className={"transition duration-200 hover:bg-gray-400"}>
                    <Link to={'/'}>Home</Link>
                </li>
                <li className={"transition duration-200 hover:bg-gray-400"}>
                    <Link to={'/login'}>Login</Link>
                </li>

            </ul>
        </div>
    )
}

TheHeaders.propTypes = {

}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {})(React.memo(TheHeaders))