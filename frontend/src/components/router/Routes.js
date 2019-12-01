/**
 * In order to add new routes you just need to add Route class to routeList in Routes class.
 * Admin routes are added without the adin prefix using AdminRoute class the same way.
 */
import React, { Component } from "react";
import {Switch, Route as ReactRoute, withRouter} from 'react-router-dom'

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ClientErr404 from '../pages/ClientErr404';
import Logout from '../pages/Logout';
import AdminHome from '../pages/admin/AdminHome';
import AdminErr404 from '../pages/admin/AdminErr404';

/**
 * trim / or \ at the end of the routes
 * @param {string} url 
 */
function trimUrl(url) {
    return url.replace(/[/\\]+$/, '');
}

/**
 * helper class to define the routing variables
 */
class Route {
    path = "";
    component = "";
    isAdmin = false;

    constructor(path, component, isAdmin = false) {
        this.path = path;
        this.component = component;
        this.isAdmin = isAdmin;
    }
}

/**
 * Helper route class to define admin routes, it extend the Route class
 */
class AdminRoute extends Route {
    static adminPathSufix = "/admin";

    constructor(path, component) {
        super(path, component);
        this.path = AdminRoute.adminPathSufix + path;
        this.path = trimUrl(this.path);
        this.component = component;
        this.isAdmin = true;
    }
}

/**
 * Component used to render all the application routes. Can be used to add new routes.
 * Also used to check if the route is admin or not, in order to render the page differently.
 */
class Routes extends Component{
    /**
     * For new routes, just add them to this list
     */
    routeList = [
        new Route('/', Home),
        new Route('/home', Home),
        new Route('/contact', Contact),
        new Route('/about', About),
        new Route('/logout', Logout),
        new AdminRoute('/', AdminHome)
    ]

    // catches all 404s
    clientErr404Route = new Route('/*', ClientErr404);
    adminErr404Route = new AdminRoute('/*', AdminErr404);

    constructor(props){
        super(props);
        this.setAdminPanel(props);
    }

    /**
     * On every location name change we will check if it is admin path and update the parent accordingly
     * @param {object} prevProps 
     */
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.setAdminPanel(this.props);
        }
    }

    setAdminPanel(props) {
        props.setAdminPanel(props.location.pathname.startsWith(AdminRoute.adminPathSufix));
    }

    render(){
        return(
            <Switch>
                    {this.routeList.map((route, index)=>{
                        return <ReactRoute exact key={index} path={route.path} component={withRouter(route.component)}/>
                    })}
                    <ReactRoute path={this.adminErr404Route.path} component={withRouter(this.adminErr404Route.component)}/>
                    <ReactRoute path={this.clientErr404Route.path} component={withRouter(this.clientErr404Route.component)}/>
            </Switch>
        )}
  }
  
  export default withRouter(Routes);
