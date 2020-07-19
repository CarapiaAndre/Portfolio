import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MobileListButton = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: '0',
        padding: theme.spacing(1),
        width: '100%',
      }
}))(Button);

export default MobileListButton;