"use client";
import List from "@/RenderProp/List";
import Row from "@/RenderProp/Row";
import { products } from "@/RenderProp/products";
import React from "react";

export default function page() {
  return (
    <div className="w-screen h-screen">
      <List
        items={products}
        renderItem={(product, isHighlighted) => (
          <Row
            key={product.id}
            title={product.title}
            isHighlighted={isHighlighted}
          />
        )}
      />
    </div>
  );
}
