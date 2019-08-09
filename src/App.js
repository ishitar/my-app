import React, { Component } from 'react';
import { Container } from "./Container";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default class App extends Component {
    render() {
        return (
          <div>
                        
              <div><Header /></div>
              <div><Container /></div>
              <div><Footer /></div>
          
                
          </div>          
        );
    }
}

