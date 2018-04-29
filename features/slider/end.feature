Feature: Slider Keyboard Support End Button
  Background:
    Given I open the site "examples/slider/slider-1.html"

  Scenario: Sets slider to its maximum value
    Given I click on the element "#idRed"
    And I type "Tab"
    When I type "End"
    Then I expect the element "#idRedValue" is set to its maximum value
