Hilton UI Assessment

This is typically given to candidates for the Hilton UI team.  The UI team is responsible for working with designers, user experience architects, and web accessibility specialists to develop front-end assets.  For this reason, fidelity to design, business rules, and awareness of accessible principles are part of the evaluation.  Communication is a key, so please also include a document of assumptions, compromises, or any explanation you'd like to give.

There are two assessments.  There are options in how to return the final product.  If there are no .js files, then returning a zip is fine (Hilton exchange removes contents of zip files that contain .js files).  Alternatively, park the code on github or some other downloadable spot on the web.


Assessment 1:
--------------
Expected final output:
HTML/CSS/JS/supporting images.

Description:
A hotel details web page is going to be served to mobile phone web users.  A screenshot is provided of what it should look like (test1-mobile-page.png).  Create a static web page from scratch that matches the screenshot, with some responsiveness for varying phone screen sizes.  (The footer is not illustrated - feel free to cut off however you feel appropriate).  Supporting images for this test can be found in /test1_assets/ directory.

The point of this is to show awareness towards:
- Design detail
- Semantic HTML 
- CSS/responsive design


Assessment 2:
--------------
Expected final output:
This could be a codesandbox/codepen/etc link OR a downloadable app that could run locally (include instructions either way). Either would be expected to make use of React, styled-components, some type of state management.  Include tests.

The point of this is to show awareness towards:
- React fundamentals
- Writing tests
- Managing of state
- Meeting functional requirements
- Design detail
- Semantic HTML 


Description:
Using the screenshot test2-dynamic-form.png as a guide, create a web page that behaves in the following specified manner.

1.
By default, the 'Adult' and 'Children' drop-down fields for rooms 2, 3, and 4 should be disabled.  Upon checking the checkbox of room 2, the drop-down fields associated with room 2 should be enabled.  

Adults drop-down field values: [1, 2]
Children drop-down field values: [0, 1, 2]

2.
If the user checks the 'Room 3' checkbox, Room 2 should auto-check. (See Figure B in screenshot). If the user checks the 'Room 4' checkbox, Room 2 and Room 3 should auto-check.

3.
Any room that is checked should have a selected state, whose presentation is identical to the 'Room 1' field, and it's corresponding Adults/Children drop-down fields should be enabled.

4.
Any room that is unchecked should return to the unselected state, and it's corresponding Adults/Children drop-down fields should become disabled and return to default values.

5.
If a user unchecks a room, that room plus any room after that room should return to its unselected state.  (For example, if all rooms are checked, and the user unchecks room 3, then both room 3 and room 4 should be unselected, and their drop-downs set to default values and disabled.)

6.
Upon clicking 'Submit', save values, so that upon reload, all previously selected values are pre-populated.
