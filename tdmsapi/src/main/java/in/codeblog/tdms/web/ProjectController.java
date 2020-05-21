package in.codeblog.tdms.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import in.codeblog.tdms.domain.Document;
import in.codeblog.tdms.service.DocumentService;
import in.codeblog.tdms.service.MapValidationErrorService;

@RestController
@RequestMapping("/api/document")
@CrossOrigin
public class ProjectController {
	
	@Autowired
	private DocumentService  documentService ;
	
	@Autowired
	MapValidationErrorService mapValidationErrorService;
	
	@GetMapping("/topics")
	public Iterable<Document> getAllTopics() {
		return documentService.findAllTopics();
	}

}
