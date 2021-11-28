import { Button as AntButton } from 'antd';
import classNames from 'classnames';
import React, { ComponentProps } from 'react';

import styles from './button.module.scss';

export const Button: React.FC<ComponentProps<typeof AntButton>> = ({
  className,
  ...props
}) => (
  <AntButton
    className={classNames(
      {
        [styles.primaryButton]: props.type === 'primary',
        [styles.ghostButton]: props.type === 'ghost',
      },
      styles.button,
      className
    )}
    {...props}
  />
);
