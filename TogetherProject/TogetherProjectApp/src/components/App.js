import React,{Component} from 'react'
import Content from './Content'

class App extends Component {
    state ={
        numpage:0,
    }

    render() {
        return (<div>
            <Content content={this.state.numpage} buttonNextPage={this.handleClick}/>
        </div>)
    }

    handleClick =()=> {
        this.setState({
            numpage: this.state.numpage + 1
        });
    }

}



export default App
