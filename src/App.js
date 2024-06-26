import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stat from "./Stat";

const App = () => {
	const [items, setItems] = useState([]);

	const addItem = (item) => {
		setItems([...items, item]);
	};

	const removeItem = (id) => {
		const removedItems = items.filter((item) => item.id !== id);
		setItems([...removedItems]);
	};

	const clearItems = () => {
		setItems([]);
	};

	const toggleHandler = (id) => {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	};

	return (
		<div className='app'>
			<Logo />
			<Form addItem={addItem} />
			<PackingList
				items={items}
				removeItem={removeItem}
				clearItems={clearItems}
				toggleHandler={toggleHandler}
			/>
			<Stat items={items} />
		</div>
	);
};

export default App;
