Feature: Login verification for TestMeApp

  Scenario Outline: Open TestMe Application
    Given He opens URL of application
    Then He clicks on Sign up link
    Given He enters the username "<Uname>"
    Then He enters the first name "<fname>"
    And He enters the last name "<lname>"
    Then He enters password "<Pswrd>"
    Then He enters confirm password "<cPswrd>"
    Then He selects gender
    Then He enters email address "<email>"
    Then He enter mobile number "<mnumber>"
    Then He enters date of birth "<dofb>"
    Then He enters his address "<add>"
    Then He selects the security question
    Then He enters answer for the question "<ans>"
    And He finally clicks on register link
    Given He again enters username for login "<Uname>"
    Then He enters password for login "<Pswrd>"
    And Finally click on login button

    Examples: 
      | Uname       |  | fname |  | lname |  | Pswrd       |  | cPswrd      |  | email         |  | mnumber    |  | dofb       |  | add         |  | ans      |
      | himalaya441 |  | jatin |  | Kedia |  | himalaya441|  | himalaya441 |  | jat@gmail.com |  | 7992274229 |  | 05/04/1997 |  | Candor tech |  | gurugram |
