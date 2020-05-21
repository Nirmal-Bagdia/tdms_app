package in.codeblog.tdms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import in.codeblog.tdms.domain.Document;
import in.codeblog.tdms.repositories.ProjectRepository;

@Service
public class DocumentService  {
	
	@Autowired
	private ProjectRepository projectRepository; 
	
	public Iterable<Document> findAllTopics() {
		return projectRepository.findAll();
	}
}