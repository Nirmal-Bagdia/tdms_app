import React, { Component } from "react";

class SideBarItem extends Component {
  
  render() {
    const { document } = this.props;
    return (

<div class="wrapper">
  <div id="main-content">
    <div class="row">
      <div class="col-3 collapse show d-md-flex bg-light min-vh-100 border border-left-0" id="sidebar">
        <ul class="nav flex-column flex-nowrap overflow-hidden"> 
            <li class="nav-item">
              <div class="doc-heading p-3"><span>{document.subject}</span></div>
                <a class="nav-link collapsed text-truncate" href="{document.subTopic}" data-toggle="collapse" data-target="#submenu1"><span class="d-none d-sm-inline side-nav-title">{document.topic}</span></a>
                  <div class="collapse" id="subTopic" aria-expanded="false">
                      <ul class="flex-column pl-3 nav">
                          <li class="nav-item"><a class="active nav-link py-0" href="subTopic"><span class="side-nav-title topics">{document.subTopic}</span></a></li>
                      </ul>                     
              </div>                
            </li>
        </ul>
      </div>
    </div>
  </div>
</div>

     

    );
  }
}

export default SideBarItem;
