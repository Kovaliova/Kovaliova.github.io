import React from 'react';
import './Main.css';

import {connect} from 'react-redux';

import BlockNews from './BlockNews'
import {checkCategory} from '../store/action/allCategory' 
import {getAxiosInfo} from '../store/action/shopInfo'
import {blockNews } from '../storeInfo'

import axios from 'axios'

const firebaseConfig = {
  apiKey: "AIzaSyCLQFnwd6nKJpGoYAkfnUv8mgT5K1yTYdc",
  authDomain: "my-project-d7a08.firebaseapp.com",
  databaseURL: "https://my-project-d7a08.firebaseio.com",
  projectId: "my-project-d7a08",
  storageBucket: "my-project-d7a08.appspot.com",
  messagingSenderId: "280942225429",
  appId: "1:280942225429:web:e2537296c5af3836cb461c",
  measurementId: "G-LSJENB3BEG"
};  





class Main extends React.Component{

 async sendToFirebase(){
  
     console.log('axios ')

    try {


    //  загрузить инф.  blockNews
          const response =await  axios.post('https://my-project-d7a08.firebaseio.com/blockNews.json', blockNews)
      console.log(response.data)
    }
    catch (e){
      console.log(e)
    }

  }

  render(){
    
  //this.sendToFirebase();

//  console.log(this.props.dataShop.blockNews)
    let blockNewsArr=this.props.dataShop.blockNews.map( item=> <BlockNews key={item.id}
     text={item.text} id={item.id}  className={item.className} background={item.background}
     category={item.category}  onClick={this.props.checkCategoryName} />)


  // console.log('Main -',this.props)
    return (
      <div className='Main_conteiner'>
            <div className='Main__FlexContainer__News'>
              {blockNewsArr}
          </div>  

         
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  chooseUser:state.chooseUser,
  dataShop:state.dataShop

  }
}


const mapDispatchToProps = (dispatch) => {

  return {
    checkCategoryName: (param)=>dispatch(checkCategory(param)),
    getAxiosInfo:()=>dispatch(getAxiosInfo())

  }
}

export default connect (mapStateToProps,mapDispatchToProps )(Main)
