import React, { FC } from 'react';
import styled from 'styled-components';
import { Search } from '@molecules/Search';

interface Props {
  keyword: string;
  onChangeKeyword: (value: string) => void;
  onSubmit: () => void;
}

export const HomeComponent: FC<Props> = ({ keyword, onChangeKeyword, onSubmit }) => {
  return (
    <>
      <Image src="/zeit.svg" alt="" />
      <Title>boilerplate-next</Title>
      <Search value={keyword} onChange={onChangeKeyword} onSubmit={onSubmit} />
    </>
  );
};

const Image = styled.img`
  width: 200px;
`;

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 40px;
`;
