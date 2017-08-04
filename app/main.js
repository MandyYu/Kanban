/*var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());*/


/*import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import './css/main.css';
render(<Greeter />, document.getElementById('root'));*/

import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class GroceryList extends Component{
    render(){
        return(
            <ul>
                <ListItem quantity="1" name="">Bread</ListItem>
                <ListItem quantity="2" name="">Eggs</ListItem>
                <ListItem quantity="3" name="">Milk</ListItem>
            </ul>
        );
    }
}
class ListItem extends Component{
    render(){
        return(
            <li>{this.props.quantity} * {this.props.children}</li>
        );
    }
}
ReactDOM.render(<GroceryList/>,document.getElementById('root'));