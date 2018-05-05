Feature: Carousel Focus Management
  Background:
    Given I open the site "https://www.w3.org/WAI/tutorials/carousels/working-example/"

  Scenario: When focus is manually moved to a slide (in other words, the user has tabbed to the slide), the first actionable element recieves focus
    When I click on the element "button.btn-next"
    # Wait for the slide to complete its transition
    And I wait for the event "transitionend"
    # Moves focus to the Previous button
    And I type "Tab" with the modifier "Shift"
    And I type "Tab" with the modifier "Shift"
    Then I expect the element "=Everything about the new model" is focused
    And I expect the element "#c > ul:nth-child(1) > li:nth-child(2)" is not focused

  Scenario: When focus is automatically moved to a slide via a lentil, the entire slide recieves focus
    # Lentil for slide 2
    When I click on the element "button[data-slide='1']"
    # Wait for the slide to complete its transition
    And I wait for the event "transitionend"
    Then I expect the element "#c > ul:nth-child(1) > li:nth-child(2)" is focused
    And I expect the element "=Everything about the new model" is not focused
