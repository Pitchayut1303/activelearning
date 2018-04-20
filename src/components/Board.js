import React, { Component } from 'react';
import './mystyle/Board.css';
import BoardList from './BoardList';

class BoardView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: []
        };
    }
    
    render() {
        return (
                <div>
                    <BoardList />
                </div>
                                );
                    }
                }

                export default BoardView;