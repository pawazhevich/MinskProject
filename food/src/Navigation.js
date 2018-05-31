import {BrowserRouter as Router, Route, Link } from "react-router-dom"
import React,{Component} from 'react'
import App from './components/App'
import Map from './components/Map'
class Navigation extends Component{
state={
    location:null
}
    render(){
        return(
            <Router>

                <div>

                <Route exact path="/" component={Application}/>
                <Route path="/result" component={()=>MapLocation(this.state.location)}/>
                </div>
            </Router>
        )
    }
}
const Application=()=>(
    <div>
        <App />
    </div>
)
const MapLocation=(city)=>(
    <div>
        <Map location={city}/>
    </div>
)
export default Navigation