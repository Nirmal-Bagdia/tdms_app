import React, { Component } from "react";
import SideBarContent from "./../project/SideBarContent";
import { connect } from "react-redux";
import { getDocuments } from "../../actions/DocumentActions";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
class Sidebar extends Component {

    componentDidMount() {
        this.props.getDocuments();
      }
    
    render() {
        const { documents } = this.props.documents;
        return (
            <div className="row" id="main-content">
              <div className="border " id="sidebar">  
                  {documents.map(document => (
                   <SideBarContent key={document.documentId} document={document} />
                  ))}
              </div>
            </div>    
        )
    }
}
Sidebar.propTypes = {
    document: PropTypes.object.isRequired,
    getDocuments: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    documents: state.documents
  });
  
  export default connect(
    mapStateToProps,
    { getDocuments }
  )(Sidebar);
  
