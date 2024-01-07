"use client";

// * Global Imports
import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "@/types";
import { ProductCard } from "@/components/product-card";
import { Header } from "@/components/header";
import { ProductSkeleton } from "@/components/product-skeleton";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [productData, setProductData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  let [products, setProducts] = useState<React.ReactNode>();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  } else {
    getProducts();
  }

  async function getProducts() {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  return (
    <>
      <Header className="fixed top-0 left-0 z-10 bg-background w-screen" />
      {!loading ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[960px] mx-auto p-4 pt-20 max-[960px]:px-8 max-w-full">
            {productData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[960px] mx-auto p-4 pt-20 max-[960px]:px-8 max-w-full">
            {new Array(6).fill(0).map((skeleton, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
