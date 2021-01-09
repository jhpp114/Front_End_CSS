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
         let { nCols, nRows } = this.props;
         let board = this.state.board;
         let [y,x] = coord.split("-").map(Number);

         function flipCell(y,x) {
             // if this coord is actually on board, flip it
             if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
                 board[y][x] = !board[y][x];
             }

             // Todo: flip this cell and the cells around it
             // Win when the cell is turned off 
         }
     }

     render() {
         const tableData = [];
         for (let i = 0; i < this.props.nrows; i++) {
             let tableRows = [];
             for (let j = 0; j < this.props.ncols; j++) {
                 tableRows.push(<Cell isLit={this.state.board[i][j]}/>)
             }
             tableData.push(<tr>{tableRows}</tr>);
         }
         return (
            <table>
                <tbody>{tableData}</tbody>
            </table>
         )
     }
 }

 export default Board;