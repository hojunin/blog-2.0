import { DATE } from '@/types/common';
import dayjs from 'dayjs';

const MIL_TO_SECOND: number = 1000;
const SECOND_TO_MINUTE: number = 60;
const MINUTE_TO_HOUR: number = 60;
const HOUR_TO_DAY: number = 24;
const DAY_TO_WEEK: number = 7;

/**
 * 현재 시각과의 시간차이를 리턴합니다.
 * @param { DATE } date
 * @returns 분 단위로 리턴하고 나머지 초는 절삭됩니다. ex) 5분 35초 -> 5분으로 리턴
 */
export const getDuration = (targetDate: DATE) =>
  Math.floor(dayjs().valueOf() - dayjs(targetDate).valueOf()) /
  MIL_TO_SECOND /
  SECOND_TO_MINUTE;
/**
 * 날짜의 년도가 현재 년도인지를 리턴합니다.
 * @param { DATE } targetDate
 * @returns {boolean}
 */
const isCurrentYear = (targetDate: DATE) =>
  dayjs(targetDate).year() === dayjs().year();
/**
 * @param { DATE } date
 * @return { DATE } formatted date
 */

export const getElapsedTime = (date: DATE): DATE => {
  const duration = getDuration(date);

  switch (true) {
    case duration < 1:
      return '방금 전';

    case duration < MINUTE_TO_HOUR:
      return `${Math.floor(duration)}분 전`;

    case duration < MINUTE_TO_HOUR * HOUR_TO_DAY:
      return `${Math.floor(duration / MINUTE_TO_HOUR)}시간 전`;

    case duration < MINUTE_TO_HOUR * HOUR_TO_DAY * DAY_TO_WEEK:
      return `${Math.floor(duration / MINUTE_TO_HOUR / HOUR_TO_DAY)}일 전`;

    case duration > MINUTE_TO_HOUR * HOUR_TO_DAY * DAY_TO_WEEK:
      return isCurrentYear(date)
        ? dayjs(date).format('MM.DD')
        : dayjs(date).format('YY.MM.DD');

    default:
      return dayjs(date).format('YY.MM.DD');
  }
};
