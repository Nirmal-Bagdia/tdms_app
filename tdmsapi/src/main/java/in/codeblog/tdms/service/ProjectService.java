package in.codeblog.tdms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.codeblog.tdms.domain.Project;
import in.codeblog.tdms.repositories.ProjectRepository;

@Service
public class ProjectService {
	
	@Autowired
	private ProjectRepository projectRepository; 
	
	public Iterable<Project> findAllTopics() {
		return projectRepository.findAll();
	}
}