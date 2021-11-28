import { ComponentProps } from 'react';
import { Modal as AntModal, Col, Row } from 'antd';

import { Button } from '../button';

export const Modal: React.FC<ComponentProps<typeof AntModal>> = ({
  className,
  children,
  ...props
}) => (
  <AntModal
    className={className}
    footer={
      props.footer || (
        <Row gutter={[10, 10]}>
          <Col>
            <Button type="primary" onClick={props.onOk}>
              Ok
            </Button>
          </Col>
          <Col>
            <Button type="ghost" onClick={props.onCancel}>
              Cancel
            </Button>
          </Col>
        </Row>
      )
    }
    {...props}
  >
    {children}
  </AntModal>
);
