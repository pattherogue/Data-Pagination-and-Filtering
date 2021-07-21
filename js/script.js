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



// Call functions
