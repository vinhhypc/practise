import { Products } from "@/MyComponent/ContentText";

const ProductsSection = () => {
  return (
    <div>
      <h1>Products List</h1>
      <Products
        render={(products) => (
          <div>
            {products?.map((product) => (
              <div key={product.id}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        )}
      />
    </div>
  );
};
export default ProductsSection;
