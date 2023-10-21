import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

interface ContainerProps {
    className: string
}

export const Container = ({ children, className }: PropsWithChildren<ContainerProps>) => {
    return (
        <div className={cn("mx-auto my-0", className)}>
            {children}
        </div>
    )
}