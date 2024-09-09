import React, { Component } from 'react';

export default class Users extends Component {

    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
    }


// http Request fetching data from api
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => this.setState({users:result}))
} 

    render() {
        console.log(this.state.users)   
            return (
            <>
            <h1> List users from Api</h1>
            {this.state.users.map((user, index)=>{
                return(
                    <>
                    <p>ID    : {user.id}</p>
                    <p>Name  : {user.name}</p>
                    <p>Phone : {user.phone}</p>
                    <hr />
                    </>
                )
            })}
                
            </>
        );
    }
}

