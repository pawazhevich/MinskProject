import React,{Component} from 'react'
import faker from '../../node_modules/faker'
import {BrowserRouter as Router, Route, Link } from "react-router-dom"
import UserListReg from './UserListReg'

class App extends Component {

    render() {

        return (<Router><div>
                  <div class="header">
                      <div class="city">
                       Minsk
                       <br/>

                       <select>
                           <option>Nemiga</option>
                           <option>Kupalovskaja</option>
                           <option>Vostok</option>
                       </select>

                   </div>
                <div className="ammoney">
                    {faker.random.number(300)} BYN
                </div>
            <div class="first_last_name">
                {faker.name.firstName()}
                {" "+faker.name.lastName()}
            </div>
                  </div>

                <div class="content"> Your friends:  <UserListReg /> </div>
                <a href="result" ><button class="getResult"> Get result!) </button></a>

        </div></Router>
        )
    }



}



export default App
