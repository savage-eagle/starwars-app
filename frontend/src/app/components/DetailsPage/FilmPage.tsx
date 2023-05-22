import { People } from "src/app/interface/peopleInterface";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getPeopleByIdApi from "src/app/api/getPeopleByIdApi";
import { Link } from "react-router-dom";
import { Fragment } from "react";

export default function FilmPage({ detail }: { detail: any }) {
	const [peoples, setPeoples] = useState<People[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const searchPeoplesQuery = useQuery<People[], any>({
		queryKey: ["searchForMovies", detail.characters],
		queryFn: async () => {
			const peoples: People[] = [];
			for (const peopleId of detail.characters) {
				try {
					const response = await getPeopleByIdApi({ peopleId });
					peoples.push(response);
				} catch (error) {
					console.error(error);
				}
			}
			return peoples;
		},
		onSuccess: (data: People[]) => {
			setPeoples(data);
			setIsLoading(false);
		},
		onError: (error: any) => {
			console.error(error);
			setIsLoading(false);
		},
		enabled: true,
	});

	useEffect(() => {
		searchPeoplesQuery.refetch();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [detail.films]);

	return (
		<>
			<div className="w-[804px] min-h-[537px] rounded-md shadow-md bg-white p-[30px] mt-[30px] border border-solid border-gray-300 flex flex-col justify-between">
				<div>
					<p className="text-[18px] font-bold text-black mb-[30px]">
						{detail.title}
					</p>

					<div className="flex flex-col md:flex-row">
						<div className="w-full md:w-[322px] md:mr-[100px] flex flex-col">
							<p className="text-[16px] font-bold text-black">
								Opening Crawl
							</p>

							<div className="w-full h-[1px] bg-gray-300 mt-[4px]"></div>

							<div className="w-[220px] text-[14px] leading-17 my-5px 0 30px">
								{detail.opening_crawl}
							</div>
						</div>

						<div className="w-full md:w-[322px] min-h-[305px]">
							<p className="text-[16px] font-bold text-black">
								Characters
							</p>

							<div className="w-full h-[1px] bg-gray-300 mt-[4px]"></div>

							<div className="mt-2 flex-grow">
								{isLoading ? (
									<>
										<p>Loading...</p>
									</>
								) : (
									<>
										{peoples.length === 0 ? (
											<p>No characters found</p>
										) : (
											<>
												{peoples.map(
													(
														people: People,
														index: number
													) => {
														return (
															<Fragment
																key={index}
															>
																<Link
																	key={index}
																	to={{
																		pathname: `/details/peoples`,
																	}}
																	className="text-blue-500 text-base"
																	state={{
																		option: "peoples",
																		detail: people,
																	}}
																>
																	{
																		people.name
																	}
																</Link>
																{index !==
																	detail
																		.characters
																		.length -
																		1 &&
																	", "}
															</Fragment>
														);
													}
												)}
											</>
										)}
									</>
								)}
							</div>
						</div>
					</div>
				</div>

				<div className="mt-auto">
					<a href="/">
						<button className="w-[187px] rounded-[17px] mt-5">
							BACK TO SEARCH
						</button>
					</a>
				</div>
			</div>
		</>
	);
}
