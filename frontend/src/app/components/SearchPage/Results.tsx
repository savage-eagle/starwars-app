import ResultOption from "./ResultOption";

export default function Results({
	searchResults,
	option,
	isLoading,
}: {
	searchResults: any;
	option: any;
	isLoading: boolean;
}) {
	return (
		<>
			<div className="flex flex-col mt-8 h-full w-[582px] max-h-[582px] rounded-md shadow-md bg-white mx-4 p-6 border border-solid border-gray-300">
				<p className="text-[18px] font-bold mb-4">Results</p>
				<div className="w-full h-1 bg-gray-300"></div>
				{searchResults.length > 0 ? (
					<div className="overflow-y-auto">
						{searchResults.map((result: any, index: number) => {
							return (
								<ResultOption
									key={index}
									title={result.title || result.name}
									option={option}
									detail={result}
								/>
							);
						})}
					</div>
				) : (
					<div className="flex items-center justify-center text-center min-h-[489px] mt-4 text-gray-400 font-bold">
						{isLoading ? (
							<p>Searching...</p>
						) : (
							<p>
								There are zero matches.
								<br />
								Use the form to search for People or Movies.
							</p>
						)}
					</div>
				)}
			</div>
		</>
	);
}
