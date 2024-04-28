//User interface
export interface User {
  UserID: number;
  Username: string;
  PasswordHash: string;
  Email: string;
  CompanyID: number;
  RoleID: number;
}

//EventStatus interface
export interface EventStatus {
  StatusID: number;
  StatusName: string;
}

//Comment interface
export interface Comment {
  CommentID: number;
  EventID: number;
  CommentText: string;
  CreatedByUserID: number;
  CreationDateTime: string;
}

//Company interface
export interface Company {
  CompanyID: number;
  CompanyName: string;
  CompanyAddress: string;
  ContactInfo: string;
}

//Role interface
export interface Role {
  RoleID: number;
  RoleName: string;
  Permissions: string;
}

//Risk tag interface
export interface RiskTag {
  RiskTagID: number;
  TagName: string;
}

//Evident interface
export interface Evidence {
  EvidenceID: number;
  EventID: number;
  EvidenceType: string;
  EvidenceData: string;
  Description: string;
  UploadDateTime: string;
}

//Incident information interface
export interface IncidentInformation {
  Title: string;
  Description: string;
  affectedItems: string[];
  affectedUsers: string[];
  incidentDateTime: string;
}

export interface FakeEvent {
  Id: number;
  Name: string;
  Status: EventStatus;
  Severity: string;
  Comments: Comment;
  Evidence: {
    Evidence: Evidence;
    IncidentInformation: IncidentInformation;
  };
}

export interface FakeEventRow {
  id: number;
  name: string;
  status: string;
  severity: string;
  comments: string;
  createdDateTime: string;
  incidentDateTime: string;
  incidentTitle: string;
  incidentDescription: string;
  affectedItems: string[];
  affectedUsers: string[];
  evidenceDescription: string;
  uploadDateTime: string;
}
