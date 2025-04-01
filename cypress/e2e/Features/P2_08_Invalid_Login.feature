Feature: Invalid Login
    Scenario: Login with Invalid Username
        

        Given Launch the URL
        When Enter Invalid  Username
        When Tap on Next button
        Then Verify Error Message
   

    Scenario: Login with Valid Username and Invalid Password
       

        Given Launch the URL
        When Enter Username
        When Tap on Next button
        When Enter Invalid password of user
        When Tap on SignIn button
        Then Verify invalid password error msg

       