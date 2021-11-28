import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Text } from '../text';
import { ApplicationRoutes } from '../../components/navigation/navigation.const';
import styles from './no-data-information.module.scss';

export const NoDataInformation = () => (
  <div className={styles.noDataInformationWrapper}>
    <Text className={styles.header}>No data</Text>
    <div>
      <Text className={styles.explanation}>
        The content will be visible after filling in the form
      </Text>
      <Link to={ApplicationRoutes.FORM}>
        <ArrowRightOutlined className={styles.linkIcon} />
      </Link>
    </div>
  </div>
);
