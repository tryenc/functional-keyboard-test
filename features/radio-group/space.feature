Feature: Radio Group Keyboard Support Space
  Background:
    Given I open the site "examples/radio/radio-1/radio-1.html"

  Scenario: If the radio button with focus is not checked, changes the state to checked
    Given I click on the element with text "Thin crust"
    And I type "Tab"
    And the element with text "Pickup" is focused
    And the element with text "Pickup" is not checked
    When I type "Space"
    Then I expect the element with text "Pickup" is checked
