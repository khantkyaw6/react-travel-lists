import React from "react";

const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: false },
	{ id: 2, description: "Socks", quantity: 12, packed: true },
	{ id: 3, description: "Chargers", quantity: 6, packed: false },
];

function Logo() {
	return <h1>Far Away</h1>;
}
function Form() {
	function handleSubmit(e) {
		e.preventDefault();
		console.log(e.target.value);
	}

	return (
		<form className='add-form' onSubmit={handleSubmit}>
			<h3>What do you need for your trip 👩?</h3>
			<select>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
					return (
						<option value={num} key={num}>
							{num}
						</option>
					);
				})}
			</select>
			<input type='text' placeholder='Item...' />
			<button>Add</button>
		</form>
	);
}

function PackingList(params) {
	return (
		<div className='list'>
			<ul>
				{initialItems.map((item) => (
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

function Stat(params) {
	return (
		<footer className='stats'>
			<em>
				You have X items on your list, and you already packed x items
			</em>
		</footer>
	);
}

const App = () => {
	return (
		<div className='app'>
			<Logo />
			<Form />
			<PackingList />
			<Stat />
		</div>
	);
};

export default App;
