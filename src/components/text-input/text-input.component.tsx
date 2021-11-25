import { FieldProps } from 'formik';
import { Input } from 'antd';
import { ComponentProps } from 'react';

export const TextInput: React.FC<FieldProps & ComponentProps<typeof Input>> = ({
  field,
  form,
  ...props
}) => (
  <Input {...field} {...props} />
)