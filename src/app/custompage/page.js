import { Products } from "@/MyComponent/ContentText";
// Dùng để render 1 component với data giống nhau nhưng cách hiển thị khác nhau



const HomePage = () => {
  return (
    <div>
      <h1>Products List</h1>
      <Products
        render={(products) => (
          <ul>
            {products?.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        )}
      />
    </div>
  );
};

export default HomePage;
