import { Movie } from "../interface/peopleInterface";
import { axiosInstance } from "./axiosInstance";

export default async function filmsApi({
	filmId,
}: {
	filmId: number;
}): Promise<Movie> {
	try {
		const response = await axiosInstance.get(`/film/${filmId}`);
		return response.data.data as Movie;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
