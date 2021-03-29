import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import WatchOutlinedIcon from '@material-ui/icons/WatchOutlined';
import CasinoOutlinedIcon from '@material-ui/icons/CasinoOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import EventSeatOutlinedIcon from '@material-ui/icons/EventSeatOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import WeekendOutlinedIcon from '@material-ui/icons/WeekendOutlined';

const categories = [
  {
    name: 'املاک',
    icon: () => <HomeWorkOutlinedIcon fontSize='small' />,
    value: 'real-estate',
  },
  {
    name: 'وسایل نقلیه',
    icon: () => <DriveEtaOutlinedIcon fontSize='small' />,
    value: 'vehicles',
  },
  {
    name: 'لوازم الکترونیکی',
    icon: () => <PhoneIphoneOutlinedIcon fontSize='small' />,
    value: 'electronic-devices',
  },
  {
    name: 'مربوط به خانه',
    icon: () => <WeekendOutlinedIcon fontSize='small' />,
    value: 'home-and-kitchen',
  },
  {
    name: 'خدمات',
    icon: () => <LocalShippingOutlinedIcon fontSize='small' />,
    value: 'services',
  },
  {
    name: 'وسایل شخصی',
    icon: () => <WatchOutlinedIcon fontSize='small' />,
    value: 'personal-goods',
  },
  {
    name: 'سرگرمی و فراغت',
    icon: () => <CasinoOutlinedIcon fontSize='small' />,
    value: 'entertainment',
  },
  {
    name: 'اجتماعی',
    icon: () => <PeopleAltOutlinedIcon fontSize='small' />,
    value: 'social-services',
  },
  {
    name: 'برای کسب و کار',
    icon: () => <EventSeatOutlinedIcon fontSize='small' />,
    value: 'businesses',
  },
  {
    name: 'استخدام و کاریابی',
    icon: () => <BusinessCenterOutlinedIcon fontSize='small' />,
    value: 'jobs',
  },
];

export default categories;
