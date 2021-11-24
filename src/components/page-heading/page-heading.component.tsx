import classNames from 'classnames';

import styles from './page-heading.module.scss'

type PageHeadingProps = {
  children: React.ReactNode,
  className?: string,
} & React.HTMLProps<HTMLHeadingElement>

export const PageHeading: React.FC<PageHeadingProps> = ({
  className,
  children,
  ...props
}) => (
  <h1 className={classNames(styles.header, className)} {...props}>{children}</h1>
)