type AnchorProps = {
  className?: string;
};

export const Anchor: React.FC<AnchorProps & JSX.IntrinsicElements['a']> = ({
  children,
  ...props
}) => <a {...props}>{children}</a>;
