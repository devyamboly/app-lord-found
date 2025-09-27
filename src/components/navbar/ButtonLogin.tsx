
import { cn } from "@/lib/utils";
import Link from "next/link";
import { NavBar } from "@/types/navBar";

export default function ButtonLogin({className, href, children}: NavBar){

    return(
        <Link
            href={href}
            className={cn(
                "relative inline-flex items-center justify-center",
                " h-9 px-4 ",
                "border  border-white text-black no-underline shadow-xl/30",
                "transition-colors duration-300 overflow-hidden",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70 focus-visible:ring-offset-2",
                // after = capa amarilla que se expande al hover
                "after:content-[\"\"] after:absolute after:left-0 after:top-0 after:h-full after:w-0 after:z-0",
                "after:bg-zinc-200 after:transition-all after:duration-300 after:ease-in-out",
                "hover:text-black hover:after:w-full",
                className
            )}
            >
            <span className="relative z-10">{children}</span>
        </Link>

    );

}