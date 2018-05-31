import React,{Component} from 'react'
import userArr from '../jsonOfUsers'


class Signing_up extends Component{
    render(){
        this.username=null
        this.password=null

        return(<div>
            <input type="text" placeholder="username" onChange={event=>{this.username=event.target.value}}/>
            <br/><br/>
            <input type="password" placeholder="password" onChange={event=>{this.password=event.target.value}}/>
            <br/>
            <a class="forgot" href="#">Forgot?</a><br/>
            <button onClick={this.userCheck}>Sign in</button>
        </div>)
    }
    userCheck =()=>{
        this.finded=false;
        for(this.i=0;this.i<3;this.i++){
            if(this.username===userArr[this.i].Username){
                this.finded=true;
                break;
            }
        }
        if(this.finded===true){
            if(this.password===userArr[this.i].Password) alert("Completed\nUsername and Pass are correct")
            else alert("incorrect password")

        }
        else alert('Unknown user');
    }
}

export default  Signing_up