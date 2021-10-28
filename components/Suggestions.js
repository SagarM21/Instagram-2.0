import { useEffect, useState } from "react";
import faker from "faker";

function Suggestions() {
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const suggestions = [...Array(5)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: 1,
		}));
		setSuggestions(suggestions);
	}, []);
	return (
		<div>
			<div className='mt-4 ml-10'>
				<div className='flex justify-between text-sm mb-5'>
					<h3 className='text-sm font-bold text-gray-400'>
						Suggestions for you
					</h3>
					<buttons className='text-gray-600 font-semibold'>See All</buttons>
				</div>
			</div>
			{suggestions.map((profile) => (
				<div
					key={profile.id}
					className='flex items-center justify-between mt-3 ml-7'
				>
					<img
						className='w-10 h-10 rounded-full border p-[2px]'
						src={profile.avatar}
						alt=''
					/>
					<div className='flex-1 ml-4'>
						<h2 className='font-semibold text-sm'>{profile.username}</h2>
						<h3 className='text-xs text-gray-400'>
							Works at {profile.company.name}
						</h3>
					</div>
					<button className='text-blue-400 text-xs font-bold'>Follow</button>
				</div>
			))}
		</div>
	);
}

export default Suggestions;
