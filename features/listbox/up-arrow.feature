Feature: Listbox Keyboard Support Up Arrow
  Background:
    Given I open the site "examples/listbox/listbox-scrollable.html"

  Scenario: Moves focus to and selects the previous option
    Given I click on the element "li=Plutonium"
    And the element "li=Plutonium" is selected
    When I type "ArrowUp"
    Then I expect the element "li=Neptunium" is focused
    And I expect the element "li=Neptunium" is selected
