class FormPage{

    get FormComponents(){
        return $('//android.widget.TextView[@text="Form components"]');
    }

    get inputFieldText(){
        return $('//android.widget.TextView[@text="Input field:"]');
    }

    get inputField(){
        return $('~text-input');
    }

    get youHaveTyped(){
        return $('//android.widget.TextView[@text="You have typed:"]');
    }

    get inputTextResult(){
        return $('~input-text-result');
    }

    get toggle(){
        return $('android.widget.Switch');
    }

    get switchText(){
        return $('~switch-text');
    }

    get dropDown(){
        return $('~Dropdown');
    }

    get webdriverIAwesome(){
        return $('//android.widget.CheckedTextView[@text="webdriver.io is awesome"]');
    }

    get appiumAwesome(){
        return $('//android.widget.CheckedTextView[@text="Appium is awesome"]');
    }

    get appIsAwesome(){
        return $('//android.widget.CheckedTextView[@text="This app is awesome"]');
    }

    get activeBtn(){
        return $('~button-Active');
    }

    get inActiveBtn(){
        return $('~button-Inactive');
    }

    get alertMessage(){
        return $('//android.widget.TextView[@text="This button is active"]');
    }

    get okBtn(){
        return $('//android.widget.Button[@text="OK"]');
    }

    get cancelBtn(){
        return $('//android.widget.Button[@text="CANCEL"]');
    }


}
export default new FormPage();