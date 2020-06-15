import LocalMallIcon from '@material-ui/icons/LocalMall';
import FastfoodIcon from '@material-ui/icons/Fastfood';
// import FeedbackIcon from '@material-ui/icons/Feedback';
// import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const DRAWER_ITEMS = [
    { to: '/webCheckIn', isExact: false, text: 'Check In', icon: LocalMallIcon },
    { to: '/webCheckIn/checkin', isExact: true, text: 'Ancillary', icon: FastfoodIcon },
    // { to: '/webCheckIn/checkin1', isExact: true, text: 'Feedback', icon: FeedbackIcon },
    // { to: '/webCheckIn/checkin2', isExact: true, text: 'Contact', icon: ContactSupportIcon },
    { to: '/logout', isExact: true, text: 'Logout', icon: ExitToAppIcon },

];
export default DRAWER_ITEMS;

// '', 'Ancillary', 'Feedback', 'Contacts'