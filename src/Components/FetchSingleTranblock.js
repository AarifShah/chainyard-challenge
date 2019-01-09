import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Badge } from 'reactstrap';
import '../FetchLatestBlock.css'
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
                <h1>Single Transaction <Badge color="secondary">Block</Badge></h1>
                                                
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
                <Col xs="2">vin_sz</Col>
                <Col xs="10">{this.state.Block.vin_sz}</Col>
                </Row>
                <Row>
                <Col xs="2">vout_sz</Col>
                <Col xs="10">{this.state.Block.vout_sz}</Col>
                </Row>
                </Container>
            </div>
        )}
      </div>
    );
  }
}
export default FetchSingleTranBlock