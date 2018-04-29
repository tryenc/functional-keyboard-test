Feature: Modal Focus Management
  Background:
    Given I open the site "examples/dialog-modal/dialog.html"

  Scenario: On open, focus is set on the first interactive element in the modal
    Given the element "#dialog1 > div.dialog_form > div:nth-child(1) > label > input" is not focused
    When I click on the element "button=Add Delivery Address"
    Then I expect the element "#dialog1 > div.dialog_form > div:nth-child(1) > label > input" is focused

  Scenario: On close, focus is set on the element which opened the modal
    Given I click on the element "button=Add Delivery Address"
    And the element "button=Add Delivery Address" is not focused
    When I click on the element "button=Cancel"
    Then I expect the element "button=Add Delivery Address" is focused

  # https://www.w3.org/TR/wai-aria-practices-1.1/#h-note-7
  Scenario: If the first interactive element is not visible, on open, focus is set on the first paragraph
    Given I click on the element "button=Add Delivery Address"
    When I click on the element "button=Verify Address"
    Then I expect the element "#dialog2_para1" is focused

  Scenario: If the first paragraph was focused on open because the first interactive element was not visible, on focus change, focus can not be set on the first paragraph again
    Given I click on the element "button=Add Delivery Address"
    And I click on the element "button=Verify Address"
    And the element "#dialog2_para1" is focused
    When I type "Tab"
    And I type "Tab" with the modifier "Shift"
    Then I expect the element "#dialog2_para1" is not focused
    And I expect the element "button=Close" is focused
