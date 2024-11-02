'use client'
import { ReactTyped } from "react-typed";


type TypedProps = {
    text: string[],
    className?:string
}
export const TypedComponent = ({ text,className }: TypedProps) => {

    return (
        <ReactTyped className={className} strings={text} typeSpeed={40} backSpeed={20} loop />
    )
}