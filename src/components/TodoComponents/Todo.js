import React from "react";
import './Todo.css';
import { isParenthesizedExpression } from "@babel/types";

class Todo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log("todo", this.props)
    return(
      <div 
      onClick={() => this.props.toggleCompleted(this.props.todo.id)}
      className={this.props.todo.completed ? 'done' : ''}
     
      >{this.props.todo.task}</div>
    )
  }
}

export default Todo;