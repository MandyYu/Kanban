import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CardList from './Cardlist.json';
import KanbanBoard from './KanbanBoard';
import './css/app.css';

ReactDOM.render(<KanbanBoard cards={CardList}/>,document.getElementById('root'));
