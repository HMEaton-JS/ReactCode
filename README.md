Requirements
============
View list of cards with Sample data provided using Reactjs

Installation
============
1. Nodejs - install nodejs from https://nodejs.org/en/download/
2. Download this project
3. install following (npm install <name> OR yarn add <name>)
   a. @material-ui/core 
   b. @pxblue/themes
   c. @pxblue/icons
   d. @pxblue/icons-svg
   e. @material-ui/icons
   f. @pxblue/react-components
   
6. Start server locally - 'npm start'
7. Verify UI in browser with url - 'http://localhost:3000/'

Implementation approach and Challenges
======================================
1. Used PxBlue and material-ui wherever required.

2. Custom implementation of ScoreCard Component was required prior to get the list of cards

3. Created new custom ScoreCard component. Refer code of this component at src/ScoreCard.js. Refer usage of this component at https://github.com/pxblue/component-library/blob/dev/reactnative/docs/scorecard.md

4. To get the list of Cards, used 'Grid' layout of 'ScoreCard' component embedding 'Hero' and 'HeroBanner' components.

5. InfoListItem component from PxBlue used to get Footer of ScoreCard.


Recommendations
---------------
1. As per the current requirement, the size of Hero items is fixed. Code can be improved to include more number of Hero items can be dynamic.

2. The value of 'children' and 'badge' parameter provided in ScoreCardList can be optimized as seperate components.

3. The 'styles' added in the Components can be seperated in other file based on coding guidelines.