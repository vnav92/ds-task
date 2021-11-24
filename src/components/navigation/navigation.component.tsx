import { Link, useLocation } from 'react-router-dom';
import Icon from '@ant-design/icons';
import classNames from 'classnames';

import { NAVIGATION_ITEMS } from './navigation.const';

import styles from './navigation.module.scss';

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.listWrapper}>
        {NAVIGATION_ITEMS.map(item => (
          <li className={styles.listItem} key={item.route}>
            <Link className={styles.link} to={item.route}>
              <Icon component={item.icon} className={classNames(styles.icon, { [styles.activeIcon]: pathname === item.route })}/>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}