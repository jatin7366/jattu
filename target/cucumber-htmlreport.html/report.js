$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:cucum/cucum_01.feature");
formatter.feature({
  "name": "Login verification for TestMeApp",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Open TestMe Application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "He opens URL of application",
  "keyword": "Given "
});
formatter.step({
  "name": "He clicks on Sign up link",
  "keyword": "Then "
});
formatter.step({
  "name": "He enters the username \"\u003cUname\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "He enters the first name \"\u003cfname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "He enters the last name \"\u003clname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "He enters password \"\u003cPswrd\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "He enters confirm password \"\u003ccPswrd\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "He selects gender",
  "keyword": "Then "
});
formatter.step({
  "name": "He enters email address \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "He enter mobile number \"\u003cmnumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "He enters date of birth \"\u003cdofb\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "He enters his address \"\u003cadd\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "He selects the security question",
  "keyword": "Then "
});
formatter.step({
  "name": "He enters answer for the question \"\u003cans\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "He finally clicks on register link",
  "keyword": "And "
});
formatter.step({
  "name": "He again enters username for login \"\u003cUname\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "He enters password for login \"\u003cPswrd\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Finally click on login button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Uname",
        "",
        "fname",
        "",
        "lname",
        "",
        "Pswrd",
        "",
        "cPswrd",
        "",
        "email",
        "",
        "mnumber",
        "",
        "dofb",
        "",
        "add",
        "",
        "ans"
      ]
    },
    {
      "cells": [
        "himalaya441",
        "",
        "jatin",
        "",
        "Kedia",
        "",
        "himalaya441",
        "",
        "himalaya441",
        "",
        "jat@gmail.com",
        "",
        "7992274229",
        "",
        "05/04/1997",
        "",
        "Candor tech",
        "",
        "gurugram"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Open TestMe Application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "He opens URL of application",
  "keyword": "Given "
});
formatter.match({
  "location": "MyTC_02.he_opens_URL_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He clicks on Sign up link",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTC_02.he_clicks_on_Sign_up_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He enters the username \"himalaya441\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyTC_02.he_enters_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He enters the first name \"jatin\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTC_02.he_enters_the_first_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He enters the last name \"Kedia\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyTC_02.he_enters_the_last_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He enters password \"himalaya441\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTC_02.he_enters_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He enters confirm password \"himalaya441\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTC_02.he_enters_confirm_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He selects gender",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTC_02.he_selects_gender()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He enters email address \"jat@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTC_02.he_enters_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He enter mobile number \"7992274229\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTC_02.he_enter_mobile_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He enters date of birth \"05/04/1997\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTC_02.he_enters_date_of_birth(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He enters his address \"Candor tech\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTC_02.he_enters_his_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He selects the security question",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTC_02.he_selects_the_security_question()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He enters answer for the question \"gurugram\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTC_02.he_enters_answer_for_the_question(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He finally clicks on register link",
  "keyword": "And "
});
formatter.match({
  "location": "MyTC_02.he_finally_clicks_on_register_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He again enters username for login \"himalaya441\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyTC_02.he_again_enters_username_for_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He enters password for login \"himalaya441\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTC_02.he_enters_password_for_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Finally click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "MyTC_02.finally_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
});