import { ComponentProps } from 'react';
import { FieldProps } from 'formik';
import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import styles from './text-input.module.scss';

type TextInputProps = {
  tooltipContent?: React.ReactNode;
  className?: string;
};

export const TextInput: React.FC<
  TextInputProps & FieldProps & ComponentProps<typeof Input>
> = ({ field, form, tooltipContent, className, ...props }) => (
  <div className={styles.textInputWrapper}>
    <Input
      className={className}
      suffix={
        tooltipContent && (
          <Tooltip title={tooltipContent}>
            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
          </Tooltip>
        )
      }
      {...field}
      {...props}
    />
  </div>
);
