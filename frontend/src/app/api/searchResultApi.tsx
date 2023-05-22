import { axiosInstance } from "./axiosInstance";

export default async function searchResultApi({
	inputText,
	searchOption,
}: {
	inputText: string;
	searchOption: string;
}): Promise<object> {
	return axiosInstance
		.get(`/${searchOption}`, {
			params: {
				keyword: inputText,
			},
		})
		.then((response: any) => {
			return response.data;
		})
		.catch((error: any) => {
			console.error(error);
			throw error;
		});
}
