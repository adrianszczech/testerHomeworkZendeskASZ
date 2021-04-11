const { I } = inject();

const WAIT_TIME_IN_SEC = 10;

module.exports = {

  checkAccountLoginPage() {
    I.switchTo('iframe');
    I.waitForElement('#login-form', WAIT_TIME_IN_SEC);
    I.seeElement('#user_email');
    I.seeElement('#user_password');
  },

  fillAccountInformations(userEmail, userPassword) {
    I.fillField('#user_email', userEmail);
    I.fillField('#user_password', userPassword);
  },

  clickSignInButton() {
    I.seeElement('//*[@id="sign-in-submit-button"]');
    I.click('//*[@id="sign-in-submit-button"]');
  },

  checkIfSignedIn() {
    I.seeInCurrentUrl('/dashboards/main');
  }
  
}
