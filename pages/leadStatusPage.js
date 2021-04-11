const { I } = inject();

const WAIT_TIME_IN_SEC = 10;

module.exports = {

  clickSettings() {
    I.seeElement('//*[@id="nav-item-settings"]', WAIT_TIME_IN_SEC);
    I.seeElement('//*[@id="nav-settings"]', WAIT_TIME_IN_SEC);
    I.click('//*[@id="nav-settings"]');
    I.waitForText('Settings', WAIT_TIME_IN_SEC, '//*[@id="title-bar"]');
  },

  checkSettingsPage() {
    I.see('Settings', '//*[@id="title-bar"]');
    I.see('Customize','.nav-header');
    I.see('Leads', ['[class="leads"]']);
  },

  clickCustomizeLeads() {
    I.click('Leads', ['[class="leads"]']);
    I.waitForElement('//*[@id="main-container"]', WAIT_TIME_IN_SEC);
  },

  clickLeadStatus() {
    I.waitForElement('//*[@id="leads-settings-tabs"]', WAIT_TIME_IN_SEC);
    I.click('Lead Status', '//*[@id="leads-settings-tabs"]');
    I.waitForElement('[class="tab-pane lead-status active"]', WAIT_TIME_IN_SEC);
  },

  changeStatusName(currentLeadStatus, newLeadStatus) {   
    I.click('//h4[text()="'+currentLeadStatus+'"]//following::span//button[text()="Edit"]');
    I.waitForText('Edit Lead Status', WAIT_TIME_IN_SEC);
    I.fillField('[data-current-value="'+currentLeadStatus+'"]', newLeadStatus);
    I.click('//*[@value="'+currentLeadStatus+'"]//following::button[text()="Save"]');
    I.waitForText(newLeadStatus, WAIT_TIME_IN_SEC);
  },

  clickLeadsOnTopbar() {
    I.seeElement('//*[@id="nav-item-leads"]', WAIT_TIME_IN_SEC);
    I.seeElement('//*[@id="nav-working-leads"]', WAIT_TIME_IN_SEC);
    I.click('//*[@id="nav-working-leads"]');
    I.waitForText('Leads', WAIT_TIME_IN_SEC);
  },

  checkLeadsPage() {
    I.see('Leads');
    I.seeElement('[placeholder="Type to filter by lead name"]');
    I.seeElement('[data-column="display_name"]');
    I.seeElement('[data-column="company_name"]');
  },

  filterByLeadName(leadName) {
    I.seeElement('[placeholder="Type to filter by lead name"]');
    I.fillField('[placeholder="Type to filter by lead name"]', leadName);
  },

  goToLead(leadFirstName, leadLastName) {
    I.waitForElement('//span[text()="'+leadFirstName+'"]//strong[text()="'+leadLastName+'"]', WAIT_TIME_IN_SEC);
    I.click('//span[text()="'+leadFirstName+'"]//strong[text()="'+leadLastName+'"]');
  },

  checkLeadStatus(leadStatusName) {
    I.waitForText('Leads', WAIT_TIME_IN_SEC, '[class="subtitle"]');
    I.refreshPage(); // lead status does not change until the page is refreshed, without refreshing page the test will fail
    I.waitForElement('.lead-status', WAIT_TIME_IN_SEC);
    I.see(leadStatusName, '.lead-status');
  }

}
