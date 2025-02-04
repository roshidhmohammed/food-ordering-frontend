<!-- Namaste React -->

# Two types of routing in React applications

1.  Client Side Routing -
    It is happening in the React apps. When the react app loads for the first time, that means with the "/" route. The React took all the files from the server. After that when we click any anchor tag related to any page it only interchanges the component instead of reloading the entire page. It doesn't make any network calls.

        eg: When we click the anchor tag related to the about.html file it navigates into the about page without reloading the entire page and just intercahnging the components. It gives faster performance of the app.

2.  Server Side Routing -
    When we have index.html, about.html, contact.html. When we click any anchor tag related to the above files, which navigates into the specific pages it reloads the whole page. It is like network call in the browser.

    eg: When we click the anchor tag related to the about.html file it navigates into the about page and reloads the entire page.



    # Redux Toolkit - for state management of the application

       - Install @reduxjs/toolkit and react-redux
       - Build the store
       - Connect the store to our app
       - Create Slice (here we are going to create the cart   slice)
       - Dispatching action for creating/updating the data
       - Selector :- for reading the data in the application


# Setting up the Developer unit test on the application

 - Install React Testing Library
 - Install Jest
 - Install Babel Dependency (copy the commands from Jest Docs)
 - Configure babel.config.js
 - Disable the babel transpiler on parcel - for that ->      create  a file .parcelrc and paste the script from the Parcel Docs
 - Configure Jest omn the project using "npx jest --init"
 - Test the app with npm run test command
 - In the terminal it is showing as "No tests Found" we     have  successfully configured for the testing of the app.
 -npm i -D @babel/preset-react - for enabling the JSX on jsdom environment
 - Configure @babel/preset-react on babel config
 - To use DOM function on jsdom (for test cases)- install one more library - npm i -D @testing-react-library/jest-dom

