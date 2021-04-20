import React from 'react';

import { Section, Container, Title } from '../../ui';
import ReviewList from '../review-list';

const ReviewSection = () => {
  return (
    <Section background="cover-50">
      <Container>
        <Title tag="h3">Отзывы</Title>
        <ReviewList />
      </Container>
    </Section>
  );
};

export default ReviewSection;
