import { DateTime, Interval } from 'luxon';

export const getFormattedDate = (date) => {
	const d = DateTime.fromJSDate(new Date(date));
	const today = DateTime.local();
	const diff = Interval.fromDateTimes(d, today).toDuration([
		'months',
		'days',
		'hours',
		'minutes',
		'seconds'
	]);

	if (diff.months > 0) {
		const value = Math.round(diff.months);
		return `${value} month${value > 1 ? 's' : ''} ago`;
	} else if (diff.days > 0) {
		const value = Math.round(diff.days);
		return `${value} day${value > 1 ? 's' : ''} ago`;
	} else if (diff.hours > 0) {
		const value = Math.round(diff.hours);
		return `${value} hour${value > 1 ? 's' : ''} ago`;
	} else if (diff.minutes > 0) {
		const value = Math.round(diff.minutes);
		return `${value} minute${value > 1 ? 's' : ''} ago`;
	} else {
		const value = Math.round(diff.minutes);
		return `${value} second${value > 1 ? 's' : ''} ago`;
	}
};
