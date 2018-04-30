# functional-keyboard-test

A boilerplate project for verifying that your site is accessible by testing keyboard support and, in some places, focus management.
Tests verify that a keyboard user's expectations are met when interacting with different areas of your site. For example,
when I open a modal, does the first actionable element in the modal have focus? Can I close it by pressing the Escape key and when I do, will focus go back to the element that had opened the modal in the first place? If focus is on a checkbox, if I press spacebar, will the checked status toggle?

Test expectations are based on the [W3C's WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/) and tests are run against the example pages that they provide.
# Motivation
**INT. LIVING ROOM - NIGHT**

*A popular video streaming service has just started offering the ability to stream HBO through a new video player they developed. Our exhausted programmer is champing at the bit to watch the premier of season 2 of Westworld.*

*Programmer launches video player on his laptop, plugs his laptop into his TV, and tucks the laptop out of the way to the side of the TV. The Westworld title sequence begins playing on the TV.*

PROGRAMMER:
> Yes! It's finally back. This calls for a celebratory drink! Let me just pause it real quick!

*Programmer reaches over and hits the spacebar on his laptop to pause the video, but it continues playing.*

PROGRAMMER:
> Hmmm, that doesn't seem to work. Whatever, I'll be real quick.

*Programmer runs to the fridge, grabs a beer and twists off the top while he catapults himself back onto the couch.*

PROGRAMMER
> Ugh, the intro is so long! Get to it already!

*Programmer hits the right arrow several times. Nothing happens.*

PROGRAMMER
> Oh wait, this is season 1. How do I switch seasons?

*Programmer tries to exit full screen by pressing the Escape key. Nothing happens.*

PROGRAMMER
> So there's no keyboard functionality?

*Programmer attempts to navigate to the close icon, using the trackpad on the laptop on the side of the TV but watching his pointer's progress on the TV screen in front of him. It's like watching someone try to trim the hair on the back of their head while looking in a mirror.*

We all have expectations about how we can use our keyboard to interact with websites and applications and when those expectations aren't met it's a bummer. Now imagine you didn't have a mouse or a trackpad or a touch screen. How do you use the site then?

If you build a website that can't be navigated with a keyboard, it's like opening a business with steps but no ramp. You've inadvertently barred a portion of the population from being able to use it and you may also be opening yourself up to a lawsuit.

There are a lot of accessibility testing tools out there, but it seems like most of them just verify your markup - do your image tags have alt attributes? Are you allowed to use that aria label on an element like this? It doesn't seem like there are many tools that are meant for testing functionality. Hence this repo.
# Credits
The file structure, the syntax for the step definitions, and some of the support functions were borrowed from W. Van Kuipers' repo, [cucumber-boilerplate](https://github.com/webdriverio/cucumber-boilerplate), which is an excellent resource if you're starting to convert your WebdriverIO tests to cucumber.