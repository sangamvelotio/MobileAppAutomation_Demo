class LoginPage{

    get loginSignupform(){
        return $('//android.widget.TextView[@text="Login / Sign up Form"]');
    }

    get email(){
        return $('~input-email');
    }

    get password(){
        return $('~input-password');
    }

    get biometricText(){
        return $('//android.widget.TextView[@text="When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login."]');
    }

    get loginBtn(){
        return $('//android.widget.TextView[@text="LOGIN"]');
    }

    get successText(){
        return $('//android.widget.TextView[@text="Success"]');
    }

    get alertText(){
        return $('//android.widget.TextView[@resource-id="android:id/message"]');
    }

    get okBtn(){
        return $('//android.widget.Button[@text="OK"]');
    }


}

export default new LoginPage();