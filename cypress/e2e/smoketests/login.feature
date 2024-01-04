Feature: Verify Login functionality
    we are verifying login with valid and invalid tests

Background: Launch url
  Given User launch the application

    Scenario: Verify Login with Valid username and Valid Password
        When User enter the username as "Admin"
        And  User enter the password as "admin123"
        And  Clicks on the login button
        Then User should be navigated to dashbaord page


    Scenario: Verify Login with invalid username and Valid Password
       When User enter the username as "Admkjfhnuerin"
       And  User enter the password as "admin123"
       And  Clicks on the login button
       Then User should get error message

    Scenario: Verify Login with valid username and inalid Password
      
       When User enter the username as "Admin"
       And  User enter the password as "ferfjwelfj"
       And  Clicks on the login button
       Then User should get error message


    Scenario: Verify Login with invalid username and inalid Password
 
       When User enter the username as "Admieruhgfuhin"
       And  User enter the password as "ferfjwelfj"
       And  Clicks on the login button
       Then User should get error message

    Scenario Outline: Verify login nagative tests

        Given User launch the application
        When User enter the username as "<username>"
        And  User enter the password as "<password>"
        And  Clicks on the login button
        Then User should get error message

        Examples:
            | username  | password  |
            | Admin     | krehgifhn |
            | fgukeuhfu | admin123  |
            | fgukeuhfu | erghergf  |
