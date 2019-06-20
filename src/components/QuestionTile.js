import React from "react"


const QuestionTile = (props) => {

  return(
    <div className="callout" onClick={props.handleChangeQuestionId}>
        <span className="bold"> + </span>
        <span> {props.questionObject.question} </span>

        <br/>
        <p className={props.className}>
          {props.questionObject.answer}
        </p>
    </div>
  )
}


export default QuestionTile
