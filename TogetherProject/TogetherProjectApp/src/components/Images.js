import React,{Component} from 'react'

class Images extends Component{

    state={
        imageNumber:1
    }


    render(){

        return(
            <div>
            <img src={"./images/img_template"+this.state.imageNumber + ".png"} onClick={
                ()=>{
                if(this.state.imageNumber!==3)this.setState({imageNumber:this.state.imageNumber+1});else this.setState({imageNumber:1})
                }
            }/>
                <br/>

                <img src={this.state.imageNumber===1 ? "./images/active_button.png":"./images/unactive_button.png"} onClick={()=>this.nextImage(1)}/>
                <img src={this.state.imageNumber===2 ? "./images/active_button.png":"./images/unactive_button.png"} onClick={()=>this.nextImage(2)}/>
                <img src={this.state.imageNumber===3 ? "./images/active_button.png":"./images/unactive_button.png"} onClick={()=>this.nextImage(3)}/>

            </div>
        )
    }
    nextImage=value=>{
        this.setState({
            imageNumber:value
        })
    }
}
export default Images