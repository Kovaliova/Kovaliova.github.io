import React from 'react';
import PropTypes from 'prop-types';

import './product.css';

import catalogueEvents from "./events";

class Product extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    static propTypes={
        src: PropTypes.string.isRequired,
        productName: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired
    };
    productRemove = (e) =>{
        if(e.target === e.currentTarget) {
            catalogueEvents.emit('EProductRemove', this.props.id);
        }
    };
    productSelect = (e)=>{
        if(e.target.nodeName !== "INPUT") {
            catalogueEvents.emit('EProductSelect', this.props.id);
        }
    };
    productEdit = (e)=>{
        if(e.target === e.currentTarget) {
            catalogueEvents.emit('EProductEdit', this.props.id);
        }
    };

     render() {
         return (
             <tr className={(this.props.selectedLine === this.props.id)
                 ?'selected' :null} id = {this.props.id} onClick={this.productSelect}>
                    <td>{this.props.productName}</td>
                    <td>{this.props.price}</td>
                    <td>{this.props.src}</td>
                    <td>{this.props.count}</td>
                    <td><input type='button' onClick={this.productEdit} value='Edit' data-id ={this.props.id}/>
                        <input type='button' onClick={this.productRemove} value='Delete' data-id ={this.props.id}/>
                    </td>
                </tr>
         )
     };

}
export default Product;