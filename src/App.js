import React, { Component } from 'react';
import { Container } from "./Container";
import { Header } from "./Header";
import { Footer } from "./Footer";


const titleStyle = {
    padding: "10px"
};
export default class App extends Component {
     
    render() {
        return (
          <div>

          
              <div><Header /></div>
              <h1 class="display-5" style={titleStyle}>Dashboard </h1>
              <p class="lead" style={titleStyle}>
                The following Dashboard enables you to get a deep insight about different approvals and requests and their status. 
                </p>
              <div><Container /></div>
              <div><Footer /></div>
          
                
          </div>          
        );
    }
}

