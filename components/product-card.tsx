"use client";

// * Local Imports
import { Product } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import IconButton from "./ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./ui/currency";
import { Button } from "./ui/button";
import { MouseEventHandler } from "react";

export const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  const onPreview = () => {};

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
  };

  const formatStr = (str: string) => {
    return str
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 flex flex-col justify-between hover:bg-gray-100 transition-all"
    >
      {/* Images and Actions */}
      <div className="aspect-square bg-white rounded-xl relative">
        <Image
          src={product.image}
          alt="Image"
          fill
          className="aspect-square object-contain rounded-md"
        />
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg group-hover:text-teal-800 transition-all">
          {product.title}
        </p>
        <p className="text-sm text-gray-500">{formatStr(product.category)}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={product.price} />{" "}
        <Button variant={"default"} size={"icon"} onClick={onAddToCart}>
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};
