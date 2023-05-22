import { useLocation } from "react-router-dom";
import { PEOPLE } from "src/app/interface/peopleInterface";
import PeoplePage from "./PeoplePage";
import FilmPage from "./FilmPage";

export default function DetailsPage() {
	let data = useLocation();

	return (
		<>
			{data.state.option === PEOPLE ? (
				<PeoplePage detail={data.state.detail} />
			) : (
				<FilmPage detail={data.state.detail} />
			)}
		</>
	);
}
