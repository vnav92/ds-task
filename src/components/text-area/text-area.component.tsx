import { ComponentProps } from 'react'
import { FieldProps } from 'formik'
import { Input } from 'antd'
import classNames from 'classnames'

import styles from './text-area.module.scss'

export const TextArea: React.FC<
  FieldProps & ComponentProps<typeof Input.TextArea>
> = ({ field, form, ...props }) => (
  <>
    <Input.TextArea {...field} {...props} />
    <div
      className={classNames(styles.lengthCounter, {
        [styles.lengthCounterError]:
          form.errors[field.name] && form.touched[field.name]
      })}
    >
      {field.value.split('').length} / {props.maxLength}
    </div>
  </>
)
