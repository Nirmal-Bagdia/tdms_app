import React, { Component } from "react";
import SideBarItem from "./SideBarItem";
import { connect } from "react-redux";
import { getDocuments } from "../actions/DocumentActions";
import { PropTypes } from "prop-types";

class LeftSideBar extends Component {
  componentDidMount() {
    this.props.getDocuments();
  }

  render() {
    const { documents } = this.props.documents;
    return (
    
            <div>
                {documents.map(document => (
                <SideBarItem key={document.id} document={document} />
              ))}
            </div>
    
    );
  }
}
LeftSideBar.propTypes = {
  document: PropTypes.object.isRequired,
  getdocuments: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  documents: state.documents
});

export default connect(
  mapStateToProps,
  { getDocuments }
)(LeftSideBar);
