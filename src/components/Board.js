import React, { Component,useState } from 'react'
import Square from './Square';
let count=0;
export default class Board extends Component {
    
    selectSquare=(id)=>{
        if(this.props.isWin){return}{
        count++;
        let array = this.props.squareList;
        if (array[id]==""){
        array[id] = this.props.nextPlayer ? "X" : "O";}
        console.log("array", array);
        this.props.setParentsState({
          squareList: array,
          nextPlayer: !this.props.nextPlayer
        });
        for (let i=0;i<3;i++){
            
            if ((!this.props.squareList[i*3+2]!==""&&this.props.squareList[i*3+1]!==""&&this.props.squareList[i*3+0]!==""&&(this.props.squareList[i*3+0]===this.props.squareList[i*3+1]&&this.props.squareList[i*3+1]===this.props.squareList[i*3+2]))
            ||(this.props.squareList[i]!==""&&this.props.squareList[i+3]!==""&&this.props.squareList[i+6]!==""&&(this.props.squareList[i]===this.props.squareList[i+3]&&this.props.squareList[i+3]===this.props.squareList[i+6]))
            )
            {
            this.props.setParentsState({isWin:true});
            // console.log(this.props.isWin);
        }
        }
        if ((this.props.squareList[0]!==""&&this.props.squareList[4]!==""&&this.props.squareList[8]!==""&&(this.props.squareList[0]===this.props.squareList[4]&&this.props.squareList[4]===this.props.squareList[8]))
        ||(this.props.squareList[2]!==""&&this.props.squareList[4]!==""&&this.props.squareList[6]!==""&&(this.props.squareList[2]===this.props.squareList[4]&&this.props.squareList[4]===this.props.squareList[6]))){
            this.props.setParentsState({isWin:true});
            console.log(this.props.isWin);
        }
        console.log(count);
        if (count==9&&this.props.isWin===false){
            console.log("gameover");
        }
        
    }}




    render() {
        return (
            <div>
                <div style={{display:"flex"}}>
                    <Square id={0} selectSquare={this.selectSquare} value={this.props.squareList[0]}/>
                    <Square id={1} selectSquare={this.selectSquare} value={this.props.squareList[1]}/>
                    <Square id={2} selectSquare={this.selectSquare} value={this.props.squareList[2]}/>
                </div>
                <div style={{display:"flex"}}>
                    <Square id={3} selectSquare={this.selectSquare} value={this.props.squareList[3]}/>
                    <Square id={4} selectSquare={this.selectSquare} value={this.props.squareList[4]}/>
                    <Square id={5} selectSquare={this.selectSquare} value={this.props.squareList[5]}/>
                </div>
                <div style={{display:"flex"}}>
                    <Square id={6} selectSquare={this.selectSquare} value={this.props.squareList[6]}/>
                    <Square id={7} selectSquare={this.selectSquare} value={this.props.squareList[7]}/>
                    <Square id={8} selectSquare={this.selectSquare} value={this.props.squareList[8]}/>
                </div>
                
            </div>
        )
    }
}
