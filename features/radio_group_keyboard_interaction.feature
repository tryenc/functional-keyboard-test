Feature: Radio Group Keyboard Interaction
  Keyboard interaction specifications adapted by those defined by W3C here:
  https://www.w3.org/TR/wai-aria-practices-1.1/#radiobutton

  Background:
    Given I open the site "examples/radio/radio-1/radio-1.html"

  Scenario: Space: checks the focused radio button if it is not already checked.
    Given I right click on the first radio button in the radio group "#rg1"
    And the first radio button in the radio group "#rg1" is focused
    And the first radio button in the radio group "#rg1" is not checked
    When I type "Space"
    Then I expect the first radio button in the radio group "#rg1" is checked

  Scenario Outline: Right Arrow and Down Arrow: move focus to the next radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the last button, focus moves to the first button.
    Given I click on the <button with focus before> in the radio group "#rg1"
    And the <button with focus before> in the radio group "#rg1" is focused
    And the <button with focus before> in the radio group "#rg1" is checked
    When I type "<Right Arrow or Down Arrow>"
    Then I expect the <button with focus after> in the radio group "#rg1" is focused
    And I expect the <button with focus before> in the radio group "#rg1" is not checked
    And I expect the <button with focus after> in the radio group "#rg1" is checked

    Examples: When focus is on any button except for the last one
      | button with focus before | Right Arrow or Down Arrow | button with focus after |
      | first radio button       | ArrowRight                | second radio button     |
      | second radio button      | ArrowRight                | last radio button       |
      | first radio button       | ArrowDown                 | second radio button     |
      | second radio button      | ArrowDown                 | last radio button       |

    Examples: When focus is on the last button
      | button with focus before | Right Arrow or Down Arrow | button with focus after |
      | last radio button        | ArrowRight                | first radio button      |
      | last radio button        | ArrowDown                 | first radio button      |

  Scenario Outline: Left Arrow and Up Arrow: move focus to the previous radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the first button, focus moves to the last button.
    Given I click on the <button with focus before> in the radio group "#rg1"
    And the <button with focus before> in the radio group "#rg1" is focused
    And the <button with focus before> in the radio group "#rg1" is checked
    When I type "<Left Arrow or Up Arrow>"
    Then I expect the <button with focus after> in the radio group "#rg1" is focused
    And I expect the <button with focus before> in the radio group "#rg1" is not checked
    And I expect the <button with focus after> in the radio group "#rg1" is checked

    Examples: When focus is on any button except for the first one
      | button with focus before  | Left Arrow or Up Arrow | button with focus after |
      | second radio button       | ArrowLeft              | first radio button      |
      | last radio button         | ArrowLeft              | second radio button     |
      | second radio button       | ArrowUp                | first radio button      |
      | last radio button         | ArrowUp                | second radio button     |

    Examples: When focus is on the first button
      | button with focus before | Left Arrow or Up Arrow | button with focus after |
      | first radio button       | ArrowLeft              | last radio button       |
      | first radio button       | ArrowUp                | last radio button       |
