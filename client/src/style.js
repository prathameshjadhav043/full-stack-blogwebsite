import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        // position: 'fixed',
        borderRadius: 15,
        height: 80,
        margin: '30px 0px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        opacity: 0.7
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '15px',
    },
}));