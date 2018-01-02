import styled from 'styled-components'

import * as theme from 'theme'

import Dropdown from '../Dropdown';

const Wrapper = styled.div`
  display: inline-block;
`

const ImageWrapper = styled.button`
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #fff;
  padding: 3px;
  background-color: white;
  display: inline-flex;
  position: relative;

  &:hover, &:focus {
    outline: 0;
    border-color: lightgray;
    border-color: ${props => props.colour};
    z-index: 1;
  }
`

const Image = styled.img`
  border-radius: 50%;
  height: 128px;
  width: 128px;
`

const Headshot = ({ person }) => (
  <ImageWrapper colour={person.colour}>
    <Image
      src={person.photo}
      alt={`Photo of ${person.name}`}
      style={{backgroundColor: person.colour}}
    />
  </ImageWrapper>
);

const Name = styled.h3`
  margin: 0;
  ${theme.textStyles.bodyCopy}
`

const Roles = styled.p`
  margin-top: 0;
  ${theme.textStyles.bodyCopySmall}
  color: ${theme.colors.text.subdued};
`

const PersonName = ({ person }) => (
  <Name>
    {person.name}
  </Name>
);

const PersonRoles = ({ person }) => {
  if (!person.roles) {
    return null;
  }

  return (
    <Roles>
      {person.roles.join(", ")}
    </Roles>
  )
};

const PersonBio = styled.p`
  margin: 5px 0;
`;

const PersonStats = styled.div`
  margin-top: 11px;
`;

const PaddedDropdown = styled.div`
  padding: 0 10px;
`;

const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  list-style-type: none;
  justify-content: center;
  padding: 0;
  margin: -.125em 0;

  > li {
    margin: .125em .25em;

    > a {
      ${theme.textStyles.hyperlink}
    }
  }
`;

export default ({ person, showRoles, showName }) => {
  const name = <PersonName person={person} />;
  const roles = <PersonRoles person={person} />;

  return (
    <Wrapper>
      <Dropdown>
        <Headshot person={person} />
        <PaddedDropdown>
          {name}
          {roles}
          <PersonBio>{person.bio}</PersonBio>
          {person.links && person.links.length && (
            <nav>
              <Links>
                {person.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.url}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </Links>
            </nav>
          )}
        </PaddedDropdown>
      </Dropdown>
      {(showName || showRoles) && (
        <PersonStats>
          {showName && name}
          {showRoles && roles}
        </PersonStats>
      )}
    </Wrapper>
  );
}