import { Navigation } from '../navigation';

import styles from './main-layout.module.scss';

type MainLayoutProps = {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

  return (
    <div className={styles.wrapper}>
      <Navigation/>
        <div className={styles.content}>
          {children}
        </div>
    </div>
  )
}