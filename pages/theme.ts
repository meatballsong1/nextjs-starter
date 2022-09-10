import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: true,
    cssVarPrefix: '_c',
}

const theme = extendTheme({
    config,
    // other theme config
})

export default theme