import React, { Component } from "react";
import ContentItem from "./ContentItem";
import { connect } from "react-redux";
import { getDocuments } from "../actions/DocumentActions";
import { PropTypes } from "prop-types";
import LeftSideBar from "./LeftSideBar";

class Content extends Component {
  componentDidMount() {
    this.props.getDocuments();
  }

  render() {
    const { documents } = this.props.documents;
    return (
    
        
           <div className="col-md-8"  id="main-content">
              {documents.map(document => (
                <ContentItem key={document.id} document={document} />
              ))}
            </div> 
    );
  }
}
Content.propTypes = {
  document: PropTypes.object.isRequired,
  getDocuments: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  documents: state.documents
});

export default connect(
  mapStateToProps,
  { getDocuments }
)(Content);
