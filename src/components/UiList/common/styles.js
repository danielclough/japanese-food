import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    button: {
        height: '100%',
        display: 'grid',
        justifyContent: 'start',
        alignItems: "start"
    },
    img: {
        width: '100%',
    },
    card: {
        height: '100%',
        padding: '10px',
    },
    description: {
        padding: '5px 10px',
        width:"80%"
    },
}));