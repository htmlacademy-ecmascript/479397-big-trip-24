import {render} from './render';
import Filter from './view/filterView';
import Sorting from './view/sortView';

// const tripMainElement = document.querySelector('.trip-main');
const tripFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');
// const eventsListPresenter = new EventsListPresenter({eventsListContainer: tripEventsElement });


render(new Sorting(), tripEventsElement);
render(new Filter(), tripFiltersElement);
// eventsListPresenter.init();

