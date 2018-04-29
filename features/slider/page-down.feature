Feature: Slider Keyboard Support Page Down (Optional)
  Background:
    Given I open the site "examples/slider/slider-1.html"

  Scenario: Decrement the slider by an amount larger than the step change made by Down Arrow
    Given I click on the element "#idRed"
    And I type "Tab"
    And I type "End"
    And the element "#idRedValue" has a value of "255"
    And the element "#idRedValue" has a step value of "1"
    When I type "PageDown"
    Then I expect the element "#idRedValue" has a value less than "254"
