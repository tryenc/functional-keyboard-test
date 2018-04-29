Feature: Modal Keyboard Support Escape Key
  Background:
    Given I open the site "examples/dialog-modal/dialog.html"
    And I click on the element "button=Add Delivery Address"

  Scenario: Closes the modal
    Given the element "#dialog1" is visible
    When I type "Escape"
    Then I expect the element "#dialog1" is not visible
