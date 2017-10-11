import styled from 'styled-components'

const PersonImage = styled.img`
  border-radius: 50%;
  height: 120px;
  width: 120px;
`

export default ({ person }) => (
  <div>
    <h3>{person.name}</h3>
    <PersonImage src={person.photo} alt={`Photo of ${person.name}`} />
    <p>{person.bio}</p>
    <nav>
      <ul>
        {person.links.map((link) => (
          <li key={link.name}><a href={link.url}>{link.name}</a></li>
        ))}
      </ul>
    </nav>
  </div>
)