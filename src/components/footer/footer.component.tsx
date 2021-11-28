import { LinkedinOutlined } from '@ant-design/icons';

import { Text } from '../../components';

import styles from './footer.module.scss';

const LINKED_IN_HREF =
  'https://www.linkedin.com/in/mateusz-jankowski-a98472164/';

export const Footer = () => (
  <footer className={styles.footerWrapper}>
    <Text className={styles.footerText}>
      Designed and implemented by Mateusz Jankowski (2021)
    </Text>
    <a href={LINKED_IN_HREF} target="_blank" rel="noreferrer">
      <LinkedinOutlined className={styles.icon} />
    </a>
  </footer>
);
