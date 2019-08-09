import React, { Component } from 'react';

export class Chart2 extends Component {
    loadGoogle(){
        const self = this;
        console.log("Hello");
        window.google.charts.load('current', {'packages':['bar']});
        window.google.charts.setOnLoadCallback(drawStuff);
  
        function drawStuff() {
            var data = new window.google.visualization.arrayToDataTable([
                ['Levels', '', ''],
                ['L1', 30, 23],
                ['L2', 24, 4],
                ['L3', 30, 13],
                ['L4', 50, 9],
                ['L5', 50, 11]
            ]);
    
            var options = {
                width:500,
                height:300,                
            legend: 'none',
            bars: 'horizontal' // Required for Material Bar Charts.
            };

            var chart = new window.google.charts.Bar(document.getElementById(self.props.id));
            chart.draw(data, window.google.charts.Bar.convertOptions(options));
          
        };
    };
      
      
  
      componentDidMount(){
          console.log("In chart2");
          this.loadGoogle();
      }     
  
      render() {
          return (
            <div id = {this.props.id}></div>     
          );
      }
  }