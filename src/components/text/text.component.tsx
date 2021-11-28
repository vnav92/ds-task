import { ComponentProps } from 'react';
import classNames from 'classnames';

import { Typography } from 'antd';

import styles from './text.module.scss';

const { Text: AntText } = Typography;

export const Text: React.FC<ComponentProps<typeof AntText>> = ({
  className,
  ...props
}) => <AntText className={classNames(styles.text, className)} {...props} />;
