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

const severity = ["High", "Medium", "Low"];
const status = ["Open", "Closed"];

const generateUser = (): User => ({
  UserID: faker.string.uuid(),
  Username: faker.internet.userName(),
  PasswordHash: faker.internet.password(),
  Email: faker.internet.email(),
  CompanyID: faker.string.uuid(),
  RoleID: faker.string.uuid(),
});

const generateEventStatus = (): EventStatus => ({
  StatusID: faker.string.uuid(),
  StatusName: status,
});

const generateComment = (): Comment => ({
  CommentID: faker.string.uuid(),
  EventID: faker.string.uuid(),
  CommentText: faker.lorem.paragraph(),
  CreatedByUserID: faker.string.uuid(),
  CreationDateTime: faker.date.past().toISOString(),
});

const generateCompany = (): Company => ({
  CompanyID: faker.string.uuid(),
  CompanyName: faker.company.name(),
  CompanyAddress: faker.location.streetAddress(),
  ContactInfo: faker.phone.number(),
});

const generateRole = (): Role => ({
  RoleID: faker.string.uuid(),
  RoleName: faker.person.jobTitle(),
  Permissions: faker.lorem.words(),
});

const generateRiskTag = (): RiskTag => ({
  RiskTagID: faker.string.uuid(),
  TagName: faker.lorem.word(),
});

const generateEvidence = (): Evidence => ({
  EvidenceID: faker.string.uuid(),
  EventID: faker.string.uuid(),
  EvidenceType: faker.lorem.word(),
  EvidenceData: faker.lorem.words(),
  Description: faker.lorem.sentence(),
  UploadDateTime: faker.date.past().toISOString(),
});

const generateIncidentInformation = (): IncidentInformation => ({
  Title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  affectedItems: faker.company.buzzPhrase(),
  affectedUsers: generateUser,
});

const generateFakeEvent = (): FakeEvent => ({
  Id: faker.string.uuid(),
  Name: faker.lorem.sentence(),
  Status: generateEventStatus(),
  Severity: severity,
  Comments: generateComment(),
  Evidence: {
    Evidence: generateEvidence(),
    IncidentInformation: {
      Title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      affectedItems: faker.company.buzzPhrase(),
      affectedUsers: generateUser(),
    },
  },
});

export default function generateFakeEvents(length: number): FakeEvent[] {
  const events: FakeEvent[] = [];

  Array.from({ length: length }).forEach(() => {
    events.push(generateFakeEvent());
  });

  return events;
}
