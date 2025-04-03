import {getShufflePoints} from '../mock/point';
import {mockOffers} from '../mock/offer';
import {mockDestinations} from '../mock/destination';

export class PointModel {
  points = getShufflePoints();
  offers = mockOffers;
  destination = mockDestinations;

  getPoints() {
    return this.points;
  }

  getOffers() {
    return this.offers;
  }

  getDestination() {
    return this.destination;
  }

  getOffersId(type, id){
    const offerGroup = this.offers.find((offer) => offer.type === type);
    return id
      ? offerGroup.offers.find((item) => item.id === id)
      : offerGroup.offers;
  }

  getDestinationId(id){
    return this.destination.find((item)=>item.id === id);
  }
}
