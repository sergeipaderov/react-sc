import {
    createGlobalStyle
} from 'styled-components'
import Background from '../images/wall.jpg'

const globalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
    }

    body {
        padding: 0;
        margin: 0;
        background-image: url(${Background});
        background-position: center;
        height: 100%;
        width: 100%;
        font-family: 'Oswald', sans-serif;
    }
`

export default globalStyle