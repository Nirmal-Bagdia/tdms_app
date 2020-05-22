import React, { Component } from "react";
import { connect } from "react-redux";
import { getDocuments } from "../actions/DocumentActions";
import { PropTypes } from "prop-types";
import Content from "./Content"
class Dashboard extends Component {
  componentDidMount() {
    this.props.getDocuments();
  }

  render() {
    const { documents } = this.props.documents;
    return (
        <div className="container" id="contentboard"> 
          <div className="row">
            <div className="col-md-10">
              {documents.map(document => (
                <Content key={document.documentId} document={document} />
              ))}
            </div>
          </div>
        </div>
    );
  }
}
Dashboard.propTypes = {
  document: PropTypes.object.isRequired,
  getDocuments: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  documents: state.documents
});

export default connect(
  mapStateToProps,
  { getDocuments }
)(Dashboard);
