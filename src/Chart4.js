import React, { Component } from 'react';

export class Chart4 extends Component {
    loadGoogle(){
        const self = this;
        console.log("Hello");
        window.google.charts.load('current', {'packages':['bar']});
        window.google.charts.setOnLoadCallback(drawStuff);
  
        function drawStuff() {
          var data = new window.google.visualization.arrayToDataTable([
            ['Galaxy', 'Distance', 'Brightness'],
            ['Canis Major Dwarf', 8000, 23.3],
            ['Sagittarius Dwarf', 24000, 4.5],
            ['Ursa Major II Dwarf', 30000, 14.3],
            ['Lg. Magellanic Cloud', 50000, 0.9],
            ['Bootes I', 60000, 13.1]
          ]);
  
          var options = {
            width: 500,
            chart: {
              title: 'Nearby galaxies',
              subtitle: 'distance on the left, brightness on the right'
            },
            bars: 'horizontal'}
            var chart = new window.google.charts.Bar(document.getElementById(self.props.id));
            chart.draw(data, options);
          };
  
       
      };
      
      
  
      componentDidMount(){
          console.log("In chart4");
          this.loadGoogle();
      }     
  
      render() {
          return (
            <div id = {this.props.id}></div>     
          );
      }
  }