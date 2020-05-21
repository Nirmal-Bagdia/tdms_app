package in.codeblog.tdms.repositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import in.codeblog.tdms.domain.Document;
@Repository
public interface ProjectRepository extends CrudRepository<Document, Long> {

	Document findByDocumentId(Long documentId);
	
	@Override
	Iterable<Document> findAll();

}
