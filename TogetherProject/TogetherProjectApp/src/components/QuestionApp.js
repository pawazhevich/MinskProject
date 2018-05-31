import React,{Component} from 'react'
import questions from '../jsonOfQuestions'
import Question from './Question'
import questionJson from '../DataOfQuestion'
class QuestionApp extends Component{
    state={
        questionNumber:0
    }
    render(){
        const {skipFunction}=this.props
        return(<div>
            <Question question={questionJson[this.state.questionNumber]} nextQuestion={this.buttonNextQuestion} skipFunction={skipFunction}/>

        </div>
        )
    }
    buttonNextQuestion=()=>{
        this.setState({
            questionNumber:this.state.questionNumber+1
        })
    }
}

export default QuestionApp