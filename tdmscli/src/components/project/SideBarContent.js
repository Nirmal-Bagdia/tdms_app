import React, { Component } from "react";
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

class SideBarContent extends Component {

  render() {
    const { document } = this.props;

    return (
      <div className="container card card-body">
        <div className=" mb-2">
          <div className="row">
            <div className="col-md-12 d-lg-block">
            <Accordion >
                <Accordion.Toggle as={document.subject} variant="link" eventKey="0" >
                    <h3>{document.subject}</h3>
                </Accordion.Toggle>
                <Accordion.Collapse className="p-2" eventKey="0">
                   <Link to={`/dashboard/${document.documentId}`}>
                    <h5>{document.topic}</h5>
                   </Link>   
                </Accordion.Collapse>
            </Accordion>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBarContent;
