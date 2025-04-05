import {mockPoints} from '../mock/point';

export class PointModel {
  #points = mockPoints;

  get points() {
    return this.#points;
  }
}
