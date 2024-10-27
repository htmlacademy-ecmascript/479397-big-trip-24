import {createElement} from '../render';

function createLoaderView() {
  return `
  <section class="trip-events">
            <h2 class="visually-hidden">Trip events</h2>

            <p class="trip-events__msg">Loading...</p>
          </section>
  `;
}


export default class Loader {
  getTemplate() {
    return createLoaderView();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
