import styles from './property-value.module.scss';

import classNames from 'classnames';

type PropertyValueProps = {
  labelClassName?: string;
  valueClassName?: string;
  className?: string;
  hasColon?: boolean;
  label: React.ReactNode;
  value: React.ReactNode;
};

export const PropertyValue: React.FC<PropertyValueProps> = ({
  className,
  labelClassName,
  valueClassName,
  hasColon = true,
  label,
  value,
}) => (
  <div className={classNames(styles.wrapper, className)}>
    <div className={classNames(styles.label, labelClassName)}>
      {label}
      {hasColon && ':'}
    </div>
    <div className={classNames(styles.value, valueClassName)}>{value}</div>
  </div>
);
