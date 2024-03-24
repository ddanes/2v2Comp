# 2 v 2 Competition Guidelines

## Topic 

### Create an incident tracking application

#### Description
Create an application that allows a company to create a new event for a cyber security incident. While it is up to said company to determine what warants an event, they need to be able to track whatever events they create. This includes collecting information and evidence about that event. Some information will be collected on creation of the event automatically and some needs to be able to be inputed by the company. 

Once an event is created the company needs to be able to add status tags to the event for tracking purposes. Once an event is complete the item must be able to be marked complete, closed, and then logged for historical purposes.

### Requirements
overall
- [] Allows for user managment
  - [] Users need to belong to a company
  - [] Create users
  - [] Edit users
  - [] delete users
  - [] manage user permissions
- [] Allow users to create and manage incident `Events`
  - [] Create events
  - [] delete an event
  - [] Set Event status
  - [] Mark Events complete
  - [] Allow comments on the events
  - [] Allows users to tag events based on the risk - like high, medium, low
  - [] EXTRA - Events need to get archived and then be able to list old archieved events
- [] Allow evidence collection on a per event basis
  - [] Evidence needs to be associated with one event
  - [] Need to allow comments on events
  - [] Evidence needs to be able to be images or text
- [] Other
  - [] Need to be able to track the length of an event
  - [] EXTRA - If an event goes on too long an automated message needs to be sent out - depends on available free items
 

- [] UI
  - [] login page
  - [] MFA - Depending on free version of Auth0
  - [] Home page
    - [] lists recent events
    - [] shows a total number of each event category with a focus on any high risk events
  - [] Event Page
    - [] Create Events
    - [] Mange exsisting events
    - [] Ability to click on events and have them bring up a seperate box to mangae it there and add comments. This is also where you would add evidence to the page
  - [] Admin Page
    - Manage Users
    - Manage permissions
  - [] EXTRA - Archieved Page see old events and their evidence/comments
  - [] EXTRA - Management Page - Allows users to see the length of events and what the time it took and see overtime if the response time is increasing or decreasing


### Minimum Required tech stack

### Rules

- No more then 60% of the code can be written by either David or Tony on their applicable teams
  - This allows for Hank and Brandon to get practice and be more involved 
- Code MUST be commented well. A 3rd party needs to be able to walk through it in a traditional code review setting.

### Point System 

