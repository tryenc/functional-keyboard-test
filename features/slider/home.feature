Feature: Slider Keyboard Support Home Button
  Background:
    Given I open the site "examples/slider/slider-1.html"

  Scenario: Sets slider to its minimum value
    Given I click on the element "#idRed"
    And I type "Tab"
    And I type "End"
    And the element "#idRedValue" is set to its maximum value
    When I type "Home"
    Then I expect the element "#idRedValue" is set to its minimum value
