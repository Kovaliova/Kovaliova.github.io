import React from 'react';
import './Header.css';

import { NavLink } from 'react-router-dom';
import HeaderCategory from './HeaderCategory'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



let totalCategories=[
  {name:'Shoes', id: 1, category:'shoes'}, 
  {name:'Watch', id: 2, category:'computers' },
  {name:'Accessories', id: 3, category:'accessories', },
  {name:'Clothing', id: 4, category:'clothing',}, 
]

class Header extends React.Component{
  

  render(){
    return (
      <div className='Header'>
      
          <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">
             <div className='banner_title_shop'>
             
                </div> 
          </NavLink>    

          
          <div className='HeaderCategory'>
          <HeaderCategory  categories={totalCategories} />

            </div>  

      </div>
    )
  }

}

export default Header