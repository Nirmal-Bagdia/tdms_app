import React, { Component } from "react";
import SideBarItem from "./SideBarItem";
import { connect } from "react-redux";
import { getProjects } from "../actions/ProjectActions";
import { PropTypes } from "prop-types";

class LeftSideBar extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props.projects;
    return (
    
            <div>
                {projects.map(project => (
                <SideBarItem key={project.id} project={project} />
              ))}
            </div>
    
    );
  }
}
LeftSideBar.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(
  mapStateToProps,
  { getProjects }
)(LeftSideBar);
