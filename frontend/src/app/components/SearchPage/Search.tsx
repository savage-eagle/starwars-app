import { FILMS, PEOPLE } from "src/app/interface/peopleInterface";

export default function Search({
	inputText,
	handleInputChange,
	handleOptionChange,
	handleSearchButton,
	isLoading,
	option,
}: {
	inputText: string;
	handleInputChange: any;
	handleOptionChange: any;
	handleSearchButton: any;
	isLoading: boolean;
	option: string;
}) {
	return (
		<>
			<div className="flex flex-col rounded-md shadow-md bg-white w-full max-w-[350px] mx-4 my-8 p-6 border border-solid border-gray-300">
				<p className="text-[16px] font-semibold text-gray-700 mb-0">
					What are you searching for?
				</p>
				<div className="flex flex-row items-start mt-4">
					<label className="block relative pl-6 cursor-pointer text-[16px] font-bold mr-4">
						<input
							type="radio"
							value={PEOPLE}
							checked={option === PEOPLE ? true : false}
							onChange={handleOptionChange}
							className="absolute top-0 left-0 w-4 h-4 rounded-full btn-radio border-gray-300 border border-solid"
						/>
						People
					</label>

					<label className="block relative pl-6 cursor-pointer text-[16px] font-bold mr-4">
						<input
							type="radio"
							value={FILMS}
							checked={option === FILMS ? true : false}
							onChange={handleOptionChange}
							className="absolute top-0 left-0 w-4 h-4 rounded-full btn-radio border-gray-300 border border-solid"
						/>
						Movies
					</label>
				</div>

				<input
					type="text"
					name="text"
					placeholder={
						option === "people"
							? "e.g. Chewbacca, Yoda, Boba Fett"
							: "e.g. Return of the Jedi"
					}
					className="w-full h-10 rounded-md placeholder-gray-400 shadow-inset bg-white my-4 border border-solid border-gray-400 font-bold text-[14px] px-4 py-2 focus:border-black"
					autoComplete="off"
					value={inputText}
					onChange={handleInputChange}
				/>

				<button
					className="w-full text-white font-bold py-2 px-4 rounded-md"
					disabled={inputText === "" ? true : false}
					onClick={handleSearchButton}
				>
					{isLoading ? "SEARCHING..." : "SEARCH"}
				</button>
			</div>
		</>
	);
}
