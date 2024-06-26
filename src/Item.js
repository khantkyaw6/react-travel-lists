export default function Item({ item, removeItem, toggleHandler }) {
	const itemHandler = (e, id) => {
		e.preventDefault();
		console.log("clicked");
		removeItem(id);
	};

	return (
		<li>
			<input
				type='checkbox'
				value={item.packed}
				onChange={() => toggleHandler(item.id)}
			/>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={(e) => itemHandler(e, item.id)}> ❌ </button>
		</li>
	);
}
