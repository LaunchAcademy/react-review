import React from "react"


const QuestionTile = (props) => {

  let message = ""

  if (props.showAnswer === true){
    message = props.questionObject.answer
  }

  return(
    <div className="callout" onClick={props.handleChangeQuestionId}>
        <span className="bold"> + </span>
        <span> {props.questionObject.question} </span>

        <br/>
        {message}
    </div>
  )
}


export default QuestionTile
