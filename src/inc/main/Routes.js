import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'

import Login from "../../container/pages/authentication/Login";
import Home from "../../container/pages/Home";
import MainWrapper from "./MainWrapper";
import classNames from "classnames";
class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisconnected: false
        }
    }

    componentDidMount() {
        this.handleConnectionChange();
        window.addEventListener('online', this.handleConnectionChange);
        window.addEventListener('offline', this.handleConnectionChange);
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.handleConnectionChange);
        window.removeEventListener('offline', this.handleConnectionChange);
    }


    handleConnectionChange = () => {
        const condition = navigator.onLine ? 'online' : 'offline';
        if (condition === 'online') {
            const webPing = setInterval(
                () => {
                    fetch('//google.com', {
                        mode: 'no-cors',
                    })
                        .then(() => {
                            console.log('pinged', this.state.isDisconnected)
                            this.setState({isDisconnected: false}, () => {
                                return clearInterval(webPing)
                            });
                        }).catch(() => this.setState({isDisconnected: true}))
                }, 2000);
            return;
        }

        return this.setState({isDisconnected: true});
    }

    render() {
        const {isDisconnected} = this.state;
        const classes = classNames({
            "hidden": !isDisconnected,
            "flex": isDisconnected
        })
        return (
            <MainWrapper>
                <div className={`fixed ${classes} items-center justify-center w-full p-4 z-20 `}>
                    <div className={`px-8 py-4 bg-gray-600 group transition duration-300 hover:bg-red-500 shadow-xl w-auto flex items-center justify-center rounded mx-auto space-x-4`}>
                            <span className={'w-6 text-red-500 transition duration-300 group-hover:text-white'}>
                                <svg
                                    className={'fill-current'}
                                    xmlns="http://www.w3.org/2000/svg" id="Layer_1"
                                    enableBackground={'new 0 0 512.009 512.009'} viewBox="0 0 512.009 512.009"><g><ellipse cx="256.004" cy="409.48"
                                                                                                                           rx="59.16" ry="59.16"
                                                                                                                           transform="matrix(.038 -.999 .999 .038 -162.999 649.582)"/><path
                                    d="m351.744 277.49c-57.522-39.284-133.749-39.427-191.48 0-17.349 11.84-19.51 36.58-4.69 51.4 11.359 11.359 29.366 13.018 42.81 3.9 34.66-23.487 80.448-23.576 115.24 0 23.734 16.088 55.141-2.621 52.52-30.83-.93-9.94-6.18-18.86-14.4-24.47z"/><path
                                    d="m426.924 205.97c-99.572-80.371-242.088-80.517-341.84 0-15.513 12.525-16.658 35.772-2.59 49.84 12.16 12.15 31.44 13.17 44.85 2.36 74.684-60.209 182.119-60.626 257.32 0 22.554 18.195 56.206 1.092 54.65-27.93-.5-9.47-5.02-18.32-12.39-24.27z"/><path
                                    d="m511.984 158.15c-.35-9.31-4.6-18.13-11.66-24.21-140.321-120.784-348.369-120.741-488.64 0-7.06 6.08-11.31 14.9-11.66 24.21-1.073 29.384 33.445 45.647 55.54 26.66 115.193-99.139 285.886-98.967 400.88 0 22.102 19.02 56.613 2.704 55.54-26.66z"/></g></svg>
                            </span>
                        <p className={`transition duration-200 cursor-default text-white font-semibold text-sm`}>Oops! Something went wrong, check your
                            connection.</p>
                    </div>

                </div>
                <div>
                    <Switch>
                        <Route path={'/'} exact={true} name="Login" component={Home}/>
                        <Route path={'/login'} name="Login" component={Login}/>
                    </Switch>
                </div>
            </MainWrapper>
        )
    }

}

export default Routes