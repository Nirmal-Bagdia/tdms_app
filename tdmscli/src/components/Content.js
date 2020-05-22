import React, { Component } from "react";
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

class SideBarContent extends Component {

  render() {
    const { document } = this.props;

    return (
      <div className="container card card-body" >
        <div className=" mb-2">
          <div className="row">
            <div className="col-md-12 d-lg-block">
            <h3> {document.subTopic}</h3>
            <p> {document.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBarContent;
