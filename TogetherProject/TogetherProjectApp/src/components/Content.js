import React,{Component} from 'react'
import QuestionApp from "./QuestionApp";
import Images from './Images'
import Signing_up from './Signing_up'
import CitySelection from './CitySelection'
import {BrowserRouter as Router, Route, Link } from "react-router-dom"

class Content extends Component{
    state={
number:this.props.content,
choise1:null,
        passCheck1:'',
        passCheck2:'',
        choise2:null,
        city:"Belarus",
        city2:"Minsk",
        userName:null,
        userSurname:null,
        userBirthday:null
     }
    componentWillReceiveProps(nextProps){
        this.state.number=nextProps.content;

    }
    changeCity=prop=>{

        this.setState({
            city2:prop
        })
    }


    render(){
        const {content,buttonNextPage} = this.props
        this.country="Belarus"
        this.city="Minsk"
        if(this.state.number===0){
            return (
                <div>
                    <div className="content">
                    <br/>
                    <Signing_up/>
                    <br/><br/>
                    </div>
                    <button class="bottom_button" onClick={buttonNextPage}>Registration</button>


                </div>
            )
    }
        if(this.state.number===1){
            return (
                <div>
                <div class="content">
                   <Images/>
                <br/>
                </div>
                    <button class="bottom_button" onClick={buttonNextPage}>Start!</button>
                </div>
            )
        }
        if(this.state.number===2){

            return (
                    <div>
<div class="content">
                    Enter your name <br/>
                    <input type="text" placeholder=" Name" onChange={event=>{this.state.userName=event.target.value}} /> <br/><br/>
                    Enter your surname <br/>
                    <input type="text" placeholder=" Surname" onChange={event=>{this.state.userSurname=event.target.value}}/> <br/><br/>
                    Birthday <br/>
                    <input type="date" placeholder="01.01.1999" onChange={event=>{this.state.userBirthday=event.target.value}}/> <br/><br/>
                    Choose the country <br/>
                    <select onChange={event=>{this.setState({city:event.target.value})}}>
                        <option>Belarus</option>
                        <option>Russia</option>
                        <option>Ukraine</option>
                        <option>Poland</option>
                    </select><br/><br/>
                    Choose the city
                     <CitySelection city={this.state.city} funcSetCity={this.changeCity}/>
                    <br/>
                    Enter your main profession *<br/>
                    <input type="text"/> <br/><br/>
                    About yourself *<br/>
                    <textarea placeholder="Write a few words about yourself"></textarea><br/><br/>
                    *- not neccesary

</div><br/>
                    <button onClick={()=>{if(this.state.userName&&this.state.userSurname&&this.state.userBirthday){buttonNextPage();
                                                                                        alert("Name: "+this.state.userName +"\nSurname: "+this.state.userSurname+"\nBirthday: "
                                                                                            +this.state.userBirthday+"\nCountry: "+this.state.city+" City: "+this.state.city2)}
                    else{alert("Please,enter all fields without * ")}}}>Next</button>
                    </div>
            )}
        if(this.state.number===3){
            return(<div>
                <div class="content">
                    Enter a password<br/>
                    <input type="password" value={this.state.passCheck1} onChange={event=>this.setState({passCheck1: event.target.value})} /><br/><br/>
                    Repeat please<br/>
                    <input type="password" value={this.state.passCheck2} onChange={event=>this.setState({passCheck2: event.target.value})}/><br/>
                </div><br/>
                    <button onClick={()=>{if((this.state.passCheck1===this.state.passCheck2)&&this.state.passCheck2)buttonNextPage(); else alert('passwords don\'t match')}}>Next</button>
                </div>
            )
        }
        if(this.state.number===4){
            return(
                <div>
                    <div className="content">
                    We suggest you to answer on few questions to identify few traits of your
                    character for selection groups on common interests and to create some user portrait.
                    <br/>
                    </div><br/>
                    <button onClick={buttonNextPage}>Let's start</button>
                </div>
            )}
        if(this.state.number===5){
            return(
                <div>
                    <div className="content">
                    <QuestionApp skipFunction={()=>this.setState({number:this.state.number+1})}/>
                    <br/>
                    </div>
                    <button onClick={buttonNextPage}>Skip</button>
                </div>)}
                if(this.state.number===6){
            return(
                <div>
                    <div className="content">
                        Okay, we accepted results.Thanks
                <br/>
                    </div><br/>
                    <button onClick={buttonNextPage}>Continue</button></div>
            )
                }
                if(this.state.number===7){
            const buttonStyle={
                margin:'2px',
                border:'1px solid',
                width:'50px',
                padding:'1px 2px',
                'text-align':'center'
            }
            return(

                <div>
                <div className="content">
                Give up please some data about your payment card
                <br/>
                    <img src="./images/card_icon2.png"/>
                <input type="text" maxLength={4} placeholder={"0000"} style={buttonStyle}/>
                <input type="text" maxLength={4} placeholder={"0000"} style={buttonStyle}/>
                <input type="text" maxLength={4} placeholder={"0000"} style={buttonStyle}/>
                <input type="text" maxLength={4} placeholder={"0000"} style={buttonStyle}/>
                <br/>
                </div><br/>
                <button onClick={buttonNextPage}>Accept</button>
            </div>)
                }
                if(this.state.number===8){
            return(
                <Router>
                <div>
                    <h4>Thank you for registration!</h4>
                    <h5>Return to <a href="/" onClick={()=>this.setState({number:0})}>main</a> page and sign in</h5>
                </div>
                </Router>
            )
                }
    return(
        <div>Block</div>
    )
    }

    componentDidUpdate(){
        this.state.number=this.props.content
    }

}

export default Content