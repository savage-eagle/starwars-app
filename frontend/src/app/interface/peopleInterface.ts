export const PEOPLE = "peoples";
export const FILMS = "films";

export type SearchType = typeof PEOPLE | typeof FILMS;

export interface People {
	title?: string;
	name?: string;
	opening_crawl?: string;
	gender?: string;
	height?: string;
	mass?: string;
}

export interface Movie {
	title: string;
	episode_id: number;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: string;
	characters: string[];
	planets: string[];
	starships: string[];
	vehicles: string[];
	species: string[];
	created: string;
	edited: string;
}
