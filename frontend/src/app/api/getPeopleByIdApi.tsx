import { People } from "../interface/peopleInterface";
import { axiosInstance } from "./axiosInstance";

export default async function getPeopleByIdApi({
	peopleId,
}: {
	peopleId: number;
}): Promise<People> {
	try {
		const response = await axiosInstance.get(`/people/${peopleId}`);
		return response.data.data as People;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
