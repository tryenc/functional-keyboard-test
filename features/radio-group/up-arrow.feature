Feature: Radio Group Keyboard Support Up Arrow
  Background:
    Given I open the site "examples/radio/radio-1/radio-1.html"

  Scenario: Moves focus to and checks the previous radio button in the group
    Given I click on the element "div=Deep dish"
    And the element "div=Deep dish" is focused
    And the element "div=Deep dish" is checked
    When I type "ArrowUp"
    Then I expect the element "div=Regular crust" is focused
    And I expect the element "div=Regular crust" is checked

  Scenario: If focus is on the first radio button, moves focus to and checks the last radio button in the group
    Given I click on the element "div=Regular crust"
    And the element "div=Regular crust" is focused
    When I type "ArrowUp"
    Then I expect the element "div=Thin crust" is focused
    And I expect the element "div=Thin crust" is checked