import {getRandomNumber} from '../utils';

const mockDestinations = [
  {
    id: 1,
    description: 'Amsterdam - is a beautiful city',
    name: 'Amsterdam',
    pictures: [
      {
        src: `https://loremflickr.com/300/200/amsterdam?random=${getRandomNumber(100)}`,
        description: 'Amsterdam canals at sunset'
      },
      {
        src: `https://loremflickr.com/300/200/amsterdam?random=${getRandomNumber(100)}`,
        description: 'Amsterdam historic district'
      }
    ]
  },
  {
    id: 2,
    description: 'Paris - city of lights',
    name: 'Paris',
    pictures: [
      {
        src: `https://loremflickr.com/300/200/paris?random=${getRandomNumber(100)}`,
        description: 'Eiffel Tower view'
      }
    ]
  },
  {
    id: 3,
    description: 'Rome - eternal city',
    name: 'Rome',
    pictures: [
      {
        src: `https://loremflickr.com/300/200/rome?random=${getRandomNumber(100)}`,
        description: 'Colosseum at night'
      },
      {
        src: `https://loremflickr.com/300/200/rome?random=${getRandomNumber(100)}`,
        description: 'Roman Forum'
      },
      {
        src: `https://loremflickr.com/300/200/rome?random=${getRandomNumber(100)}`,
        description: 'Trevi Fountain'
      }
    ]
  },
  {
    id: 4,
    description: 'Berlin - vibrant capital',
    name: 'Berlin',
    pictures: []
  },
  {
    id: 5,
    description: 'Tokyo - modern metropolis',
    name: 'Tokyo',
    pictures: [
      {
        src: `https://loremflickr.com/300/200/tokyo?random=${getRandomNumber(100)}`,
        description: 'Shibuya crossing'
      }
    ]
  },
  {
    id: 6,
    description: 'Barcelona - city of Gaudi',
    name: 'Barcelona',
    pictures: [
      {
        src: `https://loremflickr.com/300/200/barcelona?random=${getRandomNumber(100)}`,
        description: 'Sagrada Familia'
      },
      {
        src: `https://loremflickr.com/300/200/barcelona?random=${getRandomNumber(100)}`,
        description: 'Park Güell'
      }
    ]
  },
  {
    id: 7,
    description: '',
    name: 'London',
    pictures: []
  },
  {
    id: 8,
    description: 'New York - big apple',
    name: 'New York',
    pictures: [
      {
        src: `https://loremflickr.com/300/200/newyork?random=${getRandomNumber(100)}`,
        description: 'Times Square'
      }
    ]
  },
  {
    id: 9,
    description: 'Dubai - city of future',
    name: 'Dubai',
    pictures: [
      {
        src: `https://loremflickr.com/300/200/dubai?random=${getRandomNumber(100)}`,
        description: 'Burj Khalifa'
      },
      {
        src: `https://loremflickr.com/300/200/dubai?random=${getRandomNumber(100)}`,
        description: 'Palm Jumeirah'
      }
    ]
  },
  {
    id: 10,
    description: 'Sydney - harbor city',
    name: 'Sydney',
    pictures: [
      {
        src: `https://loremflickr.com/300/200/sydney?random=${getRandomNumber(100)}`,
        description: 'Opera House'
      },
      {
        src: `https://loremflickr.com/300/200/sydney?random=${getRandomNumber(100)}`,
        description: 'Harbour Bridge'
      }
    ]
  }
];

export {mockDestinations};
