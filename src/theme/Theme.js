import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#6481b4',
            contrastText: '#fff',
        },
        secondary: {
            main: '#0044ff',
            contrastText: '#fff',
        },
    },
});

export default theme;
