import { error } from '@sveltejs/kit';
import { client } from '../../../src/libs/client';
import type { MicroCMSObjectContent, MicroCMSListResponse } from 'microcms-js-sdk';

type Post = {
	id: string;
	title: string;
	scope: string;
	content: string;
	description: string;
	thumbnail: string;
	fullImage: string;
	fullImageB: string;
	credit: string;
	work: string;
	client: string;
	link: string;
	body: HTMLElement;
	html: HTMLElement;
	images: HTMLElement;
	imagesB: HTMLElement;
	embed: HTMLElement;
};

type Props = {
	params: {
		slug: string;
	};
};

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load({ params }: Props) {
	const res = await Promise.all([
		client.get<MicroCMSObjectContent & Post>({
			endpoint: 'projects',
			contentId: params.slug
		}),
		client.get<MicroCMSListResponse<Post>>({
			endpoint: `projects`,
			queries: { 
				limit: 4, 
				orders: 'highlight', 
				fields: 'id,title,thumbnail', 
				filters: `publishedAt[less_than]params.publishedAt`
			}
		})
	])
	if (res) {return { ...res};}
	throw error(404, 'Not found');
}


/* 
	const res = await client.get<MicroCMSObjectContent & Post>({
		endpoint: 'works',
		contentId: params.slug
	});
*/







/* @type {import('@sveltejs/kit').RequestHandler} */
/*
export async function loadPosts() {

	const posts = await client.get<MicroCMSListResponse<Post>>({
		endpoint: `works`,
		queries: { limit: 4, orders: 'date', fields: 'id,title,thumbnail' },
	})
	
	const index = links.contents.findIndex((content) => content.id === params.slug)
	const prevLink = links.contents[index - 1];
	const prevLink2 = links.contents[index - 2];
	const prevLink3 = links.contents[index - 3];
	const nextLink = links.contents[index + 1];
	const nextLink2 = links.contents[index + 2];
	const nextLink3 = links.contents[index + 3];
	
	if (posts) {
		return { ...posts};
	}
	throw error(404, 'Not found');
}
*/
