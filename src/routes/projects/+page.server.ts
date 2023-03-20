import { error } from '@sveltejs/kit';
import { client } from '../../libs/client';
import type { MicroCMSListResponse } from 'microcms-js-sdk';


//export const prerender = true;

type Post = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	url: string;
	title: string;
	subhead: string;
	link: string;
	body: HTMLElement;
	thumbnail: HTMLElement;

	//title: InnerHTML;
	//String.replace(/\n/g, '<br />');
};

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load() {
	const res = await Promise.all([
		client.get<MicroCMSListResponse<Post>>({
			endpoint: 'projects',
      		queries: { limit: 50 }
		})
	])
	if (res) {
		//console.log(res);
		return { ...res };
	}

	throw error(404, 'Not found');
}