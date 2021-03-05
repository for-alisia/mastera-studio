/** Components */
import { Section, Container, Title } from '../../components/ui';
import { ReviewCard } from '../../components/elements';

const HomePage = () => {
  return (
    <Section background="cover-50">
      <Container>
        <Title tag="h3">Reviews</Title>
        <ReviewCard />
      </Container>
    </Section>
  );
};

export default HomePage;
