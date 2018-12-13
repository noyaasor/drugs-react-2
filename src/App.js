import React, { Component } from 'react';
import $ from 'jquery';

import './App.css';
import Form from "./components/form/form";
import ProductList from "./components/ProductList/ProductList";


class App extends Component {
  constructor(props){
super(props)
this.state={
n
}
  }
  
  handleAddToCart(order){
this.setState({

})
  }
  render() {
    return (
      <div className="App">
      <Form handleAddToCart={this.handleAddToCart}/>
<ProductList />
      </div>
    );
  }
}

export default App;
