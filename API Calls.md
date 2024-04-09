# Data Needed

# Table of Contents

- [Data Needed](#data-needed)
- [Table of Contents](#table-of-contents)
  - [Data Needed](#data-needed-1)


## Data Needed

- User's Role (In token)
- User's Company (In token)
- Companies Users (APIURL/company/users)
- All Organizations (APIURL/companies)
- All Users (APIURL/companies/users)
- Incident Events (APIURL/company/events)
  - Event Name
  - Event Status
  - Event Severity
  - Event Comments
  - Event Evidence
    - Evidence Date Created Date/Time
    - Incident Date Time
    - Incident Information
        - Title
        - Description
        - Affected Items
        - Affected Users (Should be a dropdown when on event creation)


```
{
    "EVENT 1": {
        "Id": "number"
        "Name": "string",
		"Status": "string",
        "Severity": "string",
		"Comments": "string",
        "Evidence": {
            "CreatedDateTime": "DateTime",
            "IncidentDateTime": "DateTime",
            "IncidentInformation": {
                "Title": 'string',
                'description': 'string',
                'affectedItems': 'array/dict',
                'affectedUsers': 'array/dict',
            }
        }
    }
    "EVENT 2": {
        "Id": "number"
        "Name": "string",
		"Status": "string",
        "Severity": "string",
		"Comments": "string",
        "Evidence": {
            "CreatedDateTime": "DateTime",
            "IncidentDateTime": "DateTime",
            "IncidentInformation": {
                "Title": 'string',
                'description': 'string',
                'affectedItems': 'array/dict',
                'affectedUsers': 'array/dict',
            }
        }
    }
}
```
