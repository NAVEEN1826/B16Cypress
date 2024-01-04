

class Addemployeepage{

   addemployeesubmenu(){

    return 'Add Employee'
   } 

   employeefirstname(){

    return 'input[name="firstName"]'
   }

   employeelastname(){

    return 'input[name="lastName"]'
   }

   submitbutton(){

    return 'button[type="submit"]'

   }

}

 const addemployee = new Addemployeepage()

 export default addemployee 

 
 