Feature: Radio Group Focus Management
  Background:
    Given I open the site "examples/radio/radio-1/radio-1.html"

  Scenario: Moves focus to the checked radio button in the group
    Given I click on the element "div=Home Delivery"
    And the element "div=Home Delivery" is checked
    And I click on the element "div=Thin crust"
    When I type "Tab"
    Then I expect the element "div=Home Delivery" is focused

  Scenario: If a radio button is not checked, moves focus to the first radio button in the group
    Given I click on the element "div=Thin crust"
    And the element "div=Pickup" is not checked
    And the element "div=Home Delivery" is not checked
    And the element "div=Dine in" is not checked
    When I type "Tab"
    Then I expect the element "div=Pickup" is focused
