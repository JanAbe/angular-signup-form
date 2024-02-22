Feature: Registering an account

  Scenario: registering an account
    Given that the user visits the homepage
    And that the user enters valid data
    When the user clicks the submit button
    Then the success-page is shown
