import { FieldProps } from 'formik'
import { Input } from 'antd'
import { ComponentProps } from 'react'

export const TextArea: React.FC<
  FieldProps & ComponentProps<typeof Input.TextArea>
> = ({ field, form, ...props }) => <Input.TextArea {...field} {...props} />
