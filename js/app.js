// console.log('This page was loaded! Yay~ 😄')

// Grabbing main parts of the HTML as variables for future use
const navbarList = document.getElementById('navbar__list')
const navbar = document.getElementsByClassName('navbar__menu')[0]
const sections = document.getElementsByTagName('section')

// A function to build the inside of the navbar
let buildNavbar =()=> {

    // Go over the all the sections in an object and add li elements to them
    for ( let section of sections ) {
        let li = document.createElement('li')
        
        // Create span to display the menu link CSS and attach what section it belongs to with a dataset id
        let span = document.createElement('span')
        span.classList += 'menu__link'
        span.innerText = section.dataset.nav
        span.dataset.id = section.id
        
        // Append the span to the li and the li to the navbar
        li.appendChild(span)
        navbarList.appendChild(li)
    }
}

// Set up a scroll event listener on the entire document that runs a function to check all of the sections positions
document.onscroll = (event)=> {
    for ( let section of sections ) {
        checkIfSectionInView( section )
    }
}

// Function for checking if a section is in view
let checkIfSectionInView =( section )=> {
    // Create variables for the section's position and the device height
    let position = section.getBoundingClientRect()
    let viewHeight = document.documentElement.clientHeight
    
    // Check to see if the sections relative position is near the top of the device screen
    if ( position.top <= viewHeight && position.top <= 500 && position.top >= 0 ) {
        // Check to see if the current section is already the section in view, if it is don't add the active class to it's list again
        if ( !section.className.includes('active') )
            section.classList += ' active'
    }
    // Otherwise, remove the active class from any sections that aren't supposed to have it
    else if ( section.className.includes('active') )
        section.classList.remove('active')
}

// Create an event for the navbar so when its clicked it scrolls the appropriate section into view using event delegation
navbarList.onclick = (event)=> {
    // Make a variable to hold what the element was for ease of use
    let element = event.target

    // Check to see if the element in question was a menu button on the navbar
    if ( element.className.includes('menu__link') )
        // Using that dataset id from earlier on the span to get the exact section from the object
        sections[`${element.dataset.id}`].scrollIntoView({ behavior: "smooth" })
}

// Run the function for building the navbar once the page is loaded and ready
buildNavbar()



/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


