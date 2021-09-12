import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'

import Login from "../../container/pages/authentication/Login";
import Home from "../../container/pages/Home";
import MainWrapper from "./MainWrapper";


const Routes = ()=> {
    return(
        <MainWrapper>
            <Switch>
                <Route path={'/'} exact={true} name="Login" component={Home}/>
                <Route path={'/login'} name="Login" component={Login}/>
            </Switch>
        </MainWrapper>
    )
}
Routes.propTypes = {

}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {})(React.memo(Routes))
