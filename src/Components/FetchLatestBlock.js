import React, { Component } from 'react'

 class FetchLatestBlock extends Component {
  state ={

    loading :true,
    Block:null
  };
  async componentDidMount(){
const url="https://blockchain.info/latestblock?cors=true";

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
                <h1>Latest Block</h1>
                <table>
                    <tbody>
                        <tr>
                        <td><div>Hash :</div></td>
                        <td><div>{this.state.Block.hash}</div></td>
                        </tr>
                        <tr>
                        <td><div>Time :</div></td>
                        <td><div>{this.state.Block.time}</div></td>
                        </tr>
                        <tr>
                        <td><div>block_index:</div></td>
                        <td><div>{this.state.Block.block_index}</div></td>
                        </tr>
                        <tr>
                        <td><div>height :</div></td>
                        <td><div>{this.state.Block.height}</div></td>
                        </tr>
                        <tr>
                        <td><div>txIndexes :</div></td>
                        <td><div>{this.state.Block.txIndexes}</div></td>
                        </tr>
                    
                
                </tbody>
                </table>
                
                
            </div>
        )}
      </div>
    );
  }
}
export default FetchLatestBlock