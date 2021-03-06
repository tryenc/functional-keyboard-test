Feature: Carousel Pause
  Background:
    Given I open the site "https://www.w3.org/WAI/tutorials/carousels/working-example/"
    # Verify the slides are animating
    And I wait until the element "h4=Space Teddy production reaches all-time high" is visible
    And I wait for the event "transitionend"
    And the element "h4=Space Teddy production reaches all-time high" is not visible
    And the element "h4=New Space Teddy Announced!" is visible

  Scenario: When the stop button is clicked, the slides stop animating
    When I click on the element "button[data-action='stop']"
    # Wait for 6 seconds (there's 5 seconds between frame transitions)
    And I wait 6000 milliseconds
    Then I expect the element "h4=New Space Teddy Announced!" is visible

  Scenario: When the mouse hovers over a slide, the slides stop animating
    When I move my mouse to the element "h4=New Space Teddy Announced!"
    # Wait for 6 seconds (there's 5 seconds between frame transitions)
    And I wait 6000 milliseconds
    Then I expect the element "h4=New Space Teddy Announced!" is visible

  Scenario: When a slide has focus, the slides stop animating
    When I type "Tab" 7 times
    # Wait for 6 seconds (there's 5 seconds between frame transitions)
    And I wait 6000 milliseconds
    Then I expect the element "h4=New Space Teddy Announced!" is visible
