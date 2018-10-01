Feature: Radio Group Keyboard Interaction
  Keyboard interaction specifications adapted by those defined by W3C here:
  https://www.w3.org/TR/wai-aria-practices-1.1/#radiobutton

  Background:
    Given I open the site "examples/radio/radio-1/radio-1.html"

  Scenario: Space: checks the focused radio button if it is not already checked
    Given I right click on the element "div=Regular crust"
    And the element "div=Regular crust" is focused
    And the element "div=Regular crust" is not checked
    When I type "Space"
    Then I expect the element "div=Regular crust" is checked

  Scenario Outline: Right Arrow and Down Arrow: move focus to the next radio button in the group, uncheck the previously focused button, and check the newly focused button.
    Given I click on the first radio button in the radio group "#rg1"
    And the first radio button in the radio group "#rg1" is focused
    And the first radio button in the radio group "#rg1" is checked
    When I type "<key>"
    Then I expect the second radio button in the radio group "#rg1" is focused
    And I expect the first radio button in the radio group "#rg1" is not checked
    And I expect the second radio button in the radio group "#rg1" is checked

    Examples:
      | key        |
      | ArrowRight |
      | ArrowDown  |

  Scenario Outline: Right Arrow and Down Arrow: if focus is on the last button in the group, focus moves to the first button in the group, uncheck the previously focused button, and check the newly focused button.
    Given I click on the last radio button in the radio group "#rg1"
    And the last radio button in the radio group "#rg1" is focused
    And the last radio button in the radio group "#rg1" is checked
    When I type "<key>"
    Then I expect the first radio button in the radio group "#rg1" is focused
    And I expect the last radio button in the radio group "#rg1" is not checked
    And I expect the first radio button in the radio group "#rg1" is checked

    Examples:
      | key        |
      | ArrowRight |
      | ArrowDown  |

  Scenario Outline: Left Arrow and Up Arrow: move focus to the previous radio button in the group, uncheck the previously focused button, and check the newly focused button.
    Given I click on the element "div=Deep dish"
    And the element "div=Deep dish" is focused
    And the element "div=Deep dish" is checked
    When I type "<key>"
    Then I expect the first radio button in the radio group "#rg1" is focused
    And I expect the element "div=Deep dish" is not checked
    And I expect the first radio button in the radio group "#rg1" is checked

    Examples:
      | key       |
      | ArrowLeft |
      | ArrowUp   |

  Scenario Outline: Left Arrow and Up Arrow: if focus is on the first button in the group, focus moves to the last button in the group, uncheck the previously focused button, and check the newly focused button.
    Given I click on the first radio button in the radio group "#rg1"
    And the first radio button in the radio group "#rg1" is focused
    And the first radio button in the radio group "#rg1" is checked
    When I type "<key>"
    Then I expect the last radio button in the radio group "#rg1" is focused
    And I expect the first radio button in the radio group "#rg1" is not checked
    And I expect the last radio button in the radio group "#rg1" is checked

    Examples:
      | key       |
      | ArrowLeft |
      | ArrowUp   |