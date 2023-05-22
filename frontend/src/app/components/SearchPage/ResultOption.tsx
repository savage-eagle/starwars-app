import { Link } from "react-router-dom";

export default function ResultOption({
	title,
	option,
	detail,
}: {
	title: string;
	option: string;
	detail: any;
}) {
	return (
		<>
			<div>
				<div className="item-content flex items-center justify-between w-full py-2">
					<p className="my-[17px] text-[16px] font-bold">{title}</p>
					<Link
						to={{
							pathname: `/details/${option}`,
						}}
						state={{
							option: option,
							detail: detail,
						}}
					>
						<button className="h-[34px] my-[10px] px-8 py-2 rounded-17">
							SEE DETAILS
						</button>
					</Link>
				</div>
				<div className="divider w-full h-1 bg-gray-300"></div>
			</div>
		</>
	);
}
