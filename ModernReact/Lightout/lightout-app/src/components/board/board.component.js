import React, { Component } from 'react';
import './board.style.css';
import Cell from '../cell/cell.component';
/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

 class Board extends Component {
     static defaultProps = {
         nrows: 5,
         ncols: 5,
         chanceLightStartsOn: 0.25
     }
     constructor(props) {
         super(props);
         // todo: set inital state
         this.state = {
             hasWon: false,
             board: this.createBoard()
         }
     }

     createBoard() {
         let board = [];
         for (let i = 0; i < this.props.nrows; i++) {
             let rows = [];
             for (let j = 0; j < this.props.ncols; j++) {
                 let randomBoard = Math.random() * 1;
                 if (this.props.chanceLightStartsOn > randomBoard) {
                    rows.push(true);
                 } else {
                    rows.push(false);
                 }
             }
             board.push(rows);
         }
         return board;
     }

     flipCellsAround(coord) {
         console.log("Fliped", coord);
         let { ncols, nrows } = this.props;
         let board = this.state.board;
         let [y,x] = coord.split("-").map(Number);
        console.log(`asdf${this.state.board[y][x]}`);
         function flipCell(y,x) {
             // if this coord is actually on board, flip it
             if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                 board[y][x] = !board[y][x];
             }

             // Todo: flip this cell and the cells around it
             // Win when the cell is turned off 
         }
         
         function isPlayerWon(board) {
            let hasWon = true;
            for (let i = 0; i < nrows.length; i++ ) {
                for (let j = 0; j < ncols.length; j++) {
                    if (board[i][j] === false) {
                        hasWon = false;
                        return hasWon;
                    }
                }
            }
            return hasWon;
         }

         // flip initial
         flipCell(y,x);
         // flip left and right
         flipCell(y,x+1);
         flipCell(y,x-1);
         // flip top and bottom
         flipCell(y+1, x);
         flipCell(y-1, x);
         
         let hasWon = board.every(row => row.every(cell => !cell));
         this.setState({
             board: board,
             hasWon: hasWon
         }, () => {
             console.log(this.state.hasWon);
         });
     }

     render() {
         const tableData = [];
         for (let i = 0; i < this.props.nrows; i++) {
             let tableRows = [];
             for (let j = 0; j < this.props.ncols; j++) {
                 let coord = `${i}-${j}`
                 tableRows.push(<Cell 
                    key={coord} 
                    isLit={this.state.board[i][j]} 
                    flipCellsAroundMe={() => this.flipCellsAround(coord)}
                    />)
             }
             tableData.push(<tr key={`${i}`}>{tableRows}</tr>);
         }
         return (
            <table>
                <tbody>{tableData}</tbody>
            </table>
         )
     }
 }

 export default Board;