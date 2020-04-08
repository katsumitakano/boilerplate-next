import styled from 'styled-components';
import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage<{ userAgent: string }> = (props) => (
  <>
    <Title>Hello world!</Title>
    <UA>user agent: {props.userAgent}</UA>

    <Link href="/about">
      <a>Go To About Page</a>
    </Link>
  </>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

const Title = styled.h1`
  font-size: 36px;
`;

const UA = styled.p`
  color: red;
  font-size: 24px;
`;

export default Home;