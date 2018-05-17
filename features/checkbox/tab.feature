Feature: Checkbox Keyboard Support Tab
  Background:
    Given I open the site "examples/checkbox/checkbox-1/checkbox-1.html"

  Scenario: Moves focus to the checkbox
    Given I type "Tab" 6 times
    And the element "a=Checkbox (Mixed-State)" is focused
    When I type "Tab"
    Then I expect the element "div=Lettuce" is focused
