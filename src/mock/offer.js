import {getRandomNumber} from '../utils/utils';

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 'taxi1',
        title: 'Upgrade to a business class',
        price: getRandomNumber(200, 50)
      },
      {
        id: 'taxi2',
        title: 'Choose the radio station',
        price: getRandomNumber(150, 30)
      },
      {
        id: 'taxi3',
        title: 'Choose temperature',
        price: getRandomNumber(100, 20)
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: 'bus1',
        title: 'Infotainment system',
        price: getRandomNumber(150, 40)
      },
      {
        id: 'bus2',
        title: 'Order meal',
        price: getRandomNumber(180, 50)
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: 'train1',
        title: 'Book a taxi at the arrival point',
        price: getRandomNumber(200, 60)
      },
      {
        id: 'train2',
        title: 'Order a breakfast',
        price: getRandomNumber(180, 50)
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'flight1',
        title: 'Choose meal',
        price: getRandomNumber(250, 80)
      },
      {
        id: 'flight2',
        title: 'Choose seats',
        price: getRandomNumber(200, 50)
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 'checkin1',
        title: 'Choose the time of check-in',
        price: getRandomNumber(150, 30)
      },
      {
        id: 'checkin2',
        title: 'Add breakfast',
        price: getRandomNumber(120, 40)
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: []
  },
  {
    type: 'ship',
    offers: [
      {
        id: 'ship1',
        title: 'Upgrade to business class',
        price: getRandomNumber(300, 100)
      },
      {
        id: 'ship2',
        title: 'Add luggage',
        price: getRandomNumber(200, 50)
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: 'drive1',
        title: 'With automatic transmission',
        price: getRandomNumber(150, 40)
      },
      {
        id: 'drive2',
        title: 'With air conditioning',
        price: getRandomNumber(120, 30)
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 'restaurant1',
        title: 'Choose live music',
        price: getRandomNumber(180, 50)
      },
      {
        id: 'restaurant2',
        title: 'Choose VIP area',
        price: getRandomNumber(200, 60)
      }
    ]
  }
];

export { mockOffers };
