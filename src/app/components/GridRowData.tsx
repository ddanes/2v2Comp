// transformDataToRows.tsx

import { FakeEvent, FakeEventRow } from "@/app/types/types"; // Adjust the import path as necessary.
import formatDate from "./formatDate";

export const GridRowData = (
  fakeEvent: FakeEvent[] | undefined
): FakeEventRow[] => {
  if (!fakeEvent) return [];
  // Transform organizations into FakeEventRows.
  const orgMap = fakeEvent.map(
    (org, index): FakeEventRow => ({
      id: org.Id,
      name: org.Name,
      status: org.Status.StatusName,
      severity: org.Severity,
      comments: org.Comments.CommentText,
      createdDateTime: formatDate(org.Evidence.Evidence.UploadDateTime),
      evidenceDescription: org.Evidence.Evidence.Description,
      incidentDateTime: formatDate(
        org.Evidence.IncidentInformation.incidentDateTime
      ),
      incidentTitle: org.Evidence.IncidentInformation.Title,
      incidentDescription: org.Evidence.IncidentInformation.Description,
      affectedItems: org.Evidence.IncidentInformation.affectedItems,
      affectedUsers: org.Evidence.IncidentInformation.affectedUsers,
      uploadDateTime: formatDate(org.Evidence.Evidence.UploadDateTime),
    })
  );
  return orgMap;
};
