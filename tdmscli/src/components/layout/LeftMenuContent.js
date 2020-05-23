import React, { Component } from "react";
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

class LeftMenuContent extends Component {

  render() {
    const { document } = this.props;

    return (
      
        <li className="nav-item">
            <Accordion className="nav-link collapsed text-truncate">
                <Accordion.Toggle as={document.documentName} variant="link" eventKey="0" >
                    <h6>Hello{document.topic}</h6>
                </Accordion.Toggle>
                <Accordion.Collapse className="p-2" eventKey="0">
                   <Link to={`/dashboard/${document.documentId}`}>
                    <p>{document.subTopic}</p>
                   </Link>   
                </Accordion.Collapse>
            </Accordion>
        </li>
    );
  }
}

export default LeftMenuContent;
