Feature: Slider Keyboard Support Page Up (Optional)
  Background:
    Given I open the site "examples/slider/slider-1.html"

  Scenario: Increment the slider by an amount larger than the step change made by Up Arrow
    Given I click on the element "#idRed"
    And I type "Tab"
    And the element "#idRedValue" has a value of "0"
    And the element "#idRedValue" has a step value of "1"
    When I type "PageUp"
    Then I expect the element "#idRedValue" has a value greater than "1"
