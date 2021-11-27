import { Navigation, Footer } from '../';

import styles from './main-layout.module.scss';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className={styles.wrapper}>
    <div className={styles.contentWrapper}>
      <Navigation />
      <main className={styles.content}>{children}</main>
    </div>
    <div className={styles.footer}>
      <Footer />
    </div>
  </div>
);
