import React from 'react'
import Section from '../components/common/Section'
import Title from '../components/common/Title'
import Form from '../components/common/Form'

export default function SignIn() {
  return (
    <Section>
      <Title text="로그인" />
      <Form type="signin" />
    </Section>
  )
}
