import { faker } from "@faker-js/faker";
import {
  User,
  EventStatus,
  Company,
  Comment,
  Role,
  RiskTag,
  Evidence,
  FakeEvent,
  IncidentInformation,
} from "../types/types";

const generateUser = (): User => ({
  UserID: faker.number.int(),
  Username: faker.internet.userName(),
  PasswordHash: faker.internet.password(),
  Email: faker.internet.email(),
  CompanyID: faker.number.int(),
  RoleID: faker.number.int(),
});

const generateEventStatus = (): EventStatus => ({
  StatusID: faker.number.int(),
  StatusName: 
});

const generateComment = (): Comment => ({
  CommentID: faker.number.int(),
  EventID: faker.number.int(),
  CommentText: faker.lorem.paragraph(),
  CreatedByUserID: faker.number.int(),
  CreationDateTime: faker.date.past().toISOString(),
});

const generateCompany = (): Company => ({
  CompanyID: faker.number.int(),
  CompanyName: faker.company.name(),
  CompanyAddress: faker.location.streetAddress(),
  ContactInfo: faker.phone.number(),
});

const generateRole = (): Role => ({
  RoleID: faker.number.int(),
  RoleName: faker.person.jobTitle(),
  Permissions: faker.lorem.words(),
});

const generateRiskTag = (): RiskTag => ({
  RiskTagID: faker.number.int(),
  TagName: faker.lorem.word(),
});

const generateEvidence = (): Evidence => ({
  EvidenceID: faker.number.int(),
  EventID: faker.number.int(),
  EvidenceType: faker.lorem.word(),
  EvidenceData: faker.lorem.words(),
  Description: faker.lorem.sentence(),
  UploadDateTime: faker.date.past().toISOString(),
});

const generateIncidentInformation = (): IncidentInformation => ({
  Title: faker.lorem.sentence(),
  Description: faker.lorem.paragraph(),
  affectedItems: faker.lorem.words(3),
  affectedUsers: generateUser(),
  incidentDateTime: faker.date.anytime(),
});

const generateFakeEvent = (): FakeEvent => ({
  Id: faker.number.int(),
  Name: faker.lorem.sentence(),
  Status: generateEventStatus(),
  Severity: "High",
  Comments: generateComment(),
  Evidence: {
    Evidence: generateEvidence(),
    IncidentInformation: generateIncidentInformation(),
  },
});

export default function generateFakeEvents(length: number): FakeEvent[] {
  const events: FakeEvent[] = [];

  Array.from({ length: length }).forEach(() => {
    events.push(generateFakeEvent());
  });

  return events;
}
