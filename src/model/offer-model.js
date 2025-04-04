import {mockOffers} from '../mock/offer';

export class OfferModel {
  #offers = mockOffers;

  getOffers() {
    return this.#offers;
  }

  getOffersById(type, id){
    const offerGroup = this.#offers.find((offer) => offer.type === type);
    return id
      ? offerGroup.offers.find((item) => item.id === id)
      : offerGroup.offers;
  }

  getOffersByType(type) {
    return this.#offers.find((offer) => offer.type === type);
  }
}
