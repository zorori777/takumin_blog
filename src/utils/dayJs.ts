import dayjs from 'dayjs';
import 'dayjs/locale/ja'; // import locale
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
dayjs.locale('ja');

export default dayjs;

export const dateTimeFormat = 'YYYY年MM月DD日 HH:mm';
export const dateFormat = 'YYYY年MM月DD日';
