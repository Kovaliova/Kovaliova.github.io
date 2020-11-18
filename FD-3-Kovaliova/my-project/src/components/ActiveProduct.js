import React from 'react'
import './ActiveProduct.css';
import { Table, Popconfirm,Button } from 'antd';

const columns = [{
  title: 'Characteristics',
  dataIndex: 'param',
  key: 'param',
  width: '150px',

}, {
  title: '',
  dataIndex: 'mean',
  key: 'mean',
  width: '150px',
}, 
];


let ActiveProduct=(props)=>{
 let descriptionParam=Object.keys(props.descriptionProduct)
 let data=descriptionParam.map((item, index)=>{
  return(
{
  key: index,
  param:item ,
  mean:props.descriptionProduct[item]
}
  )
})
  return(
    <React.Fragment>
      <div className='ActiveProduct'>
        <div className='conteiner' >
        <div className='img_block'>
           <img src={ require ('../img/product/id' + props.productId+'.jpeg')}   alt='png'/> 
         </div>
          <div className='table_info'>
            <Table columns={columns} dataSource={data} pagination={false} width={'500px'}/>
          </div> 
       </div>
       <div className="flex">
         
      {
      (props.isLogin)
      ? <React.Fragment>
           <Popconfirm title="Remove the selected product from the cart" 
             onConfirm={(productId)=>props.deleteProductFromLoginUser( props.productId  )} 
              onCancel={( )=>props.onMessage('Cancel delete' ) } 
              okText="Yes" cancelText="No">
              <Button type="primary" className='Button' >Delete   </Button>

          </Popconfirm>

          <Button type="primary"   onClick={()=>props.addProductToLoginUser(props.categoryName, props.productId)} >Add</Button>

        </React.Fragment>
        :<Button type="primary" onClick={props.omNotification} >Add</Button>
      }
      </div>
      </div>
    </React.Fragment>
  )
}

export default  ActiveProduct


 