package in.codeblog.tdms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import in.codeblog.tdms.domain.Document;
import in.codeblog.tdms.exception.DocumentIdException;
import in.codeblog.tdms.repositories.DocumentRepository;

@Service
public class DocumentService  {
	
	@Autowired
	private DocumentRepository documentRepository; 
	
	public Iterable<Document> findAllTopics() {
		return documentRepository.findAll();
	}
	
	public Document findByDocumentId(Long documentId)
	{
		Document document=documentRepository.findByDocumentId(documentId);
		if(document==null)
		{
			throw new DocumentIdException("Document Id '"+documentId+"' does not exists !");
		}
		return document;
		
	}
}