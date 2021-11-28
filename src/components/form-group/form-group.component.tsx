import React from 'react';
import { Form } from 'antd';
import classNames from 'classnames';

import styles from './form-group.module.scss';

type FormGroupProps = {
  label: React.ReactNode;
  validationError: React.ReactNode | null;
  htmlFor: string;
  className?: string;
  wrapperClassName?: string;
  isRequired?: boolean;
  children: React.ReactNode;
};

export const FormGroup: React.FC<FormGroupProps> = ({
  label,
  validationError,
  htmlFor,
  wrapperClassName,
  isRequired = true,
  className,
  children,
}) => {
  return (
    <div className={classNames(styles.formItemWrapper, wrapperClassName)}>
      <Form.Item
        label={
          <>
            {label}
            {isRequired && <span className={styles.requiredMarker}>*</span>}
          </>
        }
        labelCol={{ span: 24 }}
        validateStatus={!!validationError ? 'error' : ''}
        help={validationError}
        htmlFor={htmlFor}
        className={className}
      >
        {children}
      </Form.Item>
    </div>
  );
};
