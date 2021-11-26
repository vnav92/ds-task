import { Navigation } from '../';

import styles from './main-layout.module.scss';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className={styles.wrapper}>
    <Navigation />
    <main className={styles.content}>{children}</main>
  </div>
);
