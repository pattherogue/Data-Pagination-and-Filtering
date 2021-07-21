/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
/* list parameter - represent student data */
/* page parameter - represent page number */
function displayPage (list, page) {
   const startIndex = (page * 9) - 9; /*store start index */
   const endIndex = page * 9; /* store end index */
   const studentList = document.querySelector('.student-list'); /* UL element with class of "student-list" */ 
   studentList.innerHTML = ''; /* remove any previously displayed studnets */
   /* loops over list parameter */
   for(let i = 0; i < list.length; i++) {
      if(i >= startIndex && i < endIndex ) {
         const student = list[i];
         let html = `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src=${student.picture.large} alt="Profile Picture">
               <h3>${student.name.first} ${student.name.last}</h3>
               <span class="email">${student.email}</span>
            </div>
            <div class="joined-details">
               <span class="date">${student.registered.date}</span>
            </div>
         </li> 
         `;
         /* insert elements created to the "studentList" variable */
         studentList.insertAdjacentHTML('beforeend', html);
      }
   }
};


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
/* list parameter - represent student data */
function addPagination(list) {
   /* variable to store number of pagination buttons needed */
   const numOfButtons = Math.ceil(list.length / 9);
   /* select UL element with class "link-list" */
   const linkList = document.querySelector('ul.link-list');
   /* remove any pagination buttons previously displayed */
   linkList.innerHTML = '';
   /* loop over variable for number of pages needed */
   for(let i = 1; i < numOfButtons; i++) {
      /* DOM elements needed to display pagination button */
      let button = `
         <li>
            <button type="button">1</button>
         </li>
      `;
      /* insert elements to link-list variable */
      linkList.insertAdjacentHTML('beforeend', button);
      /* select first pagination button */
      const active = document.querySelector('button');
      active.className = 'active';
      /* create event listener */
      linkList.addEventListener('click', (e) => {
         if (e.target.tagName === 'BUTTON') {
            /* remove active class from pagination button */
            const remove = document.querySelector('.active');
            remove.className = '';
            /* add active class to pagination button that was just clicked */
            e.target.className = 'active';
            /* call showPage function passing list paramenter */
            showPage(page, e.target.textContent);
         }
      });
   };
};


// Call functions
addPagination(data);
showPage(data, 1);