package in.codeblog.tdms.exception;

public class DocumentIdExceptionResponse {
	String documentId;
	public DocumentIdExceptionResponse(String documentId)
	{
		super();
		this.documentId=documentId;
	}
	public String getDocumentId() {
		return documentId;
	}
	public void setDocumentId(String documentId) {
		this.documentId = documentId;
	}
	
}
