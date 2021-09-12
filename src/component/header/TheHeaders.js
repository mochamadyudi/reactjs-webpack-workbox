import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

const TheHeaders = ()=> {
    const [menus,setMenus] = React.useState([
        {label:'Home', url:'/'},
        {label:'Overview', url:'/'},
        {label:'About Us', url:'/abous-us'},
        {label:'Contact Us', url:'/contact-us'},
        {label:'Privacy Policy', url:'/privacy-policy'},
    ])
    return(
        <div className="w-full h-20 bg-white rounded-br-lg rounded-bl-lg shadow-sm">
            <div className="w-full max-w-6xl mx-auto flex items-center mx-auto h-full">
                <div className="flex-none w-40 flex items-center h-full">
                    <div className="w-14 h-14 bg-purple-400 rounded-lg"/>
                </div>
                <div className="flex-grow">
                    <ul className="flex items-center  mx-auto space-x-4">
                        {
                            menus.map((item,index)=> (
                                <li className="transition duration-200 hover:bg-gray-100 rounded" key={index}>
                                    <Link to={item.url} className={'block w-full h-full px-4 py-2 text-sm text-gray-600'}>{item.label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex-none w-20  flex items-center justify-center h-full">
                    <button type="button" className="p-4 group rounded transition duration-200 hover:bg-purple-200">
                        <svg className="fill-current w-6 transition duration-200 group-hover:text-purple-600"
                             xmlns="http://www.w3.org/2000/svg" version="1.1"
                             id="Capa_1" x="0px" y="0px" viewBox="0 0 60.123 60.123"
                             enableBackground={'new 0 0 60.123 60.123'}>
                        <g>
                            <path
                                d="M57.124,51.893H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,51.893,57.124,51.893z"/>
                            <path
                                d="M57.124,33.062H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3   C60.124,31.719,58.781,33.062,57.124,33.062z"/>
                            <path
                                d="M57.124,14.231H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,14.231,57.124,14.231z"/>
                            <circle cx="4.029" cy="11.463" r="4.029"/>
                            <circle cx="4.029" cy="30.062" r="4.029"/>
                            <circle cx="4.029" cy="48.661" r="4.029"/>
                        </g>
                </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

TheHeaders.propTypes = {

}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {})(React.memo(TheHeaders))