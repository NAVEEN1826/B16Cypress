class jobtitlepage{

    jobsubmenu = "job"

    jobtitlesoption = "jobtitle"

    addbutton = 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]'

    jobtitleinput(){

        return'#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input'
    }

    jobdescriptioninput(){

        return 'textarea[placeholder="Type description here"]'
    }

    savebutton(){

        return'button[type="submit"]'
    }

    successmessage(){
     
     return "Successfully Saved"
    }

    selectMonth(monthname){

        cy.get('select[name*="DOB_Month"]').select(monthname) 
    
    }
}

   const jobtitle  = new jobtitlepage()

   export default jobtitle