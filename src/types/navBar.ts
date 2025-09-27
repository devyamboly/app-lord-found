


export interface NavBar{
    className?: string, 
    href: string, 
    children: React.ReactNode
}


export type ButtonMovil = {

    isOpen?: boolean
	onToggle?: () => void
	className?: string
	label?: string
	size?: "sm" | "md" | "lg"
	colorClass?: string

}

export type ButtonNav = {
  href: string
  children: React.ReactNode   
  className?: string  
  colorClass?: string 
}