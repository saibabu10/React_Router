import React from 'react'
import './HomeComponent.css';
function HomeComponent() {
  return (
    <React.Fragment>
      <h1>Main Page</h1>
    <div className="run"><h1>HomeComponent</h1></div>

   <h3 className='sub'>
   <ul className='square'> <li>This a simple React Web Page to implement Navigation Bar</li>
   <li>Home Page - to return the main page</li>
   <li>About Us - to display the content about this page</li>
   <li>Contact Us - to get contact informations</li>
   <li>React Form - to open the form </li>
   <li>Youtube - to open a youtube componenet</li>
   <li>Welcome Function - this is used to create a component using Function </li>
   <li>Greet Class - this is used to create a greet app using class Component </li></ul> 
   </h3>
   
 
   
    </React.Fragment>
  )
}

export default HomeComponent