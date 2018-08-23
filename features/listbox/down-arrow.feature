Feature: Listbox Keyboard Support Down Arrow
  Background:
    Given I open the site "examples/listbox/listbox-scrollable.html"

  Scenario: Moves focus to and selects the next option
    Given I click on the element "li=Neptunium"
    And the element "li=Neptunium" is selected
    When I type "ArrowDown"
    Then I expect the element "li=Plutonium" is focused
    And I expect the element "li=Plutonium" is selected
