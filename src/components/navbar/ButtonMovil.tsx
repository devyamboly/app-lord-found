"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import type { ButtonMovil } from "@/types/navBar"

export default function ButtonMovil({
	isOpen,
	onToggle,
	className,
	label = "Abrir menú",
	size = "md",
	colorClass = "text-black",
}: ButtonMovil) {
	const [internalOpen, setInternalOpen] = React.useState(false)
	const open = isOpen ?? internalOpen

	const handleClick = () => {
		onToggle?.()
		if (isOpen === undefined) setInternalOpen(v => !v)   
	}

	// Tamaños predefinidos con clases estáticas Tailwind
	const sizeClasses =
		size === "sm"
			? { btn: "w-8 h-8", barW: "w-5", top: "-translate-y-[6px]", bottom: "translate-y-[6px]" }
			: size === "lg"
			? { btn: "w-12 h-12", barW: "w-8", top: "-translate-y-[10px]", bottom: "translate-y-[10px]" }
			: { btn: "w-10 h-10", barW: "w-6", top: "-translate-y-[8px]", bottom: "translate-y-[8px]" } // md

	// Barras heredan color via bg-current desde text-* del contenedor
	const barBase = cn(
		"absolute left-1/2 top-1/2 block h-[2px] -translate-x-1/2 rounded-full bg-current",
		"transition-all duration-300 ease-in-out origin-center"
	)

	return (
		<button
			type="button"
			aria-label={open ? "Cerrar menú" : label}
			aria-expanded={open}
			onClick={handleClick}
			className={cn(
				"relative inline-flex items-center justify-center",
				sizeClasses.btn,
				colorClass,
				"focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70 focus-visible:ring-offset-2",
				className
			)}
		>
			{/* Barra superior */}
			<span
				aria-hidden
				className={cn(
					barBase,
					sizeClasses.barW,
					open ? "translate-y-0 rotate-45" : cn(sizeClasses.top, "rotate-0")
				)}
			/>

			{/* Barra central */}
			<span
				aria-hidden
				className={cn(
					barBase,
					sizeClasses.barW,
					open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
				)}
			/>

			{/* Barra inferior */}
			<span
				aria-hidden
				className={cn(
					barBase,
					sizeClasses.barW,
					open ? "translate-y-0 -rotate-45" : cn(sizeClasses.bottom, "rotate-0")
				)}
			/>
		</button>
	)
}

