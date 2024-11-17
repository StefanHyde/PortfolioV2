import React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Font,
  Text,
  Button,
} from '@react-email/components';

type EmailProps = {
  sender: string;
  senderMail: string;
  message: string;
};

export default function Email({ sender, senderMail, message }: EmailProps) {
  return (
    <Html>
      <Head />
      <Font
        fontFamily="Nunito"
        fallbackFontFamily="Verdana"
        webFont={{
          url: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap',
          format: 'woff2',
        }}
        fontWeight={500}
        fontStyle="normal"
      />
      <Preview>Nouveau message de {sender}</Preview>

      <Body>
        <Container>
          <Section>
            <Text>
              <h1>Vous avez un nouveau message de {sender}</h1>
              <p>{message}</p>
            </Text>
            <Button href={`mailto:${senderMail}`}>Répondre</Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
