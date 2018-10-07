Feature: Listbox Keyboard Keyboard Interaction
  Keyboard interaction specifications adapted by those defined by W3C here:
  https://www.w3.org/TR/wai-aria-practices-1.1/#listbox

  Background:
    Given I open the site "examples/listbox/listbox-scrollable.html"

  Scenario: Down Arrow: Moves focus to and selects the next option.
    Given I click on the first option in the listbox "#ss_elem_list"
    And the first option in the listbox "#ss_elem_list" is selected
    When I type "ArrowDown"
    Then I expect the second option in the listbox "#ss_elem_list" is focused
    And I expect the second option in the listbox "#ss_elem_list" is selected

  Scenario: Up Arrow: Moves focus to and selects the previous option.
    Given I click on the second option in the listbox "#ss_elem_list"
    And the second option in the listbox "#ss_elem_list" is selected
    When I type "ArrowUp"
    Then I expect the first option in the listbox "#ss_elem_list" is focused
    And I expect the first option in the listbox "#ss_elem_list" is selected

  Scenario: End (Optional): Moves focus to and selects the last option.
    Given I click on the first option in the listbox "#ss_elem_list"
    And the first option in the listbox "#ss_elem_list" is selected
    When I type "End"
    Then I expect the last option in the listbox "#ss_elem_list" is focused
    And I expect the last option in the listbox "#ss_elem_list" is selected

  Scenario: Home (Optional): Moves focus to and selects the first option.
    Given I click on the third option in the listbox "#ss_elem_list"
    And the third option in the listbox "#ss_elem_list" is selected
    When I type "Home"
    Then I expect the first option in the listbox "#ss_elem_list" is focused
    And I expect the first option in the listbox "#ss_elem_list" is selected