import DashboardScreen from '../../screens/dashboard/index';
import LivefeedScreen from '../../screens/livefeed';
import NotificationScreen from '../../screens/notifications';
import ProfileScreen from '../../screens/profile';
import UploadReportScreen from '../../screens/uploadReport';
import UploadResultScreen from '../../screens/uploadResult';
import HomeIcon from '../../assets/svg/HomeIcon';
import { ReactNode } from 'react';


export interface OnboardingData {
    id: string;
    name: string;
    title: string;
    component: any;
    icon: ReactNode;
  
  }
export const user_regular: OnboardingData[] = [
  {
    id: '1',
    name: 'dashboard',
    title: 'Dashboard',
    component: DashboardScreen,
    icon: <HomeIcon />
  },

  {
    id: '2',
    name: 'livefeed',
    title: 'Dashboard',
    component: LivefeedScreen,
    icon: <HomeIcon />
  },
  {
    id: '3',
    name: 'notification',
    title: 'Dashboard',
    component: NotificationScreen,
    icon: <HomeIcon />
  },
  {
    id: '4',
    name: 'profile',
    title: 'Dashboard',
    component: ProfileScreen,
    icon: <HomeIcon />
  },
];

export const user_agent = [
    {
      id: '1',
      name: 'dashboard',
      title: 'Dashboard',
      component: DashboardScreen,
      icon: <HomeIcon />
    },
  
    {
      id: '2',
      name: 'results',
      title: 'Dashboard',
      component: UploadResultScreen,
      icon: <HomeIcon />
    },
    {
      id: '3',
      name: 'report',
      title: 'Dashboard',
      component: UploadReportScreen,
      icon: <HomeIcon />
    },
    {
      id: '4',
      name: 'profile',
      title: 'Dashboard',
      component: ProfileScreen,
      icon: <HomeIcon />
    },
  ];
