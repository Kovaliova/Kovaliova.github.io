import React from 'react';
import './SearchField.css';
import { Checkbox, Slider,Button } from 'antd';


const marks = {
  0: '0$',
  300:'300$',
  1000: {
    style: {
      color: '#f50',
    },
    label: <span>'1000$'</span>,
    
  },
};

const CheckboxGroup = Checkbox.Group;

class SearchField extends React.Component{
render(){
  return(
    <div className='SearchField'>
    
      <div className='range_summ'>
          <span> Range</span> <br/>
          <Slider range marks={marks} max={1000} defaultValue={[0, 1000]} onAfterChange={this.props.onAfterChange} />
          <CheckboxGroup options={this.props.arrRange}  onChange={this.props.onChangeCheckBox} /> 

      </div>
<br/>
      <Button type="primary" onClick={this.props.toSortListCategory}>Show</Button>

    
    </div>
  )
}


}

export default SearchField