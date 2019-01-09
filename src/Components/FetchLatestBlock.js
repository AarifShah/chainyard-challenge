import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Badge } from 'reactstrap';
import '../FetchLatestBlock.css'
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
                <h1>Latest <Badge color="secondary">Block</Badge></h1>
                  <Container  className="container">
                  <Row>
                  <Col xs="2">Hash</Col>
                  <Col xs="10">{this.state.Block.hash}</Col>
                  </Row>
                  <Row>
                  <Col xs="2">time</Col>
                  <Col xs="10">{this.state.Block.time}</Col>
                  </Row>
                  <Row>
                  <Col xs="2">block_index</Col>
                  <Col xs="10">{this.state.Block.block_index}</Col>
                  </Row>
                  <Row>
                  <Col xs="2">height</Col>
                  <Col xs="10">{this.state.Block.height}</Col>
                  </Row>
                  <Row>
                  <Col xs="2">txIndexes</Col>
                  <Col xs="10">{this.state.Block.txIndexes[0]}</Col>
                  </Row>
                      
                
                  </Container>
                </div>
        )}
      </div>
    );
  }
}
export default FetchLatestBlock