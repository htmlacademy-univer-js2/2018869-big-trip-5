import {render} from '../render';
import EditForm from '../view/edit-form-view';
import CreateForm from '../view/create-form-view';
import Point from '../view/point-view';
import Sort from '../view/sort-view';
import Filter from '../view/filter-view';
import {getRandomNumber} from '../utils';


export default class MainPresenter {
  constructor(container, model) {
    this.container = container;
    this.tripEventsList = document.createElement('ul');
    this.tripEventsList.className = 'trip-events__list';
    this.pointModel = model;
  }

  init(){
    const siteHeaderFiltersElement = document.querySelector('.trip-controls__filters');
    render(new Filter(), siteHeaderFiltersElement);

    render(new Sort(), this.container);

    this.container.appendChild(this.tripEventsList);

    this.pointModel.points = [...this.pointModel.getPoints()];
    this.pointModel.offers = [...this.pointModel.getOffers()];
    this.pointModel.destinations = [...this.pointModel.getDestination()];

    render(new EditForm(this.pointModel,getRandomNumber(this.pointModel.points.length - 1)), this.tripEventsList);

    render(new CreateForm(), this.tripEventsList);

    for (let i = 1; i < this.pointModel.points.length; i++){
      render(new Point(this.pointModel, i), this.tripEventsList);
    }
  }
}
