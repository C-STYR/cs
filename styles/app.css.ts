import { globalStyle} from "@vanilla-extract/css"
import theme from "./theme"

globalStyle("body", {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: theme.bg,
    margin: 0,
    color: 'white'
})

