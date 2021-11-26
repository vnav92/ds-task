import React from 'react';
import { Form } from 'antd';

import styles from './form-group.module.scss';

type FormGroupProps = {
  label: React.ReactNode,
  validationError: React.ReactNode | null;
  htmlFor: string;
  children: React.ReactNode,
}

export const FormGroup: React.FC<FormGroupProps> = ({
  label,
  validationError,
  htmlFor,
  children
}) => {
  return (
    <>
      <Form.Item
        label={label}
        labelCol={{ span: 24 }}
        validateStatus={!!validationError ? 'error' : ''}
        help={validationError}
        htmlFor={htmlFor}
        className={styles.formItem}
      >
        {children}
      </Form.Item>
    </>
  
  )
}