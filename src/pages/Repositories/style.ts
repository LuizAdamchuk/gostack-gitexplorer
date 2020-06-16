import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #a8a8b3;
  transition: color 0.2s;

  &:hover {
    color: white;
  }

  svg {
    margin-right: 4px;
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
  }

  img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
  }

  div {
    margin-left: 34px;

    strong {
      font-size: 36px;
      color: #3d3d4d;
    }
    p {
      font-size: 18px;
      color: #737380;
      margin-top: 4px;
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const RepositoryDescription = styled.div`
  margin-top: 80px;

  a {
    display: flex;
    justify-content: space-between;
    background: #fff;
    border-radius: 5px;
    padding: 24px;
    align-items: center;
    text-decoration: none;

    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
      }

      svg {
        color: #cbcbd6;
      }
    }
  }
`;
