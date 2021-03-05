/** Components */
import { Section, Container, Title } from '../../components/ui';
import { ReviewList } from '../../components/elements';

const HomePage = () => {
  return (
    <Section background="cover-50">
      <Container>
        <Title tag="h3">Reviews</Title>
        <ReviewList />
      </Container>
    </Section>
  );
};

export default HomePage;
