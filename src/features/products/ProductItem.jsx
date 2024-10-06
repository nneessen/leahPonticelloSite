import React from "react";
import Card from "../../ui/Card";

export default function ProductItem({
  productName,
  productDescription,
  children,
}) {
  return (
    <>
      <Card title={productName} body={productDescription}>
        {children}
      </Card>
    </>
  );
}
