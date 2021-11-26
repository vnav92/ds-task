import { DatePicker as AntDatePicker } from 'antd';
import { ComponentProps } from 'react';
import { FieldProps } from 'formik';
import moment from 'moment';
import classNames from 'classnames';

import styles from './date-picker.module.scss';

export const DatePicker: React.FC<FieldProps & ComponentProps<typeof AntDatePicker>> = ({
  field,
  form,
  className,
  ...props
}) => (
  <AntDatePicker
    {...field}
    onChange={(date, dateString) => form.setFieldValue(field.name, dateString)}
    value={field.value ? moment(field.value) : null}
    className={classNames(styles.datePicker, className)}
    {...props}
  />
)