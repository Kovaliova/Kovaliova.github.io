import React from 'react';
import PropTypes from 'prop-types';

import catalogueEvents from './events.js';

import Product from './Product.js';
import CatalogueTitle from './CatalogueTitle.js'
import InfoBlock from './InfoBlock.js'
import FormProduct from './FormProduct.js'

import './catalogue.css';

class Catalogue extends React.Component{

    static propTypes = {
        products: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                productName: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                count: PropTypes.number.isRequired,
                urlPictures: PropTypes.string.isRequired
            })
        ),
    };

    constructor(props){
        super(props);
        this.props = props;
};
    state = {
            products:this.props.products,
            selected:null,
            edit:false,
            info:false,
            valid:false
        };

    productRemove = (id) => {
        let productsList = this.state.products;
        productsList = productsList.filter(item => item.id !== id);
        this.setState({products:productsList, info:false, form:false, productEdit:null});
    };
    productSelect = (id) =>{
        let product = this.state.products.filter(item =>
            item.id === id
        );
        let price = product[0].price;
        let descr = product[0].description;
        let nameProduct = product[0].productName;
        this.setState({selected: id, info:true, description:descr,showProduct:nameProduct, showPrice:price, form:false});
    };
    productEdit = (id) =>{
        let productInfo = {};
        let item = this.state.products.filter(item =>
        item.id === id);
        productInfo["id"] = item[0].id;
        productInfo["name"] = item[0].productName;
        productInfo["price"] = item[0].price;
        productInfo["url"] = item[0].urlPictures;
        productInfo["quantity"] = item[0].count;
        this.setState({info:false, productId:id,form:true, type:"edit", editProduct:productInfo});
    };
    addNewProduct = () =>{
        let id = Date.now();
        this.setState({info:false, form:true, productId:id, type:"add"});
    };
    formHidden = () =>{
        this.setState({form:false});
    };
    updateProductList =(newProduct) =>{
        let productList = this.state.products.slice();
        let indexFoundItems = productList.findIndex(item =>
        item.id === newProduct.id);
        if(indexFoundItems >=0){
            productList[indexFoundItems]= newProduct;
        }
        else{
            productList.push(newProduct);
        }
        this.setState({products:productList,form:false});
    };
    componentDidMount = () => {
        catalogueEvents.addListener('EProductSelect',this.productSelect);
        catalogueEvents.addListener('EProductRemove',this.productRemove);
        catalogueEvents.addListener('EProductEdit',this.productEdit);
        catalogueEvents.addListener('EFormHidden', this.formHidden);
        catalogueEvents.addListener('EUpdateProductList', this.updateProductList);
    };

    componentWillUnmount = () => {
        catalogueEvents.removeListener('EProductSelect',this.productSelect);
        catalogueEvents.removeListener('EProductRemove',this.productRemove);
        catalogueEvents.removeListener('EProductEdit',this.productEdit);
        catalogueEvents.removeListener('EFormHidden', this.formHidden);
        catalogueEvents.removeListener('EUpdateProductList', this.updateProductList);
    };
    render() {
        let productBlocks = this.state.products.map(item =>
            <Product key = {item.id} src ={item.urlPictures}
                productName = {item.productName} price={item.price} count={item.count} id={item.id}
                selectedLine = {this.state.selected}
            />
        );
        return (<div className="Catalogue">
            <table className = "ProductsTable">
            <thead>
                <CatalogueTitle titleList={["Name","Price","URL","Quantity","Control"]}/>
            </thead>
                <tbody>
                {productBlocks}
                </tbody>
            </table>
            <button onClick={this.addNewProduct}>New Product</button>
            {(this.state.info)?
                <InfoBlock name={this.state.showProduct} description={this.state.description} price={this.state.showPrice}/>
                : null
            }
            {(this.state.form)?
            <FormProduct key={this.state.productId} type={this.state.type} id={this.state.productId} edit={this.state.editProduct}/>
            :null}
            </div>)

    };
}

export default Catalogue;