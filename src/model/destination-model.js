import {mockDestinations} from '../mock/destination';

export class DestinationModel {
  #destination = mockDestinations;

  get destinations() {
    return this.#destination;
  }

  getDestinationById(id){
    return this.#destination.find((item)=>item.id === id);
  }
}
