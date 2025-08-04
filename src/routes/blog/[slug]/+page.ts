// import { error } from '@sveltejs/kit';
// import type { PageLoad } from './$types';

// export const load: PageLoad = async ({ params }) => {
// 	try {
// 		const post = await import(`../../../posts/${params.slug}.md`);
// 		return {
// 			content: post.default,
// 			meta: post.metadata
// 		};
// 	} catch (e) {
// 		error(404, `could not find ${params.slug}`);
// 	}
// };

import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

const modules = import.meta.glob('../../../posts/*.md', { eager: true });

export const load: PageLoad = async ({ params }) => {
	for (const path in modules) {
		const mod = modules[path] as any;
		if (mod.metadata?.slug === params.slug) {
			return {
				content: mod.default,
				meta: mod.metadata
			};
		}
	}

	throw error(404, `could not find post with slug "${params.slug}"`);
};
