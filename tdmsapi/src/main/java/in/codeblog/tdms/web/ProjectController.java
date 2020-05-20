package in.codeblog.tdms.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import in.codeblog.tdms.domain.Project;
import in.codeblog.tdms.service.ProjectService;

@RestController
@RequestMapping("/tdms")
@CrossOrigin
public class ProjectController {
	
	@Autowired
	private ProjectService projectService;
	
	@GetMapping("/topics")
	public Iterable<Project> getAllTopics() {
		return projectService.findAllTopics();
	}

}
