import {mockPoints} from '../mock/point';

export class PointModel {
  #points = mockPoints;

  getPoints() {
    return this.#points;
  }
}
