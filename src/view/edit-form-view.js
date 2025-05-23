import {capitalizeString, getOfferKeyword, humanizeDate} from '../utils/utils';
import AbstractView from '../framework/view/abstract-view';

function createFormTemplate(pointModel, offerModel, destinationModel){
  const {
    base_price: price,
    date_from: dateFrom,
    date_to: dateTo,
    destination: destinationId,
    offers: offersId,
    type
  } = pointModel;

  const pointOffers = [];
  for(const offerId of offersId){
    pointOffers.push(offerModel.getOffersById(type, offerId));
  }
  const allOffers = offerModel.getOffersByType(type).offers;
  const {name, description, pictures} = destinationModel.getDestinationById(destinationId);

  return `
      <li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>

                        <div class="event__type-item">
                          <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                          <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                          <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                          <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                          <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                          <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked="">
                          <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                          <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                          <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                          <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                        </div>
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${capitalizeString(type)}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${name}" list="destination-list-1">
                    <datalist id="destination-list-1">
                      <option value="Amsterdam"></option>
                      <option value="Geneva"></option>
                      <option value="Chamonix"></option>
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizeDate(dateFrom,'DD/MM/YY HH:mm')}">
                    —
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizeDate(dateTo,'DD/MM/YY HH:mm')}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      €
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                ${allOffers?.length > 0 ? `
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
                    <div class="event__available-offers">
                    ${allOffers.map((offer) => {
    const keyword = getOfferKeyword(offer.title);
    return `
                    <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${keyword}-1" type="checkbox" name="event-offer-${keyword}" ${pointOffers.includes(offer) && 'checked'}>
                        <label class="event__offer-label" for="event-offer-${keyword}-1">
                          <span class="event__offer-title">${offer.title}</span>
                          +€&nbsp;
                          <span class="event__offer-price">${offer.price}</span>
                        </label>
                    </div>
                    `;
  }).join('')}
                    </div>
                  </section>` : ''}
                  ${(description || pictures?.length > 0) ? `
                  <section class="event__section  event__section--destination">
                  ${description && `
                  <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                  <p class="event__destination-description">${description}</p>
                  `}
                  ${pictures?.length > 0 ? `
                       <div class="event__photos-container">
                         <div class="event__photos-tape">
                           ${pictures.map((picture) => `
                             <img class="event__photo" src="${picture.src}" alt="${picture.description}">`).join('')}
                         </div>
                       </div>
                     ` : ''}
                   </section>` : ''}
                </section>
              </form>
            </li>
  `;
}

export default class EditForm extends AbstractView{
  #pointModel;
  #offerModel;
  #destinationModel;
  #editForm;
  #closeButton;

  constructor(pointModel, offerModel, destinationModel, onFormSubmit, onEditButtonClick) {
    super();
    this.#pointModel = pointModel;
    this.#offerModel = offerModel;
    this.#destinationModel = destinationModel;
    this.#editForm = this.element.querySelector('.event--edit');
    this.#editForm.addEventListener('submit', onFormSubmit);
    this.#closeButton = this.element.querySelector('.event__rollup-btn');
    this.#closeButton.addEventListener('click', onEditButtonClick);
  }

  get template() {
    return createFormTemplate(this.#pointModel, this.#offerModel, this.#destinationModel);
  }
}
