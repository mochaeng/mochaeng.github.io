const modules = import.meta.glob('../../posts/*.md', { eager: true });

export const posts = Object.values(modules).map((mod: any) => ({
	slug: mod.metadata.slug,
	title: mod.metadata.title,
	date: mod.metadata.date,
	content: mod.default
}));
