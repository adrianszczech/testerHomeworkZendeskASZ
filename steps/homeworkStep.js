const { I, loginSubdomainPage, loginAccountPage, createLeadPage, leadStatusPage } = inject();

module.exports = {

  logIntoZendeskSellWebApp(subDomainName, userEmail, userPassword) {
    loginSubdomainPage.goToSubdomainLoginPage();
    loginSubdomainPage.acceptToUseCookies();
    loginSubdomainPage.checkSubdomainPage();
    loginSubdomainPage.fillSubdomainName(subDomainName);
    loginSubdomainPage.clickSignInButton();

    loginAccountPage.checkAccountLoginPage();
    loginAccountPage.fillAccountInformations(userEmail, userPassword);
    loginAccountPage.clickSignInButton();
    loginAccountPage.checkIfSignedIn();
  },

  createNewLead(newLeadFirstName, newLeadLastName, newLeadCompanyName) {
    createLeadPage.clickAddButton();
    createLeadPage.checkAddMenu();
    createLeadPage.clickLeadButton();
    createLeadPage.checkLeadAddForm();
    createLeadPage.fillLeadInformations(newLeadFirstName, newLeadLastName, newLeadCompanyName);
    createLeadPage.clickSaveAndViewLeadButton();
  },

  changeLeadStatusToDifferentName(currentLeadStatus, newLeadStatus) {
    leadStatusPage.clickSettings();
    leadStatusPage.checkSettingsPage();
    leadStatusPage.clickCustomizeLeads();
    leadStatusPage.clickLeadStatus();
    leadStatusPage.changeStatusName(currentLeadStatus, newLeadStatus)
  },

  checkLeadStatusName(leadFirstName, leadLastName, leadStatusName) {
    leadStatusPage.clickLeadsOnTopbar();
    leadStatusPage.checkLeadsPage();
    leadStatusPage.filterByLeadName(leadLastName);
    leadStatusPage.goToLead(leadFirstName, leadLastName);
    leadStatusPage.checkLeadStatus(leadStatusName);
  }

}
