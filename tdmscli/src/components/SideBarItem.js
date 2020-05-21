import React, { Component } from "react";

class SideBarItem extends Component {
  
  render() {
    const { document } = this.props;
    return (

    <div className="row" id="main-content">
      <div className="col-4 collapse show d-md-flex bg-light min-vh-100 border border-left-0" id="sidebar">
        <ul className="nav flex-column flex-nowrap overflow-hidden"> 
            <li className="nav-item">
              <div className="p-3"><span>{document.subject}</span></div>
                <a className="nav-link collapsed text-truncate" href="/" data-toggle="collapse" data-target="#submenu1">
                  <span className="d-none d-sm-inline side-nav-title">{document.topic}</span>
                </a>
                  <div className="collapse" id="subTopic" aria-expanded="false">
                    <ul className="flex-column pl-3 nav">
                      <li className="nav-item">
                        <a className="active nav-link py-0" href="/" mb-3>
                         <span className="side-nav-title topics">{document.subTopic}</span>
                        </a>
                      </li>
                    </ul>                     
               </div>                
          </li>
        </ul>
      </div>
    </div>
    

    );
  }
}

export default SideBarItem;
