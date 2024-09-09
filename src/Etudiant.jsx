import React, { Component } from "react";

export default class Etudiant extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nom: "karim",
      note: 15,
    }; // added semicolon
  }

changeState = ()=>{
this.setState({note:0})
}
  render(){
    return (
      <>
        <h1>Hello {this.state.nom}</h1>
<h2>La note : {this.state.note}</h2>
<button onClick={this.changeState()}>Change State</button>
      </>
    );
  }
}