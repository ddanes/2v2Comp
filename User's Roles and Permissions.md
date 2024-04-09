# User's Roles and Permissions

## Overview
Outline the different roles and permissions throughout the application


## Table of Contents- [User's Roles](#users-roles)
- [User's Roles](#users-roles)
  - [Overview](#overview)
  - [Table of Contents- User's Roles](#table-of-contents--users-roles)
  - [Description](#description)
    - [Role and Permissions Outline](#role-and-permissions-outline)


## Description
Outline the different roles and permissions throughout the application

### Role and Permissions Outline

| Role        | Create User | Edit User | Delete Org User | Manage User Permission | Create Event | Delete Event | Set Event Status | Mark Complete | Comment | View Org Event | Create Company | Manage/View All Orgs/Users |
| ----------- | ----------- | --------- | --------------- | ---------------------- | ------------ | ------------ | ---------------- | ------------- | ------- | -------------- | -------- | --------- |
| User        |             |           |                 |                        | x            |              |                  |               |    x    | x              | | |
| OrgAdmin    | x           | x         | x               | x                      | x            | x            | x                | x             | x       | x              | | |
| GlobalAdmin | x           | x         | x               | x                      | x            | x            | x                | x             | x       | x              | x | x |