import React,{Component} from 'react';

export default class Tableitem extends Component {
  render(){
    // console.log(this.props.data)
    const{name,language,svn_url}=this.props.data
    
  return (
    
    <>
    <td >{this.props.ID}</td>
    <td>{name}</td>
    <td>{this.props.data.private ? "private":"public"}</td>
    <td><input type="checkbox"checked ={this.props.data.private}/></td>
    <td>{this.props.data.private ? "YES":"NO"}</td>
    <td>{language}</td>
       <a href={svn_url}>
         <button >click to github {name} </button>
       </a> 
    </>
  );
}
}

