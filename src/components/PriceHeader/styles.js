import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    customColor: {
      backgroundColor: "#e69"
    },
    customHeight: {
      minHeight: 200
    },
    offset: theme.mixins.toolbar
  }));
  