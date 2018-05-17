Feature: Checkbox Keyboard Support Space
  Background:
    Given I open the site "examples/checkbox/checkbox-1/checkbox-1.html"

  Scenario: Toggles the checkbox's checked status
    Given I click on the element "div=Lettuce"
    And the element "div=Lettuce" is checked
    When I type "Space"
    Then I expect the element "div=Lettuce" is not checked
    When I type "Space"
    Then I expect the element "div=Lettuce" is checked
