Feature: Test Login Page

    Scenario:Check login with valid credentials

        Given User is on page
        When User use "<username>" and "<password>"
        And Click on login button
        Then This "<message>" is displayed

        Examples:
            | username   | password             | message                        |
            | tomsmith   | SuperSecretPassword! | You logged into a secure area! |
            | KokoBimbov | SuperSecretPassword! | Your username is invalid!      |
            | tomsmith   | 1234556              | Your password is invalid!      |