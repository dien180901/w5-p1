import React, { Component } from 'react'
import Board from './components/Board'
import './App.css'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      username:"dien",
      nextPlayer: true,
      squareList:['','','','','','','','',''],
      isWin:false,
      playerWin:''
    }
  }
  setParentsState=(obj)=>{
    this.setState(obj)
  }
  
  render() {

    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <h3>User name : {this.state.username}</h3>
        <h4> nextPlayer:{this.state.nextPlayer}</h4>
        <Board squareList={this.state.squareList} 
        setParentsState={this.setParentsState}
        nextPlayer={this.state.nextPlayer} isWin={this.state.isWin} playerWin={this.state.playerWin}/>
        <h6>
          {this.state.playerWin}
        </h6>
        <ol>
          History
        </ol>
        <ol>
          Ranking
        </ol>
      </div>
    )
  }
}
