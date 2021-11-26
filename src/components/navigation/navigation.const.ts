import { ProfileOutlined, EditOutlined } from '@ant-design/icons';

type NavigationItem = {
  route: string;
  icon: React.ForwardRefExoticComponent<any>;
};

export enum ApplicationRoutes {
  FORM = '/form',
  PROFILE = '/profile',
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    route: ApplicationRoutes.FORM,
    icon: EditOutlined,
  },
  {
    route: ApplicationRoutes.PROFILE,
    icon: ProfileOutlined,
  },
];
