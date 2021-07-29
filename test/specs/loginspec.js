import { assert } from 'chai';
import homePage from '../pageobjects/homepage'
import loginPage from '../pageobjects/loginpage'
import allureReporter from '@wdio/allure-reporter'

let email="Test@gmail.com";
let password="Test@123";
describe('WDIO Demo App',function(){

it.only('Login Test case',function(){
    
    homePage.loginBtn.waitForDisplayed();
    homePage.loginBtn.click();
    loginPage.loginBtn.waitForDisplayed();
    assert.isTrue(loginPage.loginSignupform.isDisplayed());
    loginPage.email.setValue(email);
    allureReporter.addStep("Email is:"+email);
    loginPage.password.setValue(password);
    allureReporter.addStep("Password is:"+password);
    assert.equal(loginPage.biometricText.getText(),"When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login.");
    loginPage.loginBtn.click();
    allureReporter.addStep("Login is successful");
    loginPage.successText.waitForDisplayed();
    assert.equal(loginPage.alertText.getText(),'You are logged in!');
    allureReporter.addStep("Alert text is:"+loginPage.alertText.getText());
    loginPage.okBtn.click();
    
});

})