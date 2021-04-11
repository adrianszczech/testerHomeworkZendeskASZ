Feature('testerHomeworkZendesk');

// account informations
var userSubdomain = 'typeUserSubdomain';
var userEmail = 'typeUserEmail';
var userPassword = 'typeUserPassword';

// new lead informations
var leadFirstName = 'John';
var leadLastName = 'Smith';
var leadCompanyName = 'New Company';

// lead statuses
var primaryLeadStatus = 'New';
var newLeadStatus = 'Created';

Scenario('Homework scenario', ({ I, homeworkStep }) => {
    I.amOnPage('/')

    homeworkStep.logIntoZendeskSellWebApp(userSubdomain, userEmail, userPassword);
    homeworkStep.createNewLead(leadFirstName, leadLastName, leadCompanyName);
    homeworkStep.checkLeadStatusName(leadFirstName, leadLastName, primaryLeadStatus);
    homeworkStep.changeLeadStatusToDifferentName(primaryLeadStatus, newLeadStatus);
    homeworkStep.checkLeadStatusName(leadFirstName, leadLastName, newLeadStatus);
});

Scenario('Restore environment to state before homework scenario test', ({ I, homeworkStep, createLeadPage }) => {
    homeworkStep.changeLeadStatusToDifferentName(newLeadStatus, primaryLeadStatus);
    homeworkStep.checkLeadStatusName(leadFirstName, leadLastName, primaryLeadStatus);
    createLeadPage.deleteLead();
});
