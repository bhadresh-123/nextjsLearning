import ProductButton from "./ProducrButton";

const ProductData = async () => {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
};

const ProductList = async () => {
  const data = await ProductData();
  return (
    <div>
      <h1>Product List</h1>
      {data.map((product) => (
        <div>
          <h3> Name:{product.title}</h3>
          <ProductButton price={product.price} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
