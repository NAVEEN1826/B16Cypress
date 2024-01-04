class loginpage{

    orangrHRMLogo(){

        return 'img[alt="company-branding"]'
    }


    usernameInput(){

        return 'input[placeholder="Username"]'
    }


    passwordInput(){

        return 'input[placeholder="Password"]'
    }

    loginbutton(){

        return 'button[type="submit"]'
    }

}

    
   const login = new loginpage()

   export default login

   
   