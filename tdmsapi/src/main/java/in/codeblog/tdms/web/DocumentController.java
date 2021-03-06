package in.codeblog.tdms.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import in.codeblog.tdms.domain.Document;
import in.codeblog.tdms.service.DocumentService;
import in.codeblog.tdms.service.MapValidationErrorService;

@RestController
@RequestMapping("/api/document")
@CrossOrigin
public class DocumentController {
	
	@Autowired
	private DocumentService  documentService ;
	
	@Autowired
	MapValidationErrorService mapValidationErrorService;
	
	@GetMapping("/topics")
	public Iterable<Document> getAllTopics() {
		return documentService.findAllTopics();
	}
	
	@GetMapping("/{documentId}")
	public ResponseEntity<?> getDocumentByDocumentId(@PathVariable Long documentId)
	{
		Document document=documentService.findByDocumentId(documentId);
		return new ResponseEntity<Document>(document,HttpStatus.OK);
	}

}
