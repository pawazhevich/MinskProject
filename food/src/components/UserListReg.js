import React,{Component} from 'react'
import ElementUser from './ElementUser'
import users from './Data.json'
import {render} from 'react-dom'
import faker from 'faker'
class UserListReg extends Component{
    state={
        numOfFriend:3
    }
componentWillReceiveProps(nextProps){
    this.state.numOfFriend=nextProps.numOfFriend+1;
}
    render(){
this.num=3;
        const userlist = users.map((user)=>
        <ElementUser userFirstName={user.firstName} userLastName={user.secondName} walkTill={user.walkTill} walkFor={user.walkFor} img={faker.image.avatar()}/>)
        return(
            <div >
                <button onClick={()=>{this.setState({numOfFriend:this.state.numOfFriend + 1});this.addUserElement()}} >Add a friend</button>
                <button>{this.state.numOfFriend}</button>
                <hr/>
                <div class="HeadOfInputing">
                <div id="point"></div>
                {userlist}
                </div>


            </div>

        )
    }
  addUserElement=()=>{
        var div=document.createElement('div');
       render(<ElementUser userFirstName={faker.name.firstName()} userLastName={faker.name.lastName()} walkTill="" walkFor="" img={faker.image.avatar()}/>,
            document.getElementById('point').appendChild(div));}
}

export default UserListReg