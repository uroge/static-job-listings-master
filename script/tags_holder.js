class TagsHolder extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._selectedTags = [];
      this.render();
      this.renderTagList();
    }
  
    addTag(tag) {
      if (!this._selectedTags.includes(tag)) {
        this._selectedTags.push(tag);
        this._selectedTags.sort();
        this.renderTagList();
        this.triggerChanged();
      }
    }
  
    get selectedTags() {
      return this._selectedTags.slice(0);
    }
  
    removeTag(tag) {
      const index = this._selectedTags.indexOf(tag);
      if (index >= 0) {
        this._selectedTags.splice(index, 1);
        this.renderTagList();
        this.triggerChanged();
      }
    }

    removeAllTags() {

    }
  
    render() {
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
      <div class="d-flex align-self-center">
        <h5 class="mb-0">Filter by Tags:</h5>
        <span class="tags"></span>
      </div>
          `;
    }
  
    renderTagList() {
      const tagsHolderElement = this.shadowRoot.querySelector('.tags');
      tagsHolderElement.innerHTML = '';
  
      const tags = this._selectedTags;
  
      if (tags.length == 0) {
        tagsHolderElement.innerHTML = '<h5 class="mb-0">No filters</h5>';
        return;
      }
  
      tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList = "tag mx-1";
        tagEl.style.color = 'hsl(180, 29%, 50%);';
        tagEl.addEventListener('click', () => this.triggerTagClicked(tag));
        tagEl.innerHTML = tag;
        tagsHolderElement.appendChild(tagEl);
      });
    }
  
    triggerChanged(tag) {
      const event = new CustomEvent('changed', { bubbles: true });
      this.dispatchEvent(event);  
    }
  
    triggerTagClicked(tag) {
      const event = new CustomEvent('tag-clicked', { 
        bubbles: true,
        detail: { tag },
      });
      this.dispatchEvent(event);  
    }
  }
  
  customElements.define('tags-holder', TagsHolder);
  