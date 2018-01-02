import styled from 'styled-components'

import * as theme from 'theme'

import Dropdown from '../Dropdown';

const Wrapper = styled.div`
  display: inline-block;
`

const ImageWrapper = styled.div`
  border-radius: 50%;
  border: 2px solid #fff;
  padding: 3px;
  background-color: white;
  display: inline-flex;

  &:hover {
    border-color: ${props => props.colour};
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
  margin-top: ${theme.textSpacing.s1};
  margin-bottom: 0;
  ${theme.textStyles.bodyCopy}
`

const Roles = styled.p`
  margin-top: 0;
  ${theme.textStyles.bodyCopySmall}
  color: ${theme.colors.text.subdued};
`

const PersonName = ({ person }) => (
  <Name>{person.name}</Name>
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

export default ({ person, showRoles, showName }) => {
  const name = <PersonName person={person} />;
  const roles = <PersonRoles person={person} />;

  return (
    <Wrapper>
      <Dropdown>
        <Headshot person={person} />
        <div>
          {name}
          {roles}
          <p>{person.bio}</p>
          <nav>
            <ul>
              {person.links.map((link) => (
                <li key={link.name}><a href={link.url}>{link.name}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </Dropdown>
      {showName && name}
      {showRoles && roles}
    </Wrapper>
  );
}