Feature: Modal Keyboard Support Tab
  Background:
    Given I open the site "examples/dialog-modal/dialog.html"
    And I click on the element "button=Add Delivery Address"

  Scenario: Moves focus to next focusable element inside the dialog
    Given I click on the element "#idRed"
    And I type "Tab"
    And I type "End"
    And the element "#idRedValue" has a value of "255"
    And the element "#idRedValue" has a step value of "1"
    When I type "PageDown"
    Then I expect the element "#idRedValue" has a value less than "254"

#dialog1 > div.dialog_form > div:nth-child(1) > label > input