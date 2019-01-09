import React, { Component } from 'react'
import { Button } from 'reactstrap';
import { Badge } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import '../FetchLatestBlock.css'
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
              <h1>Single Block <Badge color="secondary">Block</Badge></h1>
                 <Container  className="container">
               
               <Row>
               <Col xs="2">Hash</Col>
               <Col xs="10">{this.state.Block.hash}</Col>
               </Row>
               <Row>
               <Col xs="2">Version</Col>
               <Col xs="10">{this.state.Block.ver}</Col>
               </Row>
               <Row>
               <Col xs="2">Previous Block</Col>
               <Col xs="10">{this.state.Block.prev_block}</Col>
               </Row>
               <Row>
               <Col xs="2">Root</Col>
               <Col xs="10">{this.state.Block.mrkl_root}</Col>
               </Row>
               <Row>
               <Col xs="2">time</Col>
               <Col xs="10">{this.state.Block.time}</Col>
               </Row>
               <Row>
               <Col xs="2">bits</Col>
               <Col xs="10">{this.state.Block.bits}</Col>
               </Row>
               <Row>
               <Col xs="2">n_tx</Col>
               <Col xs="10">{this.state.Block.n_tx}</Col>
               </Row>
               <Row>
               <Col xs="2">size</Col>
               <Col xs="10">{this.state.Block.size}</Col>
               </Row>
               <Row>
               <Col xs="2">block_index</Col>
               <Col xs="10">{this.state.Block.block_index}</Col>
               </Row>
             
             
             
               </Container>



                
            </div>
        )}
      </div>
    );
  }
}
export default FetchSingleBlock