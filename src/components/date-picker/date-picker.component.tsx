import { DatePicker as AntDatePicker } from 'antd';
import { ComponentProps } from 'react';
import { FieldProps } from 'formik';
import moment from 'moment';

export const DatePicker: React.FC<FieldProps & ComponentProps<typeof AntDatePicker>> = ({
  field,
  form,
  ...props
}) => (
  <AntDatePicker
    {...field}
    onChange={(date, dateString) => form.setFieldValue(field.name, dateString)}
    value={field.value ? moment(field.value) : null}
    {...props}
  />
)