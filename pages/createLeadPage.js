const { I } = inject();

const WAIT_TIME_IN_SEC = 10;

module.exports = {

  clickAddButton() {
    I.waitForText('Add', WAIT_TIME_IN_SEC, '//*[@id="global-add"]');
    I.click('//*[@id="global-add"]');
    I.waitForElement('[data-role="menu"]', WAIT_TIME_IN_SEC);
  },

  checkAddMenu() {
    I.seeElement('[data-role="menu-item"]');
    I.see('Lead', '[data-role="menu-item"]');
  },

  clickLeadButton() {
    I.click('Lead', '[data-role="menu-item"]');
    I.waitForText('Add Lead', WAIT_TIME_IN_SEC);
  },

  checkLeadAddForm() {
    I.seeElement('[placeholder="First Name"]');
    I.seeElement('[placeholder="Last Name"]');
    I.seeElement('[placeholder="Add company to search by name..."]');
    I.seeElement('[data-action="save-and-visit"]');
  },

  fillLeadInformations(leadFirstName, leadLastName, leadCompany) {
    I.fillField('[placeholder="First Name"]', leadFirstName);
    I.fillField('[placeholder="Last Name"]', leadLastName);
    I.fillField('[placeholder="Add company to search by name..."]', leadCompany);
  },

  clickSaveAndViewLeadButton() {
    I.click('[data-action="save-and-visit"]');
    I.waitForText('Leads', WAIT_TIME_IN_SEC, '[class="subtitle"]');
  },

  deleteLead() {
    I.click('[class="btn detail-edit"]');
    I.waitForText('Edit Lead', WAIT_TIME_IN_SEC);
    I.seeElement('[placeholder="First Name"]');
    I.seeElement('[placeholder="Last Name"]');
    I.seeElement('[placeholder="Add company to search by name..."]');
    I.seeElement('[data-action="lead-delete-link"]');
    I.click('[data-action="lead-delete-link"]');
    I.waitForText('Delete Lead', WAIT_TIME_IN_SEC);
    I.click('._3Jh--DeleteConfirmationModal--checkbox');
    I.click('[data-action="delete-confirmation-button"]');
  }

}
