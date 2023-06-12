import React from 'react';
import Section from '../components/common/Section';
import Title from '../components/common/Title';
import Form from '../components/common/Form';

export default function SignUp() {
  return (
    <Section>
      <Title text='회원가입' />
      <Form type='signup' />
    </Section>
  );
}
