import { ComponentProps } from 'react'
import { FieldProps } from 'formik'
import { Input, Tooltip } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'

type TextInputProps = {
  tooltipContent?: React.ReactNode
}

export const TextInput: React.FC<
  TextInputProps & FieldProps & ComponentProps<typeof Input>
> = ({ field, form, tooltipContent, ...props }) => (
  <Input
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
)
