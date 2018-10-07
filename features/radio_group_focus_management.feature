Feature: Radio Group Focus Management
  Background:
    Given I open the site "examples/radio/radio-1/radio-1.html"

  Scenario: Moves focus to the checked radio button in the group
    Given I click on the second radio button in the radio group "#rg1"
    And the second radio button in the radio group "#rg1" is checked
    When I type "Tab" with the modifier "Shift"
    And the second radio button in the radio group "#rg1" is not focused
    And I type "Tab"
    Then I expect the second radio button in the radio group "#rg1" is focused

  Scenario: If a radio button is not checked, moves focus to the first radio button in the group
    Given the radio buttons in the radio group "#rg1" are not checked
    And I right click on the first radio button in the radio group "#rg1"
    And the first radio button in the radio group "#rg1" is not checked
    When I type "Tab" with the modifier "Shift"
    And the first radio button in the radio group "#rg1" is not focused
    And I type "Tab"
    Then I expect the first radio button in the radio group "#rg1" is focused
