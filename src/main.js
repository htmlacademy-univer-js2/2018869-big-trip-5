import MainPresenter from './presenter/main-presenter';
import {PointModel} from './model/point-model';
import {OfferModel} from './model/offer-model';
import {DestinationModel} from './model/destination-model';

const siteBodySortElement = document.querySelector('.trip-events');
const mainPresenter = new MainPresenter(siteBodySortElement, new PointModel(), new OfferModel(), new DestinationModel());
mainPresenter.init();

