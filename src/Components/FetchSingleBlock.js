import React, { Component } from 'react'
const ID ="0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103"
 class FetchSingleBlock extends Component {
  constructor(props){
    super(props)
  
  this.state ={

    loading :true,
    Block:null,
    b_Hash:'',
    Hash:''
  };
  this.clickHandler=this.clickHandler.bind(this)
 
}
getBlock=(event)=>{

  this.setState({
    b_Hash:event.target.value
  })
}
clickHandler(){
  this.setState({
    
    Hash :this.state.b_Hash
  })
  
  
  
}
  async componentDidMount(){
const url="https://blockchain.info/rawblock/0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103?cors=true";
const response= await fetch(url);
const data =await response.json();
this.setState({Block: data,loading : false})
console.log(data.results)
  }
  
    render() {
    return (
      <div>
        {this.state.loading  || !this.state.Block ? 
        (<div> loading...</div>
             ): (
            <div>
                <h1>Single Block</h1>
                <div><input type="text" value={this.state.B_Hash}onChange={this.getBlock}></input></div>
                <button onClick={this.clickHandler.bind(this)}>Get Block</button>
                <div>{this.state.Block.hash}</div>
                <div>{this.state.Block.ver}</div>
                <div>{this.state.Block.prev_block}</div>
                <div>{this.state.Block.mrkl_root}</div>



                
            </div>
        )}
      </div>
    );
  }
}
export default FetchSingleBlock