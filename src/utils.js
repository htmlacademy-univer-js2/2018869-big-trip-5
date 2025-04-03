import dayjs from 'dayjs';

const DATE_FORMAT = 'D-MMM';
const DAY_DIVIDER = 1000 * 60 * 60 * 24;
const HOUR_DIVIDER = 1000 * 60 * 60;
const MINUTE_DIVIDER = 1000 * 60;

function getRandomNumber(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function humanizeDate(date, format = DATE_FORMAT) {
  return date ? dayjs(date).format(format) : '';
}

function getDurationTime(start, end) {
  const startDate = dayjs(start);
  const endDate = dayjs(end);
  const duration = endDate.diff(startDate);

  const days = Math.floor(duration / DAY_DIVIDER);
  const hours = Math.floor((duration % DAY_DIVIDER) / HOUR_DIVIDER);
  const minutes = Math.floor((duration % HOUR_DIVIDER) / MINUTE_DIVIDER);

  const formatUnit = (value) => value.toString().padStart(2, '0');

  if (days > 0) {
    return `${formatUnit(days)}D ${formatUnit(hours)}H ${formatUnit(minutes)}M`;
  }

  if (hours > 0) {
    return `${formatUnit(hours)}H ${formatUnit(minutes)}M`;
  }

  return `${formatUnit(minutes)}M`;
}

function capitalizeString(word){
  return word[0].toUpperCase() + word.slice(1);
}

function getOfferKeyword(title){
  return title.split(' ').slice(-1);
}

export {getRandomNumber, humanizeDate, getDurationTime, capitalizeString, getOfferKeyword};
