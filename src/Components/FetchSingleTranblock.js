import React, { Component } from 'react'

 class FetchSingleTranBlock extends Component {
  state ={

    loading :true,
    Block:null
  };
  async componentDidMount(){
const url="https://blockchain.info/rawtx/b6f6991d03df0e2e04dafffcd6bc418aac66049e2cd74b80f14ac86db1e3f0da?cors=true";

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
              <h1>Single Transaction</h1>
                 <label>inputs[0].prev_out.value</label>
                <div>{this.state.Block.inputs[0].prev_out.value}</div>
                
            </div>
        )}
      </div>
    );
  }
}
export default FetchSingleTranBlock