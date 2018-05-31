import React,{Component} from 'react'

class Question extends Component{
    state={
      firstVar:'',
      secondVar:''
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            firstVar:'',
            secondVar:''
        })
    }
    render(){
        const {question,nextQuestion,skipFunction}=this.props

        if(question.id===null){
            skipFunction();
            return(<div>.</div>)
        }
        else{
        return(
            <div>
                <h4>{question.text}</h4>
                <input type="radio" name={1.1} key={question.variants[0]} onClick={()=>{this.setState({firstVar:"(selected)",secondVar:null})}} value={true}/>{question.variants[0]} {this.state.firstVar}<br/>
                <input type="radio" name={1.1} key={question.variants[1]} onClick={()=>{this.setState({secondVar:"(selected)",firstVar:null})}}/>{question.variants[1]} {this.state.secondVar}<br/>
                <br/><br/>
                <button onClick={()=>{
                    if(this.state.firstVar||this.state.secondVar)
                    nextQuestion();else alert('Please, choose a variant, or click "skip" to skip all questions')}}>Next</button>

            </div>

        )}}

    }


export default Question