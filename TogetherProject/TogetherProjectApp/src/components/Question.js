import React,{Component} from 'react'
import faker from 'faker'

class Question extends Component{
    state={
      firstVar:'',
      secondVar:'',
        questiontext:faker.lorem.sentence(),
        textvar1:faker.lorem.word(),
        textvar2:faker.lorem.word(),
        question_num:1,
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            firstVar:'',
            secondVar:'',
            questiontext:faker.lorem.sentence(),
            textvar1:faker.lorem.word(),
            textvar2:faker.lorem.word(),
            question_num: this.state.question_num + 1
        })
    }
    render(){
        const {question,nextQuestion,skipFunction}=this.props

        if(this.state.question_num===10){
            skipFunction();
            return(<div>.</div>)
        }
        else{
        return(
            <div>{this.state.question_num} / 10
                <h4>{this.state.questiontext}?</h4>
                <input type="radio" name={1.1} key={this.state.textvar1} onClick={()=>{this.setState({firstVar:"(selected)",secondVar:null})}} value={true}/>{this.state.textvar1} {this.state.firstVar}<br/>
                <input type="radio" name={1.1} key={this.state.textvar2} onClick={()=>{this.setState({secondVar:"(selected)",firstVar:null})}}/>{this.state.textvar2} {this.state.secondVar}<br/>
                <br/><br/>
                <button onClick={()=>{
                    if(this.state.firstVar||this.state.secondVar)
                    nextQuestion();else alert('Please, choose a variant, or click "skip" to skip all questions')}}>Next</button>

            </div>

        )}}

    }


export default Question