import React, { Component } from "react";
import Dashboard from "../Dashboard";
import { connect } from "react-redux";
import { getDocuments } from "../../actions/DocumentActions";
import { PropTypes } from "prop-types";
import LeftMenuContent from "./LeftMenuContent";

class LeftMenu extends Component {
  componentDidMount() {
    this.props.getDocuments();
  }
  render() {
    const { documents } = this.props.documents;
    return (
      <div className="wrapper">
        <div id="main-content">
          <div className="row">
           <div className="col-3 collapse show d-md-flex bg-light min-vh-100 border border-left-0" id="sidebar" >
              <ul className="nav flex-column flex-nowrap overflow-hidden">
                    {documents.map(document => (
                      <LeftMenuContent key={document.documentId} document={document} />
                    ))}
              </ul>
            </div> 
            <Dashboard />
          </div>
        </div>
      </div>
    );
  }
}
LeftMenu.propTypes = {
  document: PropTypes.object.isRequired,
  getDocuments: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  documents: state.documents
});

export default connect(
  mapStateToProps,
  { getDocuments }
)(LeftMenu);

