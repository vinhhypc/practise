"use client";

import List from "@/Context/List";
import Row from "@/Context/Row";
import { products } from "@/RenderProp/products";

export default function App() {
  return (
    <List
      items={products}
      renderItem={(product) => <Row title={product.title} />}
    />
  );
}
