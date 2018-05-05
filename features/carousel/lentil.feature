Feature: Carousel Lentils
  Background:
    Given I open the site "https://www.w3.org/WAI/tutorials/carousels/working-example/"

  Scenario: When the next button triggers a new slide to display, the lentil that corresponds to that slide has hidden text indicating that it's the current slide
    Given the element "button[data-slide='1']" does not contain the hidden text "Current Item"
    # Lentil for slide 2
    When I click on the element "button.btn-next"
    # Wait for the slide to complete its transition
    And I wait for the event "transitionend"
    And I wait 1 second
    Then I expect the element "button[data-slide='1']" does contain the hidden text "Current Item"

  Scenario: When a lentil triggers a new slide to display, the lentil that corresponds to that slide has hidden text indicating that it's the current slide
    Given the element "button[data-slide='1']" does not contain the hidden text "Current Item"
    # Lentil for slide 2
    When I click on the element "button[data-slide='1']"
    # Wait for the slide to complete its transition
    And I wait for the event "transitionend"
    And I wait 1 second
    Then I expect the element "button[data-slide='1']" does contain the hidden text "Current Item"
