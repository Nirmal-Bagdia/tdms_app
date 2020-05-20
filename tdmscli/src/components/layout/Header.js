import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
            <a className="navbar-brand" href="Dashboard.html">
            YTDMS
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav ml-auto">                                                          
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                          <i class='fas fa-user-circle'></i> Profile
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                           <i class='fas fa-bell'></i> Notifications
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                           <i class='fas fa-code'></i> Samples
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        )
    }
}
export default  Header;
