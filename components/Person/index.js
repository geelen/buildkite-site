import styled from 'styled-components'

import * as theme from 'theme'

const Wrapper = styled.div`
  display: inline-block;
`

const ImageWrapper = styled.div`
  background-color: white;
  border-radius: 50%;
  border: 2px solid #fff;
  display: inline-flex;

  &:hover {
    border-color: ${props => props.colour};
  }
`

const Image = styled.img`
  border-radius: 50%;
  height: 128px;
  width: 128px;
  border: 2px solid #fff;
`

const Headshot = ({person}) => (
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

export default ({ person, showRoles, showName }) => (
  <Wrapper>
    <Headshot person={person} />
    {showName && <Name>{person.name}</Name>}
    {showRoles && <Roles>{person.roles.join(", ")}</Roles>}
    {/* <p>{person.bio}</p> */}
    {/* <nav>
      <ul>
        {person.links.map((link) => (
          <li key={link.name}><a href={link.url}>{link.name}</a></li>
        ))}
      </ul>
    </nav> */}
  </Wrapper>
)