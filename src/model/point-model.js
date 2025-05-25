import {mockPoints} from '../mock/point';
import {toCamelCase} from '../utils/utils';

export class PointModel {
  #points = mockPoints.map((point)=>toCamelCase(point));

  get points() {
    return this.#points;
  }
}
