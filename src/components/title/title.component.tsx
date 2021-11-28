import { ComponentProps } from 'react';
import classNames from 'classnames';

import { Typography } from 'antd';

import styles from './title.module.scss';

const { Title: AntTitle } = Typography;

export const Title: React.FC<ComponentProps<typeof AntTitle>> = ({
  className,
  ...props
}) => <AntTitle className={classNames(styles.title, className)} {...props} />;
