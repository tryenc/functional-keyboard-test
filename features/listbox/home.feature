Feature: Listbox Keyboard Support Home Button
  Background:
    Given I open the site "examples/listbox/listbox-scrollable.html"

  Scenario: Moves focus to and selects the first option
    Given I click on the element "li=Einsteinium"
    And the element "li=Einsteinium" is selected
    When I type "Home"
    Then I expect the element "li=Neptunium" is focused
    And I expect the element "li=Neptunium" is selected
