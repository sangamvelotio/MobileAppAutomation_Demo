import { assert } from 'chai';
import homePage from '../pageobjects/homepage'
import loginPage from '../pageobjects/loginpage'
import formPage from '../pageobjects/formpage'
import allureReporter from '@wdio/allure-reporter'


describe('WDIO Demo App',function(){


    it('Form Test case',function(){
        
        let text="Hi Guys, How is it going"
        homePage.formsBtn.waitForDisplayed();
        homePage.formsBtn.click();
        formPage.FormComponents.waitForDisplayed();
        assert.isTrue(formPage.inputFieldText.isDisplayed());
        formPage.inputField.setValue(text);
        assert.isTrue(formPage.youHaveTyped.isDisplayed());
        assert.equal(formPage.inputTextResult.getText(),text);
        formPage.toggle.click();
        assert.equal(formPage.switchText.getText(),"Click to turn the switch OFF");
        formPage.dropDown.click();
        formPage.webdriverIAwesome.waitForDisplayed();
        formPage.appiumAwesome.click();
        assert.isTrue(formPage.inActiveBtn.isDisplayed());
        formPage.activeBtn.click();

        formPage.okBtn.waitForDisplayed();
        assert.isTrue(formPage.alertMessage.isDisplayed());
        formPage.okBtn.click();
        assert.isFalse(formPage.okBtn.isDisplayed());

    });


})