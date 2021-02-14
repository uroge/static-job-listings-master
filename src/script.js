import { applyFilters } from "./filter_and_search.js";
import { createListForJobs } from './create_element.js';

// function createContent(job) {
//     const content = document.createElement('div');
//     content.className = 'content';
    
//     const tagsHTML = job.languages.map(createTagElement)
//         .map(el => el.outerHTML)
//         .join('');
    
//     content.innerHTML = `
//     <div class="container">
//     <div class="row job mx-auto justify-content-center align-items-center p-4">
//       <div class="col-sm-10 col-md-6">
//         <div class="row">
//           <div class="col-sm-10 col-md-3 p-2 align-self-center img-container">
//             <img src="${job.logo}" alt="company-image" class="img">
//           </div>
//           <div class="col-sm-10 col-md-8 align-self-center desc">
//             <div class="row mb-1 align-items-center"><span class="name">${job.company}</span>${job.new ? '<span class="new">New!</span>' : ''}${job.featured ? '<span class="featured text-uppercase">Featured</span>' : ''}</div>
//             <div class="row mb-1 align-items-center"><span class="position">${job.position}</span></div>
//             <div class="row mb-0 align-items-center"><span class="work">${job.postedAt}</span> <div class="dot"></div> <span class="work">${job.contract}</span> <div class="dot"></div> <span class="work">${job.location}</span></div>
//           </div>
//         </div>
//       </div>
//       <hr class="d-md-none">
//       <div class="col-sm-10 col-md-6">
//         <div class="row links">${tagsHTML}</div>
//       </div>
//     </div>
//   </div>
//     `;
    
//     return content;
// }

// function createTagElement(tag) {
//     const tagContainer = document.createElement('div');
//     tagContainer.className = 'tag';
//     const tagEl = document.createElement('a');
//     tagEl.className = 'link';
//     tagEl.innerText = tag;
//     tagContainer.appendChild(tagEl);

//     return tagContainer;
// }
  
// function createListForJobs(jobs) {
//     const itemsEl = document.querySelector('.items');
//     itemsEl.innerHTML = '';
//     jobs.forEach((job) => {
//       itemsEl.appendChild(createContent(job));
//     });
// }

let request = new Request('data.json', );
fetch(request)
.then(function(resp) {
    return resp.json();
})
.then(function(data) {
    createListForJobs(data);
    applyFilters();
});


