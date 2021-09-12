import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'
import {createBrowserHistory} from "history";

const PrivateRoute = ({component: Component, Auth, ...rest}) => {

    return (
        <Route
            {...rest}
            history={createBrowserHistory}
            render={(props) => {
                return !Auth.loading ?
                    Auth.isAuthenticated && Auth.token !== null ?
                        (
                            <Component {...props}/>
                        ) : <Redirect to="/login"/>
                    : <p>Loading... </p>
            }}
        />

    )
}

const mapStateToProps = state => ({
    Auth: state.Auth
})

export default connect(mapStateToProps, {})(React.memo(PrivateRoute))
