Feature: Radio Group Keyboard Support Down Arrow
  Background:
    Given I open the site "examples/radio/radio-1/radio-1.html"

  Scenario: Moves focus to and checks the next radio button in the group
    Given I click on the element with text "Regular crust"
    And the element with text "Regular crust" is focused
    When I type "ArrowDown"
    Then I expect the element with text "Deep dish" is focused
    And I expect the element "div=Deep dish" is checked

  Scenario: If focus is on the last radio button, moves focus to and checks the first radio button in the group
    Given I click on the element with text "Thin crust"
    And the element with text "Thin crust" is focused
    When I type "ArrowDown"
    Then I expect the element with text "Regular crust" is focused
    And I expect the element "div=Regular crust" is checked