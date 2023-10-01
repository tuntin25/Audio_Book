// assets
import { IconBooks } from '@tabler/icons';

// constant
const icons = { IconBooks };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  // id: 'dashboard',
  // title: 'Thư Viện',
  id: 'dashboard',
  title: 'Thư Viện',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Thư Viện',
      type: 'item',
      url: '/library',
      icon: icons.IconBooks,
      breadcrumbs: false
    }
    
    // {
    //   id: 'default',
    //   title: 'Dashboard',
    //   type: 'item',
    //   url: '/dashboard/default',
    //   icon: icons.IconDashboard,
    //   breadcrumbs: false
    // }
  ]
};

export default dashboard;
