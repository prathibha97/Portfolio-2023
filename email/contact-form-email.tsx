import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

type Props = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({ message, senderEmail }: Props) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={card}>
            <Heading style={h1}>New message · portfolio</Heading>
            <Text style={meta}>From: {senderEmail}</Text>
            <Hr style={hr} />
            <Text style={messageStyle}>{message}</Text>
            <Hr style={hr} />
            <Text style={footer}>
              Sent from prathibha.dev — reply directly to respond.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: '#08090b',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif",
  padding: '24px',
};

const container = {
  margin: '0 auto',
  maxWidth: '560px',
};

const card = {
  backgroundColor: '#131418',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '16px',
  padding: '32px',
};

const h1 = {
  color: '#ededee',
  fontSize: '24px',
  margin: '0 0 16px',
  fontWeight: '500' as const,
};

const meta = {
  color: '#a1a1a6',
  fontSize: '13px',
  margin: '0 0 4px',
};

const hr = {
  borderColor: 'rgba(255,255,255,0.08)',
  margin: '20px 0',
};

const messageStyle = {
  color: '#ededee',
  fontSize: '15px',
  lineHeight: '1.65',
  whiteSpace: 'pre-wrap' as const,
};

const footer = {
  color: '#6e6e76',
  fontSize: '12px',
  margin: 0,
};
