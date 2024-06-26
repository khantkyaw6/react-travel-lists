import { useState } from "react";
import Item from "./Item";

export default function PackingList({
	items,
	clearItems,
	removeItem,
	toggleHandler,
}) {
	const [sortBy, setSortBy] = useState("input");

	const sortHandler = (e) => {
		setSortBy(e.target.value);
	};

	if (sortBy === "input") items = items;
	if (sortBy === "description")
		items = items.slice().sort((a, b) => {
			return a.description.localeCompare(b.description);
		});
	if (sortBy === "packed")
		items = items.slice().sort((a, b) => {
			return Number(a.packed) - Number(b.packed);
		});

	return (
		<div className='list'>
			<ul>
				{items.map((item) => (
					<Item
						key={item.id}
						item={item}
						removeItem={removeItem}
						toggleHandler={toggleHandler}
					/>
				))}
			</ul>
			<div className='actions'>
				<select value={sortBy} onChange={sortHandler}>
					<option value='input'>Sort by input order</option>
					<option value='description'>Sort by description</option>
					<option value='packed'>Sort by packed status</option>
				</select>
				<button onClick={clearItems}>Clear lists</button>
			</div>
		</div>
	);
}
