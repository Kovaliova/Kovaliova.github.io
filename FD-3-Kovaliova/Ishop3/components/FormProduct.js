import React from 'react';

import catalogueEvents from "./events";

import './formProduct.css';

import ErrorText from './ErrorText.js';

class FormProduct extends React.Component{
    state = {
        buttonActive:false,
        valid:false,
        errorName:null,
        errorUrl:null,
        errorPrice:null,
        errorQuantity:null,
        name:'',
        price:'',
        url:'',
        quantity:''
    };
    constructor(){
        super();
        this.newTextName = null;
        this.newTextPrice = null;
        this.newTextUrl = null;
        this.newTextQuantity = null;
    }
    setNewName =(ref)=>{
        this.newTextName = ref;
    };
    setNewPrice =(ref)=>{
        this.newTextPrice = ref;
    };
    setNewUrl =(ref)=>{
        this.newTextUrl = ref;
    };
    setNewQuantity =(ref)=>{
        this.newTextQuantity = ref;
    };
    // handleUpdateInfo = ()=>{
    //     let counter = 0;
    //     if(this.newTextName && !this.updateName(this.newTextName.value)){
    //         counter++;
    //     }
    //     if(this.newTextPrice && !this.updatePrice(this.newTextPrice.value)){
    //         counter++;
    //     }
    //     if(this.newTextUrl && !this.updateUrl(this.newTextUrl.value)){
    //         counter++;
    //     }
    //     if(this.newTextQuantity && !this.updateQuantity(this.newTextQuantity.value)){
    //         counter++;
    //     }
    //     if(counter !== 0){
    //         this.setState({valid:false, buttonActive:false});
    //     }
    //     else{
    //         this.setState({valid:true, buttonActive:true});
    //     }
    // };
    componentDidMount(){
        //this.handleUpdateInfo();
        if(this.props.edit){
            this.setState({name:this.props.edit.name, price:this.props.edit.price,
                url:this.props.edit.url,quantity:this.props.edit.quantity,
                valid:true,buttonActive:true
            })
        }
    };

    handleSaveButton = () =>{
        let updateItem ={};
        if(this.state.valid){
            updateItem['id'] = this.props.id;
            updateItem['productName'] = this.newTextName.value;
            updateItem['price'] = parseInt(this.newTextPrice.value);
            updateItem['count'] = parseInt(this.newTextQuantity.value);
            updateItem['urlPictures'] = this.newTextUrl.value;
            updateItem['description'] = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
            catalogueEvents.emit('EUpdateProductList', updateItem);
        }
    };

    handleCancel = () =>{
        catalogueEvents.emit('EFormHidden', true);
    };
    updateName = (e)=>{
        let name = e.target.value;
        this.setState({name: name});
        this.validName(name);
        this.updateActiveButton();
};
    updateActiveButton =() =>{

    };
    validName =(value) =>{
        if(value.length < 2){
            let errorText = <ErrorText text={"Please, Fill the field.Value must be string."}/>;
            this.setState({errorName:errorText});
        }
        else{
            this.setState({errorName:null});
        }
    };
    updatePrice = (e) =>{
        let price = e.target.value;
        this.setState({price:price});
        this.validPrice(price);
        this.updateActiveButton();

    };
    validPrice = (value)=>{
        if(!value || parseInt(value) <= 0){
            let errorText = <ErrorText text={"Please, Fill the field.Value must be rational number great than 0."}/>;
            this.setState({errorPrice:errorText});
        }
        else {
            this.setState({errorPrice: null});
        }
    };

    updateUrl = (e) =>{
        let url = e.target.value;
        this.setState({url:url});
        this.validUrl(url);
        this.updateActiveButton();
    };
    validUrl = (value) =>{
        let regExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        if(!regExp.test(value)){
            let errorText = <ErrorText text={"Please, Fill the field.Value must be valid URL."}/>;
            this.setState({errorUrl:errorText});
        }
        else{
            this.setState({errorUrl:null});
        }
    };
    updateQuantity = (e) =>{
        let quantity = e.target.value;
        this.setState({quantity:quantity});
        this.validQuantity(quantity);
        this.updateActiveButton();
    };
    validQuantity = (value) =>{
        if(!value || parseInt(value) <= 0){
            let errorText = <ErrorText text={"Please, Fill the field.Value must be rational number great than 0."}/>;
            this.setState({errorQuantity:errorText});
        }
        else {
            this.setState({errorQuantity: null});
        }
    };
    render(){
        return(
            <div className="formProduct">
               <div className="headerForm"> {
                (this.props.type === "add")
                    ? <h2>Add new product</h2>
                    : <h2>Edit existing product</h2>
                }
                <p>Id:{this.props.id}</p>
               </div>
                {(this.props.type === "add")
                    ? <form key={this.props.id}>
                        <label htmlFor='name'>
                            Name
                            <input id='name' type='text' value={this.state.name} onChange={this.updateName} ref={this.setNewName} />
                            {this.state.errorName}
                            </label>
                        <label htmlFor='price'>
                            Price
                            <input id='price' type='number' value={this.state.price} onChange={this.updatePrice} ref={this.setNewPrice}/>
                            {this.state.errorPrice}
                        </label>
                        <label htmlFor='url'>
                            URL
                            <input id='url' type='url' value={this.state.url} onChange={this.updateUrl} ref={this.setNewUrl}/>
                            {this.state.errorUrl}
                        </label>
                        <label htmlFor='quantity'>
                            Quantity
                            <input id='quantity' type='number' value={this.state.quantity} onChange={this.updateQuantity} ref={this.setNewQuantity}/>
                                {this.state.errorQuantity}
                        </label>
                    </form>
                    :<form key={this.props.id}>

                                <label htmlFor='name'>
                                    Name
                                <input  id='name' type='text' value={this.state.name} onChange={this.updateName} ref={this.setNewName}/>
                                {this.state.errorName}
                                </label>
                                <label htmlFor='price'>
                                    Price
                                <input id='price' type='number' value={this.state.price} onChange={this.updatePrice} ref={this.setNewPrice}/>
                                {this.state.errorPrice}
                                </label>
                                <label htmlFor='url'>
                                    URL
                                <input id='url' type='url' value={this.state.url} onChange={this.updateUrl} ref={this.setNewUrl}/>
                                {this.state.errorUrl}
                                </label>
                                <label htmlFor='quantity'>
                                    Quantity
                                <input id='quantity' type='number' value={this.state.quantity} onChange={this.updateQuantity} ref={this.setNewQuantity}/>
                                {this.state.errorQuantity}
                                </label>

                    </form>
                }
                {(this.props.type === "add")
                    ? <input type="button" value="Add" disabled={!this.state.buttonActive} onClick={this.handleSaveButton}/>
                    : <input type="button" value="Save" disabled={!this.state.buttonActive} onClick={this.handleSaveButton}/>
                }
                <input type="button" value="Cancel" onClick={this.handleCancel}/>
            </div>
        )
    }
}
export  default FormProduct;