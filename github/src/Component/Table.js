import React,{Component} from 'react';
import Tableitem from './Tableitem';

export default class Table extends Component {
  render(){
    console.log(this.props.data)
  return (
<table class="table table-striped">
        <thead>
         <tr>
           <th>number</th>
           <th>name</th>
           <th>repo state</th>
           <th>check</th> 
           <th>private</th> 
           <th>language</th> 
           <th>url</th>
         </tr>
         </thead>
         <tbody>
          
           {this.props.data.map((item,index) => {
// console.log(item)
return       <tr> <Tableitem data={item} ID={index+1} /> </tr>
           }
 )}
 
         </tbody>
    </table>
  );
}
}
