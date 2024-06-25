import React, { useState } from "react";

const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: false },
	{ id: 2, description: "Socks", quantity: 12, packed: true },
	{ id: 3, description: "Chargers", quantity: 6, packed: false },
];

function Logo() {
	return <h1>Far Away</h1>;
}

function Form({ addItem }) {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();
		const newItem = {
			id: Date.now(),
			description,
			quantity,
			packed: false,
		};

		addItem(newItem);
		setDescription("");
		setQuantity(1);
	}

	return (
		<form className='add-form' onSubmit={handleSubmit}>
			<h3>What do you need for your trip 👩?</h3>
			<select
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}
			>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type='text'
				placeholder='Item...'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
}

function PackingList({ items }) {
	return (
		<div className='list'>
			<ul>
				{items.map((item) => (
					<Item key={item.id} item={item} />
				))}
			</ul>
		</div>
	);
}

function Item({ item }) {
	return (
		<li>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.description}
			</span>
			<button> ❌ </button>
		</li>
	);
}

function Stat({ items }) {
	const packedItems = items.filter((item) => item.packed).length;

	return (
		<footer className='stats'>
			<em>
				You have {items.length} items on your list, and you already
				packed {packedItems} items.
			</em>
		</footer>
	);
}

const App = () => {
	const [items, setItems] = useState(initialItems);

	const addItem = (item) => {
		setItems([...items, item]);
	};

	return (
		<div className='app'>
			<Logo />
			<Form addItem={addItem} />
			<PackingList items={items} />
			<Stat items={items} />
		</div>
	);
};

export default App;
