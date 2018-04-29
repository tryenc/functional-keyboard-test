Feature: Slider Keyboard Support Right Arrow
  Background:
    Given I open the site "examples/slider/slider-1.html"

  Scenario: Increases slider value one step
    Given I click on the element "#idRed"
    And I type "Tab"
    And the element "#idRedValue" has a value of "0"
    And the element "#idRedValue" has a step value of "1"
    When I type "ArrowRight"
    Then I expect the element "#idRedValue" has a value of "1"
