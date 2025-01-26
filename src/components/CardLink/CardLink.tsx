// extras
import { CardLinkWrapper } from './CardLink.styles';

type CardLinkProps = {
  path: string;
  imageUrl: string;
};

function CardLink({ path, imageUrl }: CardLinkProps) {
  return (
    <CardLinkWrapper to={path}>
      <img src={imageUrl} alt='img=placeholder' />
    </CardLinkWrapper>
  );
}

export default CardLink;
