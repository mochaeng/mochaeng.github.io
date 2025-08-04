import { twMerge } from 'tailwind-merge';
import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
	const newDate = new Date(date + 'T00:00').toLocaleDateString('en-GB', {
		year: 'numeric',
		weekday: 'long',
		day: 'numeric',
		month: 'short'
	});
	const parts = newDate.split(' ');
	return `${parts[0]} ${parts[1]} ${parts[2]} ${parts[3]}`;
}
