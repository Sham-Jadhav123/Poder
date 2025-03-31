# Feature: Login Poder

#   Background: launch website
#     Given Login page is Displayed

#   @valid_invalid_login @regression
#   Scenario Outline: Login poder website with Valid and Invalid credentials
#     Then enter email "<email>"
#     When click on next button
#     Then enter password "<password>"
#     Then click on sign in button
#     When click on yes button
#     Then I validate home page title

#     Examples:
#       | email                         | password            |
#       | nshah@poderjudicial.gob.do    | AYtq&RhK3A,42001    |
#       | nshah@poderjudicial123.gob.do | AYtq&RhK3A,42001    |
#       | nshah@poderjudicial.gob.do    | AYtq&RhK3A325342001 |
#       | _                             | AYtq&RhK3A,42001    |
#       | nshah@poderjudicial.gob.do    | _                   |


      
#   # @Invalid_email_and_valid_password @regression
#   # Scenario: Login poder website with Invalid username and valid password
#   #   Then enter email "nshah@poderjudicial123.gob.do"
#   #   When click on next button
#   #   Then enter password "AYtq&RhK3A,42001"
#   #   Then click on sign in button
#   #   When click on yes button
#   #   Then I validate home page title
#   # @valid_email_and_Invalid_password @regression
#   # Scenario: Login poder website with valid username and Invalid password
#   #   Then enter email "nshah@poderjudicia.gob.do"
#   #   When click on next button
#   #   Then enter password "AYtq&RhK3A,4200121"
#   #   Then click on sign in button
#   #   When click on yes button
#   #   Then I validate home page title
#   # @blank_email_and_valid_password @regression
#   # Scenario: Login poder website with balnk username and valid password
#   #   Then enter email " "
#   #   When click on next button
#   #   Then enter password "AYtq&RhK3A,42001"
#   #   Then click on sign in button
#   #   When click on yes button
#   #   Then I validate home page title
#   # @valid_email_and_blank_password @regression
#   # Scenario: Login poder website with valid username and blank password
#   #   Then enter email "nshah@poderjudicial.gob.do"
#   #   When click on next button
#   #   Then enter password " "
#   #   Then click on sign in button
#   #   When click on yes button
#   #   Then I validate home page title
