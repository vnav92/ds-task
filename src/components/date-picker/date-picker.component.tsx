import { ComponentProps } from 'react';
import { DatePicker as AntDatePicker } from 'antd';
import { FieldProps } from 'formik';
import moment from 'moment';
import classNames from 'classnames';

import styles from './date-picker.module.scss';

export const DatePicker: React.FC<
  FieldProps & ComponentProps<typeof AntDatePicker>
> = ({ field, form, className, ...props }) => (
  <AntDatePicker
    className={classNames(
      {
        [styles.datePickerError]:
          form.errors[field.name] && form.touched[field.name],
      },
      styles.datePicker,
      classNames
    )}
    {...field}
    onChange={(date, dateString) => form.setFieldValue(field.name, dateString)}
    value={field.value ? moment(field.value) : null}
    {...props}
  />
);
