Feature: Listbox Keyboard Support End Button
  Background:
    Given I open the site "examples/listbox/listbox-scrollable.html"

  Scenario: Moves focus to and selects the last option
    Given I click on the element "li=Neptunium"
    And the element "li=Neptunium" is selected
    When I type "End"
    Then I expect the element "li=Oganesson" is focused
    And I expect the element "li=Oganesson" is selected
