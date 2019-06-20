import React from 'react';

import QuestionTile from "./QuestionTile"

class QuestionList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedQuestionId: null
    }

    this.changeSelectedQuestionId = this.changeSelectedQuestionId.bind(this)
  }

  changeSelectedQuestionId(newId){
    this.setState({selectedQuestionId: newId})
  }

  render() {
    console.log(this.state.selectedQuestionId)

    let questionObjects = this.props.data

    let questionTiles = questionObjects.map((questionObject) => {

      let handleChangeQuestionId = () => {
        this.changeSelectedQuestionId(questionObject.id)
      }

      let className = "hidden"

      if (this.state.selectedQuestionId === questionObject.id){
        className = ""
      }

      return(
        <QuestionTile
          key={questionObject.id}
          questionObject={questionObject}
          handleChangeQuestionId={handleChangeQuestionId}
          className={className}
        />
      )
    })

    return(
      <div className="padding-all">
        <h1 className="title"> We're Here to Help </h1>
        {questionTiles}
      </div>
    )
  }
}

export default QuestionList;
