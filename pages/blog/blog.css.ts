import { style } from "@vanilla-extract/css"
import theme from "../../styles/theme"

export const blogBase = style({
    display: 'flex',
    flexDirection: 'column',
    margin: 120,
    color: 'white'
})

export const linkBase = style({
    color: theme.palePink,
    textDecoration: 'none', 
    fontSize: 20,
    marginBottom: 30,
})

export const blogWrapper = style({
    marginLeft: 70,
})

export const blogH1 = style({
    color: theme.pink
})