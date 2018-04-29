Feature: Slider Keyboard Support Left Arrow
  Background:
    Given I open the site "examples/slider/slider-1.html"

  Scenario: Decreases slider value one step
    Given I click on the element "#idRed"
    And I type "Tab"
    And I type "ArrowUp"
    And the element "#idRedValue" has a value of "1"
    And the element "#idRedValue" has a step value of "1"
    When I type "ArrowLeft"
    Then I expect the element "#idRedValue" has a value of "0"
