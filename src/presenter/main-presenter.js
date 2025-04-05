import EditForm from '../view/edit-form-view';
import Point from '../view/point-view';
import Sort from '../view/sort-view';
import Filter from '../view/filter-view';
import {render, replace} from '../framework/render';
import {generateFilters} from '../utils/filter';
import EmptyList from '../view/empty-list-view';


export default class MainPresenter {
  #pointModel;
  #offerModel;
  #destinationModel;
  #container;

  constructor(container, pointModel, offerModel, destinationModel) {
    this.#container = container;
    this.tripEventsList = document.createElement('ul');
    this.tripEventsList.className = 'trip-events__list';
    this.#pointModel = pointModel;
    this.#offerModel = offerModel;
    this.#destinationModel = destinationModel;
  }

  init(){
    const siteHeaderFiltersElement = document.querySelector('.trip-controls__filters');
    const filter = generateFilters(this.#pointModel.points);
    render(new Filter(filter), siteHeaderFiltersElement);
    if (filter[0].count === 0){
      render(new EmptyList(), this.#container);
    } else {
      render(new Sort(), this.#container);

      this.#container.appendChild(this.tripEventsList);

      for (let i = 0; i < this.pointModel.points.length; i++){
        this.#renderPoint(this.pointModel.points[i]);
      }
    }
  }

  get pointModel(){
    return this.#pointModel;
  }

  get offerModel(){
    return this.#offerModel;
  }

  get destinationModel(){
    return this.#destinationModel;
  }

  get container(){
    return this.#container;
  }

  #renderPoint(pointData){
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceEditToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const onPointButtonClick = ()=> {
      replacePointToEdit();
      document.addEventListener('keydown', escKeyDownHandler);
    };

    const onEditButtonClick = ()=> {
      replaceEditToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    };

    const onFormSubmit = (evt)=> {
      evt.preventDefault();
      replaceEditToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    };

    const point = new Point(pointData,this.offerModel,this.destinationModel,onPointButtonClick);
    const editPoint = new EditForm(pointData,this.offerModel,this.destinationModel,
      onFormSubmit,onEditButtonClick);

    function replacePointToEdit(){
      replace(editPoint,point);
    }

    function replaceEditToPoint(){
      replace(point,editPoint);
    }

    render(point,this.#container);
  }
}
