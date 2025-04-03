import MainPresenter from './presenter/main-presenter';
import {PointModel} from './model/point-model';

const siteBodySortElement = document.querySelector('.trip-events');
const mainPresenter = new MainPresenter(siteBodySortElement, new PointModel());
mainPresenter.init();

