import React, { Component } from 'react';
import { Chart1 } from "./Chart1";
import { Chart2 } from "./Chart2";
import { Chart3 } from "./Chart3";
import { Chart4 } from "./Chart4";

export class Container extends Component {  

      obj = {
        cls:["resource1","resource2","resource3","resources4"]
    }
      render() {
          return (
            <div>
                    <div className="row">
                        {/* <div class="col-sm-6"></div>  */}
                        <div className="col-md-4 col-lg-4 col-sm-4">
                            <div className="card ml-5 mt-5">
                                <div className="card-header">Requests/Level</div>
                                <div className="card-body"><h2><Chart2 id ={this.obj.cls[1] }/></h2></div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-4">
                            <div className="card ml-5 mt-5">
                                <div className="card-header" >Requests/Level</div>
                                <div className="card-body"><h2><Chart1 id ={this.obj.cls[0] }/></h2></div>
                            </div>
                        </div>
                        {/* <div className="col-md-4 col-lg-4 col-sm-4"><h2><Chart1 id ={this.obj.cls[0]}/></h2></div>   */}
                                         
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-4">
                                <div className="card ml-5 mt-5">
                                    <div className="card-header">Requests/Level</div>
                                    <div className="card-body"><h2><Chart3 id ={this.obj.cls[2] }/></h2></div>
                                </div>
                        </div>

                    </div>
            </div>     
          );
      }

      
  }
