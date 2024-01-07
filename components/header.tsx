// * Global Imports
import Image from "next/image";

// * Local Imports
import logo from "@/assets/img/logo.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

export const Header = ({ className }: { className?: string }) => {
  return (
    <header className={cn("border-b", className)}>
      <div className="h-16 flex items-center justify-between px-6">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="huxai-logo"
            className={"h-12 w-fit object-contain cursor-pointer"}
            priority
          />
        </Link>

        <Button variant={"ghost"} size={"icon"}>
          <ShoppingCart size={20} />
        </Button>
      </div>
    </header>
  );
};
