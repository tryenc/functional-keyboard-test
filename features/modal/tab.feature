Feature: Modal Keyboard Support Tab
  Background:
    Given I open the site "examples/dialog-modal/dialog.html"
    And I click on the element "button=Add Delivery Address"

  Scenario: Moves focus to next focusable element inside the dialog
    Given the element "#dialog1 > div.dialog_form > div:nth-child(1) > label > input" is focused
    When I type "Tab"
    Then I expect the element "#dialog1 > div.dialog_form > div:nth-child(2) > label > input" is focused

  Scenario: When focus is on the last focusable element in the dialog, moves focus to the first focusable element in the dialog
    Given I click on the element "#special_instructions"
    And I type "Tab" 3 times
    And the element "button=Cancel" is focused
    When I type "Tab"
    Then I expect the element "#dialog1 > div.dialog_form > div:nth-child(1) > label > input" is focused