# Database Schema

# Table of Contents
- [Database Schema](#database-schema)
- [Table of Contents](#table-of-contents)
  - [Tables and Key Fields](#tables-and-key-fields)
    - [`Users`](#users)
    - [`Companies`](#companies)
    - [`Roles`](#roles)
    - [`Events`](#events)
    - [`EventStatus`](#eventstatus)
    - [`RiskTags`](#risktags)
    - [`Comments`](#comments)
    - [`Evidence`](#evidence)
  - [Relationships](#relationships)


## Tables and Key Fields

### `Users`
- `UserID` (PK)
- `Username`
- `PasswordHash`
- `Email`
- `CompanyID` (FK to `Companies`)
- `RoleID` (FK to `Roles`)

### `Companies`
- `CompanyID` (PK)
- `CompanyName`
- `CompanyAddress`
- `ContactInfo`

### `Roles`
- `RoleID` (PK)
- `RoleName`
- `Permissions`

### `Events`
- `EventID` (PK)
- `CompanyID` (FK to `Companies`)
- `CreatedByUserID` (FK to `Users`)
- `CreationDateTime`
- `IncidentDateTime`
- `Title`
- `Description`
- `AffectedItems`
- `AffectedUsers`
- `StatusID` (FK to `EventStatus`)
- `RiskTagID` (FK to `RiskTags`)
- `IsArchived`
- `EventLength`

### `EventStatus`
- `StatusID` (PK)
- `StatusName`

### `RiskTags`
- `RiskTagID` (PK)
- `TagName`

### `Comments`
- `CommentID` (PK)
- `EventID` (FK to `Events`)
- `CommentText`
- `CreatedByUserID` (FK to `Users`)
- `CreationDateTime`

### `Evidence`
- `EvidenceID` (PK)
- `EventID` (FK to `Events`)
- `EvidenceType`
- `EvidenceData`
- `Description`
- `UploadDateTime`

## Relationships
- A **Company** has multiple **Users**.
- **Users** have **Roles** that define their permissions within the application.
- A **Company** can have multiple **Events** related to cybersecurity incidents.
- **Events** can have one or multiple **Statuses** over their lifecycle (e.g., Open, Closed).
- **Events** can be tagged with a **RiskTag**.
- **Events** can have multiple **Comments**.
- **Events** can have multiple pieces of **Evidence**.