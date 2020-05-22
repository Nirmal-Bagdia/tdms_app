import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion';
class SideBarItem extends Component {
  
  render() {
    const { document } = this.props;
    return (

    <div className="row" id="main-content">
      <Accordion className="border card card-body " id="sidebar">
                <Accordion.Toggle as={document.subject} variant="link" eventKey="0" >
                    {document.subject} 
                </Accordion.Toggle>
            
             <Accordion.Collapse className="p-2" eventKey="0">
               <p>{document.topic}</p>   
               
             </Accordion.Collapse>
        
      </Accordion>  
    </div>
    


    );
  }
}

export default SideBarItem;
