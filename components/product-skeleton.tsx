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
import { Skeleton } from "./ui/skeleton";

export const ProductSkeleton = () => {
  return (
    <div className="bg-white select-none rounded-xl border p-3 space-y-4 flex flex-col justify-between">
      {/* Images and Actions */}
      <div className="aspect-square bg-white rounded-xl relative">
        <Skeleton className="w-full h-full rounded-md" />
      </div>

      {/* Description */}
      <div className="flex flex-col gap-y-2">
        <Skeleton className="w-3/4 h-6" />
        <Skeleton className="w-1/4 h-4" />
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Skeleton className="w-16 h-6" />
        <Skeleton className="w-8 h-8 rounded-md flex items-center justify-center">
          <ShoppingCart size={20} className="text-white" />
        </Skeleton>
      </div>
    </div>
  );
};
