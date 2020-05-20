package in.codeblog.tdms.domain;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Project {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long documentIdentifier;
	@NotBlank(message = "subject is Required")
	private String subject;
	@NotBlank(message = "topic is Required")
	private String topic;
	@NotBlank(message = "subTopic is Required")
	private String subTopic;
	@NotBlank(message = "content is Required")
	private String content;

	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date created_At;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date updated_At;
	
	@PrePersist
	protected void onCreate(){
		this.created_At = new Date();
	}
	@PreUpdate
	protected void onUpdate(){
		this.updated_At = new Date();
	}
	
	
	public long getDocumentIdentifier() {
		return documentIdentifier;
	}

	public void setDocumentIdentifier(long documentIdentifier) {
		this.documentIdentifier = documentIdentifier;
	}

	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getTopic() {
		return topic;
	}
	public void setTopic(String topic) {
		this.topic = topic;
	}
	public String getSubTopic() {
		return subTopic;
	}
	public void setSubTopic(String subTopic) {
		this.subTopic = subTopic;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Date getCreated_At() {
		return created_At;
	}
	public void setCreated_At(Date created_At) {
		this.created_At = created_At;
	}
	public Date getUpdated_At() {
		return updated_At;
	}
	public void setUpdated_At(Date updated_At) {
		this.updated_At = updated_At;
	}
	
}