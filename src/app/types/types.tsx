//User interface
export interface User {
  UserID: string;
  Username: string;
  PasswordHash: string;
  Email: string;
  CompanyID: string;
  RoleID: string;
}

//EventStatus interface
export interface EventStatus {
  StatusID: string;
  StatusName: Array<string>;
}

//Comment interface
export interface Comment {
  CommentID: string;
  EventID: string;
  CommentText: string;
  CreatedByUserID: string;
  CreationDateTime: string;
}

//Company interface
export interface Company {
  CompanyID: string;
  CompanyName: string;
  CompanyAddress: string;
  ContactInfo: string;
}

//Role interface
export interface Role {
  RoleID: string;
  RoleName: string;
  Permissions: string;
}

//Risk tag interface
export interface RiskTag {
  RiskTagID: string;
  TagName: string;
}

//Evident interface
export interface Evidence {
  EvidenceID: string;
  EventID: string;
  EvidenceType: string;
  EvidenceData: string;
  Description: string;
  UploadDateTime: string;
}

//Incident information interface
export interface IncidentInformation {
  Title: string;
  description: string;
  affectedItems: string;
  affectedUsers: any;
}

export interface FakeEvent {
  Id: string;
  Name: string;
  Status: EventStatus;
  Severity: Array<string>;
  Comments: Comment;
  Evidence: {
    Evidence: Evidence;
    IncidentInformation: IncidentInformation;
  };
}
