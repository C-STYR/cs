import Link from "next/link";
// components for use with portableText
import { h1, codeSpan, subHeading, link } from "./portableText.css"

export const H1 = ({children}) => {
    return <h1 className={ h1 }>{ children }</h1>
}

export const H2 = ({children}) => {
    return <h2 className={ subHeading }>{ children }</h2>
}

export const H3 = ({children}) => {
    return <h3 className={ subHeading }>{ children }</h3>
}

export const H4 = ({children}) => {
    return <h4 className={ subHeading }>{ children }</h4>
}

export const CodeSpan = ({ children }) => {
    return <span className={codeSpan}>{children}</span>
}

export const NextLink = ({ children, value}) => {
    const rel = !value.href.startsWith("/") ? 'noreferrer noopener' : undefined
    return <Link className={link} href={value.href} rel={rel}>{children}</Link>
}