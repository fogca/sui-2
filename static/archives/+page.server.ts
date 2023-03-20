import { error } from '@sveltejs/kit';
import { client } from '../../src/libs/client';
import type { MicroCMSListResponse } from 'microcms-js-sdk';


//export const prerender = true;

type Post = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	description: string;
	thumbnail: string;
	fullImage: string;
	fullImageB: string;
	url: string;
	content: string;
	scope: string;
	title: string;
	images: InnerHTML;
	images2: InnerHTML;

	philosophy: string;
	philosophy_title_eng: string;
	top_eng: string;
	top_jap: InnerHTML;
	top_tagline: string;
	//title: InnerHTML;
	//String.replace(/\n/g, '<br />');
};

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load() {
	const res = await Promise.all([
		client.get<MicroCMSListResponse<Post>>({
			endpoint: 'projects',
      		queries: { limit: 30 }
		})
	])
	if (res) {
		//console.log(res);
		return { ...res };
	}

	throw error(404, 'Not found');
}