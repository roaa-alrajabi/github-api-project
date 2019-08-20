import React,{Component}from 'react';

export default class Sreach extends Component {
  state={
    user:""
  }

 Search=(user)=>{
   console.log(user.target.value)
   this.setState({
     user:user.target.value
   })

 }


  render(){
  return (
    <>
    
      <input type="text"  onChange={this.Search}/>
      <button class="btn btn-outline-secondary" type="button" onClick={this.props.change.bind(this,this.state.user)} >Sreach</button>
 {/* onClick={this.props.change.bind(this,this.state.user)} >Sreach</button> */}
        
    </>
  );
}
}
