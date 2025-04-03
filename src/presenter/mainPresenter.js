import {render} from '../render';
import EditForm from '../view/EditFormView';
import CreateForm from '../view/CreateFormView';
import Point from '../view/PointView';
import Sort from '../view/SortView';
import Filter from '../view/FilterView';


export default class MainPresenter {
  constructor({ container }) {
    this.container = container;
    this.tripEventsList = document.createElement('ul');
    this.tripEventsList.className = 'trip-events__list';
  }

  init(){
    const siteHeaderFiltersElement = document.querySelector('.trip-controls__filters');
    render(new Filter(), siteHeaderFiltersElement);

    render(new Sort(), this.container);

    this.container.appendChild(this.tripEventsList);

    render(new EditForm(), this.tripEventsList);

    render(new CreateForm(), this.tripEventsList);

    for (let i = 0; i < 3; i++){
      render(new Point(), this.tripEventsList);
    }
  }
}
