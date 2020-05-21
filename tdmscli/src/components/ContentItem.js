import React, { Component } from "react";

class ContentItem extends Component {
  
  render() {
    const { document } = this.props;

    return (
     
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-lg-12" >
              <span className="mx-auto">{document.subject} > {document.topic} > {document.subTopic} </span>
              <hr />
              <h4>{document.subTopic}</h4>
              <p>{document.content}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default ContentItem;
