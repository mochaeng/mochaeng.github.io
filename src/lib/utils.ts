import { twMerge } from 'tailwind-merge';
import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
	const newDate = new Date(date).toLocaleDateString('en-GB', {
		weekday: 'short',
		day: 'numeric',
		year: 'numeric'
	});
	const parts = newDate.split(' ');
	return `${parts[0]} ${parts[1]}, ${parts[2]}`;
}
