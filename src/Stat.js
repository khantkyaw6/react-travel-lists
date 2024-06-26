export default function Stat({ items }) {
	const packedItems = items.filter((item) => item.packed).length;
	const percentPackedItems = Math.round((packedItems / items.length) * 100);

	return (
		<footer className='stats'>
			{items.length > 0 ? (
				<em>
					You have {items.length} items on your list, and you already
					packed {packedItems} items ({percentPackedItems}%).
				</em>
			) : (
				<em>Start adding some items in your packing list 🚀</em>
			)}
		</footer>
	);
}
