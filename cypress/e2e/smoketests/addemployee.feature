Feature: Verify Add employee functionalities

  adding employees, verifying mandatory detials


  Scenario Outline: Verify add employee with Valid details

    Given User login as admin
    And  User clicks on the PIM module
    And  User clicks on the Add employee submenu
    And  User enter firstname as "<firstname>" and lastname as "<lastname>"
    And User clicks on the save button
    Then User should get successfully added message

    Examples:
      | firstname | lastname |
      | Raju      | G        |
      | Fareedha  | M        |
      | Madan     | S        |
      | Manjula   | S        |
