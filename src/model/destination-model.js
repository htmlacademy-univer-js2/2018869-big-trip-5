import {mockDestinations} from '../mock/destination';

export class DestinationModel {
  #destination = mockDestinations;

  getDestinations() {
    return this.#destination;
  }

  getDestinationById(id){
    return this.#destination.find((item)=>item.id === id);
  }
}
