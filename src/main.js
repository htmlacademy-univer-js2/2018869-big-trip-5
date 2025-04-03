import MainPresenter from './presenter/main-presenter';

const siteBodySortElement = document.querySelector('.trip-events');
const mainPresenter = new MainPresenter({container: siteBodySortElement});
mainPresenter.init();

