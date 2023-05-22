import { Movie } from "src/app/interface/peopleInterface";
import { useEffect, useState } from "react";
import getFilmByIdApi from "src/app/api/getFilmByIdApi";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Fragment } from "react";

export default function PeoplePage({ detail }: { detail: any }) {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const searchMovieQuery = useQuery<Movie[], any>({
		queryKey: ["searchForMovies", detail.films],
		queryFn: async () => {
			const movies: Movie[] = [];
			for (const filmId of detail.films) {
				try {
					const response = await getFilmByIdApi({ filmId });
					movies.push(response);
				} catch (error) {
					console.error(error);
				}
			}
			return movies;
		},
		onSuccess: (data: Movie[]) => {
			setMovies(data);
			setIsLoading(false);
		},
		onError: (error: any) => {
			console.error(error);
			setIsLoading(false);
		},
		enabled: true,
	});

	useEffect(() => {
		searchMovieQuery.refetch();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [detail.films]);

	return (
		<>
			<div className="w-[804px] min-h-[537px] rounded-md shadow-md bg-white p-[30px] mt-[30px] border border-solid border-gray-300 flex flex-col justify-between">
				<div>
					<p className="text-[18px] font-bold text-black mb-[30px]">
						{detail.name}
					</p>

					<div className="flex flex-col md:flex-row">
						<div className="w-full md:w-[322px] md:mr-[100px] flex flex-col">
							<p className="text-[16px] font-bold text-black">
								Details
							</p>

							<div className="w-full h-[1px] bg-gray-300 mt-[4px]"></div>

							<>
								<ul className="list-disc mt-2 list-none">
									<li>
										<p className="mb-0">
											{"Birth Year: " + detail.birth_year}
										</p>
									</li>
									<li>
										<p className="mb-0">
											{"Gender: " + detail.gender}
										</p>
									</li>
									<li>
										<p className="mb-0">
											{"Eye Color: " + detail.eye_color}
										</p>
									</li>
									<li>
										<p className="mb-0">
											{"Hair Color: " + detail.hair_color}
										</p>
									</li>
									<li>
										<p className="mb-0">
											{"Height: " + detail.height}
										</p>
									</li>
									<li>
										<p className="mb-0">
											{"Mass: " + detail.mass}
										</p>
									</li>
								</ul>
							</>
						</div>

						<div className="w-full md:w-[322px] min-h-[305px]">
							<p className="text-[16px] font-bold text-black">
								Movies
							</p>

							<div className="w-full h-[1px] bg-gray-300 mt-[4px]"></div>

							<div className="mt-2 flex-grow">
								{isLoading ? (
									<>
										<p>Loading...</p>
									</>
								) : (
									<>
										{movies.length === 0 ? (
											<p>No movies found</p>
										) : (
											<>
												{movies.map(
													(
														movie: Movie,
														index: number
													) => {
														return (
															<Fragment
																key={index}
															>
																<Link
																	key={index}
																	to={{
																		pathname: `/details/films`,
																	}}
																	className="text-blue-500 text-base"
																	state={{
																		option: "films",
																		detail: movie,
																	}}
																>
																	{
																		movie.title
																	}
																</Link>
																{index !==
																	detail.films
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
						<button className="w-[187px] rounded-[17px]">
							BACK TO SEARCH
						</button>
					</a>
				</div>
			</div>
		</>
	);
}
