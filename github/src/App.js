import React,{Component}from 'react';
import Sreach from './Component/Sreach';
import Table from './Component/Table';
// import Tableitem from './Component/Tableitem';
import axios from 'axios';

export default class App extends Component {
  state={
    
    data:[],
    name:'',
    repo:""
  }
  change=(user)=>{
    axios.get(`https://api.github.com/users/${user}/repos`)
    .then(res=>{
      // console.log(res.data);
      this.setState({data:res.data})
      this.setState({repo:res.data.length})
      // console.log(res.data.length)
      if(res.data.length===0){
          this.setState({repo:"0"})
      }
    })
    .catch(error => {
      this.setState({name:error.name}) // will take value of name  so will compere with error 
      console.log(this.state.name);
    });
  
}
 
  
  render(){
    const{name}=this.state
    const{repo}=this.state
  return (
    <>
   <Sreach change={this.change} />
     {
       name ==="Error"?
       <h1>Not member...</h1>
      :
      <Table data={this.state.data} />
    }


    {repo==="0" ? <h1>user is defined but pero undefined</h1>:<h1></h1> }
    </>
  );
}}
