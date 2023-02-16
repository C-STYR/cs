import { style } from "@vanilla-extract/css"
import theme from "../styles/theme"

export const paletteContainer = style({
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
    color: 'white',
    alignItems: 'center'
})

export const mainNav = style({
    display: 'flex',
    marginLeft: 60,
    marginTop: 20,
})

export const navItem = style({
    margin: 10,
})

export const navLink = style({
    color: theme.palePink,
    fontSize: 22,
    textDecoration: 'none'
})