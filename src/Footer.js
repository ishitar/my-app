import React, { Component } from 'react';

export class Footer extends Component {

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                    <footer class="footer text-light">&copy; Copyright RBS</footer>     
                    <marquee class="text-light">This project is made and maintained by Royal Bank of Scotland Pvt. Ltd.</marquee>   
                </nav>            

            </div>
        );
    }
}

export default Footer;