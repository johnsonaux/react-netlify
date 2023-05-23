const products = [
    {title: 'Gabbage', id: 1},
    {title: 'PC', id: 2},
    {title: 'Pillow', id: 3}
]

const listItems = products.map(product =>
    <li id={product.id}>
        {product.title}
    </li>
);

export default function Shopping() {
    return(
        <ul>
            {listItems}
        </ul>
    )
}
