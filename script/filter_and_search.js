import {createListForJobs} from './create_element.js';

const filterByTagElement = document.querySelector('tags-holder');
filterByTagElement.addEventListener('tag-clicked', (e) => filterByTagElement.removeTag(e.detail.tag));
filterByTagElement.addEventListener('changed', () => applyFilters());

function addTagFilter() {
  Array.from(document.querySelectorAll('.link'))
  .forEach(tagEl => tagEl.addEventListener('click', () => {
    filterByTagElement.addTag(tagEl.innerHTML);
    applyFilters();
  }));
}

function applyFilters() {
  let request = new Request('data.json', );
  fetch(request)
  .then(function(resp) {
      return resp.json();
  })
  .then(function(jobs) {
    console.log(jobs);
    createListForJobs(filterByTags(jobs));
    addTagFilter();
  });
}

function filterByTags(jobs) {
  let filtered = jobs;
  filterByTagElement.selectedTags
    .forEach((t) => filtered = filtered.filter(p => p.languages.includes(t)));
  return filtered;
}

export {applyFilters};
