import { PEOPLE, SearchType } from "src/app/interface/peopleInterface";
import Results from "./Results";
import Search from "./Search";
import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import searchResultApi from "src/app/api/searchResultApi";

export default function SearchPage() {
	const [selectedOption, setSelectedOption] = useState<SearchType>(PEOPLE);
	const [searchResults, setSearchResults] = useState([]);
	const [inputText, setInputText] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSearchTypeChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setSelectedOption(event.target.value as SearchType);
	};

	const handleSearchTermChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setInputText(event.target.value);
	};

	const searchResultQuery = useQuery({
		queryKey: ["searchTermQuery"],
		queryFn: () =>
			searchResultApi({
				inputText: inputText,
				searchOption: selectedOption,
			}),
		onSuccess: async (response: any) => {
			setSearchResults(response.data);
			setIsLoading(false);
		},
		onError: (error: any) => {
			console.error(error);

			setSearchResults([]);
			setIsLoading(false);
		},
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		enabled: false,
	});

	const handleSearchButton = useCallback(() => {
		// If is loading, do nothing
		if (isLoading) {
			return;
		}

		setIsLoading(true);
		searchResultQuery.refetch();
	}, [isLoading, searchResultQuery]);

	// Cool effect to select the input text when user press enter
	useEffect(() => {
		const handleEnterKey = (event: KeyboardEvent) => {
			if (event.key === "Enter") {
				handleSearchButton();
			}
		};

		window.addEventListener("keydown", handleEnterKey);

		return () => {
			window.removeEventListener("keydown", handleEnterKey);
		};
	}, [handleSearchButton]);

	return (
		<>
			<Search
				handleInputChange={handleSearchTermChange}
				handleOptionChange={handleSearchTypeChange}
				handleSearchButton={handleSearchButton}
				inputText={inputText}
				isLoading={isLoading}
				option={selectedOption}
			/>
			<Results
				searchResults={searchResults}
				option={selectedOption}
				isLoading={isLoading}
			/>
		</>
	);
}
