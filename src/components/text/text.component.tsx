import { ComponentProps } from 'react';

import { Typography } from 'antd';

const { Text: AntText } = Typography;

export const Text: React.FC<ComponentProps<typeof AntText>> = ({
  className,
  ...props
}) => <AntText className={className} {...props} />;
