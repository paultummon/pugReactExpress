import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class MainPage extends React.Component {

  constructor(){
    super()
    console.log('Hello caroline')
  }


  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

ReactDOM.render(<MainPage/>, document.getElementById('HomeScreen'));
