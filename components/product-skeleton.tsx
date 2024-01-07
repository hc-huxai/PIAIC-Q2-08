"use client";

// * Global Imports
import { ShoppingCart } from "lucide-react";

// * Local Imports
import { Skeleton } from "@/components/ui/skeleton";

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
