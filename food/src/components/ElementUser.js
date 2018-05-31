import React,{Component} from 'react'
import faker from '../../node_modules/faker'


class ElementUser extends Component{
state={
    usFirstName:this.props.userFirstName,
    usLastName:this.props.userLastName,
    walkTill:this.props.walkTill,
    walkFor:this.props.walkFor,
    imgUrl:this.props.img,
    randNum1: faker.random.number(1)===0?null:true,
    randNum2: faker.random.number(1)===0?null:true,
    randNum3: faker.random.number(1)===0?null:true,
}
    render(){

        return(
            <div class="userElement">


                <img src={this.state.imgUrl} class="avatar"/>
                <input type="text" value={this.state.usFirstName}/>
                <input type="text" value={this.state.usLastName}/>
                <button class="align-right" onClick={()=>this.setState({
                    usFirstName:null,
                    usLastName:null,
                    randNum1:null,
                    randNum2:null,
                    randNum3:null
                })
 }>Edit</button>
                <br/>
                <div class="cc">Want to walk till:
                <div class="align-right">
                    <button class={this.state.walkTill===12 ? "right":""} onClick={()=>this.setState({walkTill:12})}>12</button>
                    <button class={this.state.walkTill===2 ? "right":""}  onClick={()=>this.setState({walkTill:2})}>2</button>
                    <button class={this.state.walkTill===4 ? "right":""}  onClick={()=>this.setState({walkTill:4})}>4</button>
                    <button class={this.state.walkTill===6 ? "right":""}  onClick={()=>this.setState({walkTill:6})}>6</button><br/></div>
                </div><div class="cc">Want to walk for:
                <div className="align-right">
                    <button class={this.state.walkFor===1 ? "right":"" } onClick={()=>this.setState({walkFor:1})}>1</button>
                    <button class={this.state.walkFor===2 ? "right":""} onClick={()=>this.setState({walkFor:2})}>2</button>
                    <button class={this.state.walkFor===3 ? "right":""} onClick={()=>this.setState({walkFor:3})}>3</button>
                    <button class={this.state.walkFor===4 ? "right":""} onClick={()=>this.setState({walkFor:4})}>4</button></div>
                </div>
                Want to go to: cafe<input type="checkbox" class="checkinput" checked={this.state.randNum1}/> restaurant<input class="checkinput" type="checkbox" checked={this.state.randNum2}/>
                pub<input class="checkinput" type="checkbox" checked={this.state.randNum3}/>
                </div>
        )
    }
}
export default ElementUser
