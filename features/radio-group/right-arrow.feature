Feature: Radio Group Keyboard Support Right Arrow
  Background:
    Given I open the site "examples/radio/radio-1/radio-1.html"

  Scenario: Moves focus to and checks the next radio button in the group
    Given I click on the element "div=Regular crust"
    And the element "div=Regular crust" is focused
    When I type "ArrowRight"
    Then I expect the element "div=Deep dish" is focused
    And I expect the element "div=Deep dish" is checked

  Scenario: If focus is on the last radio button, moves focus to and checks the first radio button in the group
    Given I click on the element "div=Thin crust"
    And the element "div=Thin crust" is focused
    When I type "ArrowRight"
    Then I expect the element "div=Regular crust" is focused
    And I expect the element "div=Regular crust" is checked