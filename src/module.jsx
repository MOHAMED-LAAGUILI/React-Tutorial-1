import React, { Component } from 'react';

export default class Module extends Component {
   /* constructor(props) {
        super(props);
      }
*/

    render() {
        return (
            <>
            <ul>
                <li> {this.props.nome}</li>
                <li> {this.props.coef}</li>
                <li> {this.props.cat}</li>
            </ul>
               
            </>
        );
    }
}



