const { I } = inject();

const WAIT_TIME_IN_SEC = 10;

module.exports = {

  goToSubdomainLoginPage() {
    I.waitForElement('.login', WAIT_TIME_IN_SEC);
    I.see('Sign in to your account');
    I.see('Sign in with Zendesk');
    I.click('Sign in with Zendesk');
  },

  acceptToUseCookies() {
    I.waitForElement('#onetrust-policy-text', WAIT_TIME_IN_SEC);
    I.click('#onetrust-accept-btn-handler');
  },

  checkSubdomainPage() {
    I.waitForElement('.p-login', WAIT_TIME_IN_SEC);
    I.see('Sign in to Zendesk');
    I.see('Your Zendesk subdomain');
  },

  fillSubdomainName(subdomainName) {
    I.waitForElement('//*[@id="account[subdomain]"]', WAIT_TIME_IN_SEC);
    I.fillField('//*[@id="account[subdomain]"]', subdomainName);
  },

  clickSignInButton() {
    I.see('Sign in', '[type="submit"]');
    I.click('Sign in', '[type="submit"]');
  }
  
}
