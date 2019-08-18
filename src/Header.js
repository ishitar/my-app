import React, { Component } from 'react';

export class Header extends Component {

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="col text-left">
                        <img id="pro" src={require('./RBS-logo.png')} alt="RBS" height="40px" ></img>                    
                        <button class="btn btn-sm btn-outline-dark ml-2" type="button">Home</button> <br></br>
                    </div>    
                    <div class="col text-right">  
                        <img id="pro" src={require('./profile.png')} alt="profile" height="40px"></img>
                        <span class="btn btn-sm btn-dark mr-3"><b>Welcome</b> Rashmi</span>                                       
                        <button class="btn btn-sm btn-outline-secondary" type="submit">Sign Out</button>

                    </div>
                    
                </nav>

          

            </div>
        );
    }
}


export default Header;