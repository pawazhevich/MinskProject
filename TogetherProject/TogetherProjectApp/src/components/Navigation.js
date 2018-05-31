import React,{Component} from 'react'
import {BrowserRouter as Router, Route, Link } from "react-router-dom"
import faker from '../../node_modules/faker'
import App from './App'
import Signing_up from './Signing_up'
class Navigation extends Component{
    render(){
        return(
            <Router>
            <div>
                <button><Link to="/sign_up">Sign</Link></button>
                <button><Link to="/">Home </Link></button>
                <button><Link to="/events">Events </Link></button>
                <button><Link to="/clubs">Clubs </Link></button>

                <Route exact path="/" component={Home}/>
                <Route path="/sign_up" component={App}/>
                <Route path="/events" component={Events}/>
                <Route path="/clubs" component={Clubs}/>

            </div>
            </Router>
        )
    }
}

const Home =()=>(
    <div>
        HomePage
    </div>
)
const Events=()=>(
    <div>
        Events List
    </div>
)
const Clubs=()=>(
    <div>
        Club List
    </div>
)
export default Navigation