import Base from './Typography.styles';
import { Colors, TypographyInterface, Variants } from './Typography.types';

function Typography({ children, variant = Variants.Base225, color = Colors.Gray900, tagAs = 'span', ...props }: TypographyInterface) {
  return (
    <Base variant={variant} color={color} as={tagAs} {...props}>
      {children}
    </Base>
  );
}

export default Typography;
