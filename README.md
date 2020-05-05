# Pomodoro Timer Overview

This application is intended to be used as a productivity tool by the user where they work for 25 minutes and then have a 5 minute break.

Issues:

An issue was found where a user could click on the start / resume button multiple times to speed up the timer, which is counter productive. To stop this from occurring I made sure that the button was disabled once it was clicked and changed the pointer to indicate to users that once it was started (and not paused) you could not click on it again, until it was paused.

Another issue was that when a user hit the start/resume button during a break after pausing the timer, it went back to the start of the 25 minute work timer. Obviously this was not intended and needed to be remedied. The fix was to create a function that was called on the start button event listener, which then determined what function to use by checking if the status variable matched the work or break string.