import styled from 'styled-components'

import { ActionGrid, ActionGridItem } from 'components/ActionGrid'
import Br from 'components/Br'
import Button from 'components/Button'
import Page, { page } from 'components/Page'
import Callout from 'components/Callout'
import { Masonry, Brick } from 'components/Masonry'

import vulnerabilityImage from '../assets/images/security/vulnerability.jpg'
import securityImage from '../assets/images/security/contact.jpg'

const Section = styled.section`
  margin-top: ${({ theme }) => theme.outerSpacing.s3};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s3};
`

const SectionHeader = styled.h2`
  ${({ theme }) => theme.textStyles.secondLevelHeading}
  margin-top: ${({ theme }) => theme.innerSpacing.s2};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s1};
  text-align: center;
`

const Subsection = styled.section`
  margin-top: ${({ theme }) => theme.innerSpacing.s2};
  margin-bottom: ${({ theme }) => theme.innerSpacing.s2};
`

const SubSectionHeader = styled.h3`
  ${({ theme }) => theme.textStyles.thirdLevelHeading}
  margin: ${({ theme }) => theme.textSpacing.s1} 0;
`

const SubSectionSubHeader = styled.h4`
  ${({ theme }) => theme.textStyles.bodyCopy}
  margin: ${({ theme }) => theme.textSpacing.s2} 0 ${({ theme }) => theme.textSpacing.s1} 0;
`

const SecurityParagraph = styled.p`
  color: ${({ theme }) => theme.colors.text.subdued};
  margin: ${({ theme }) => theme.textSpacing.s1} 0;
`

const Monospace = styled(SecurityParagraph)`
  font-family: SFMono-Regular, Monaco, Menlo, Consolas, Liberation Mono, Courier, monospace;
  white-space: normal;
  word-break: break-all;
  font-size: .9em;
`

const PGPSection = styled(Section)`
  ${({ theme }) => theme.maxWidthContainer}
  max-width: 560px;
`

export default page((props) => (
  <Page
    headTitle="Buildkite Security"
    headDescription="Security policies, contact details, and vulnerability reporting."
    title="Security"
    description={
      <>
        Contact details and information about <Br maxWidth="30em" />
        our security policies and procedures.
      </>
    }
    {...props}
  >
    <ActionGrid>
      <ActionGridItem
        heading="Report Vulnerability"
        image={vulnerabilityImage}
        imageAlt="Two people holding a bug they found inside a computer"
        description="Request an invite to our responsible disclosure program on Hacker One"
        url="mailto:security@buildkite.com?subject=Vulnerability reporting invite"
        buttonTitle="Request Invite"
        note="For confidential information, please use our PGP key"
        imageWidth={540}
      />
      <ActionGridItem
        heading="Contact Security"
        image={securityImage}
        imageAlt="Person carrying confidential briefcase"
        description="For questions, concerns or information, don’t hestitate to email our security team"
        url="mailto:security@buildkite.com"
        buttonTitle="Email security@buildkite.com"
        note="For confidential information, please use our PGP key"
        adjustLeft={-6}
      />
    </ActionGrid>

    <Section>

      <SectionHeader>Platform Security</SectionHeader>

      <Subsection>
        <Masonry>
          <Brick>
            <SubSectionHeader>Infrastructure</SubSectionHeader>
            <SubSectionSubHeader>Physical Access</SubSectionSubHeader>
            <SecurityParagraph>All of our services run in the cloud. Buildkite does not run its own routers, load balancers, DNS servers, or physical servers.</SecurityParagraph>
          </Brick>
        </Masonry>
      </Subsection>

      <Subsection>
        <SubSectionHeader>Application Security</SubSectionHeader>

        <Masonry>
          <Brick>
            <SubSectionSubHeader>Training and Review</SubSectionSubHeader>
            <SecurityParagraph>All code is reviewed by a senior engineer with security best practice training before being deployed to production systems.</SecurityParagraph>
          </Brick>
          <Brick>
            <SubSectionSubHeader>Automated Testing and Build Processes</SubSectionSubHeader>
            <SecurityParagraph>We have an extensive set of automated testing procedures that are run for every code change.</SecurityParagraph>
          </Brick>
          <Brick>
            <SubSectionSubHeader>Software Dependencies</SubSectionSubHeader>
            <SecurityParagraph>Buildkite keeps up to date with software dependencies and has automated tools scanning for common security issues including Cross Site Scripting (XSS), Cross Site Request Forgery (CSRF), and SQL Injection.</SecurityParagraph>
          </Brick>
          <Brick>
            <SubSectionSubHeader>Development and QA Environments</SubSectionSubHeader>
            <SecurityParagraph>These environments are separated physically from Buildkite’s production environment. No customer data is ever used in development or QA environments.</SecurityParagraph>
          </Brick>
          <Brick>
            <SubSectionSubHeader>User Logins</SubSectionSubHeader>
            <SecurityParagraph>We protect against brute force attacks with rate limiting technology. All sensitive data such as password and API tokens are filtered out of logs and exception trackers. User passwords are cryptographically hashed and salted before being stored in our database.</SecurityParagraph>
          </Brick>
          <Brick>
            <SubSectionSubHeader>Penetration Testing</SubSectionSubHeader>
            <SecurityParagraph>Buildkite performs regular penetration test audits with a contracted third party.</SecurityParagraph>
          </Brick>
        </Masonry>
      </Subsection>

      <Subsection>
        <Masonry>
          <Brick>
            <SubSectionHeader>Data in Transit</SubSectionHeader>
            <SecurityParagraph>All data transferred in and out of Buildkite is encrypted using hardened TLS. Buildkite is also protected by HTTP Strict Transport Security and is pre-loaded in major browsers. Additionally, data transferred to and from Buildkite’s backend database is encrypted using TLS.</SecurityParagraph>
          </Brick>
        </Masonry>
      </Subsection>
    </Section>

    <Section>
      <SectionHeader>Policies and Compliance</SectionHeader>

      <Masonry>
        <Brick>
          <SubSectionHeader>Employee Access to Data</SubSectionHeader>
          <SecurityParagraph>Buildkite employees will only ever access customer data when it’s required for support related duties. When a customer contacts support, support staff may sign into their account to help debug a problem with builds or check pipeline settings. When this happens, staff will do their best to respect customer privacy and only access the builds and settings required to diagnose and debug the issue.</SecurityParagraph>
          <SecurityParagraph>Buildkite does not have access to customer source code, or artifacts customers host on third parties such as Amazon S3 or Google Cloud.</SecurityParagraph>
        </Brick>
        <Brick>
          <SubSectionHeader>PCI Obligations</SubSectionHeader>
          <SecurityParagraph>Buildkite is not subject to PCI obligations. All payments processing is outsourced to Pin Payments and Stripe.</SecurityParagraph>
        </Brick>
        <Brick>
          <SubSectionHeader>Documentation and Change Control</SubSectionHeader>
          <SecurityParagraph>We manage all our infrastructure as code, allowing us to audit and peer review any changes, and to provide a secure and automated process for applying these changes.</SecurityParagraph>
        </Brick>
      </Masonry>
    </Section>

    <PGPSection>
      <SectionHeader>PGP Key</SectionHeader>
      <SecurityParagraph>If you need to secure your communications with us, use our PGP details below.</SecurityParagraph>

      <Subsection>
        <SubSectionHeader>Keybase</SubSectionHeader>
        <SecurityParagraph>Find us on Keybase, where you can symmetrically PGP encrypt a message before emailing it to us.</SecurityParagraph>
        <Button
          href="https://keybase.io/buildkite"
        >
          keybase.io/buildkite
        </Button>
      </Subsection>

      <Subsection>
        <SubSectionHeader>Buildkite’s PGP Key</SubSectionHeader>
        <SubSectionSubHeader>Key ID</SubSectionSubHeader>
        <Monospace as="pre">6452D198</Monospace>
        <SubSectionSubHeader>Fingerprint</SubSectionSubHeader>
        <Monospace as="pre">mQENBFTHL0oBCADvaUEoRRDk4KIOm</Monospace>
        <SubSectionSubHeader>Key</SubSectionSubHeader>
        <Monospace as="pre">
          -----BEGIN PGP PUBLIC KEY BLOCK-----<br />
          <br />
          mQENBFTHL0oBCADvaU++EoRRDk4KIOmD7ckUflNla3zF1As3WLD2iR8SdnlqZvgXGuX0PyjTzFerS0eYO+0dyj8MqjrCH39N83Mj3hEfXCQdCO/wnzOZytmuowR0hg8T4ESy/84TXnoXo+c7S+1a2Wz0IX9jrf390hKa70uSTvQ20CBbdiGI7JmoqiBGE1VeWWWY+utjEznY2HKrPRU6tBJbEH8laAqnJQra/nIGNQJ5iUZU+be0Q6DUvVDrsg50t4zgBoJ6g/yEuWdkP2DwaYdd1RA5EGTNYr4xuYYAK6h/3HCcSSHef3eYDPzH0UUEv7ttlnaXvMREhKsgsD0xb8kCyFnRqJf9TKDXABEBAAG0HUJ1aWxka2l0ZSA8ZGV2QGJ1aWxka2l0ZS5jb20+iQE3BBMBCgAhBQJUxy9KAhsDBQsJCAcDBRUKCQgLBRYDAgEAAh4BAheAAAoJEKeSBmlkUtGYqk4H/jIEqQZN8ILAH4eukwn3wejUZte+gAdmrQJ0rxwtmYlR3/dKZ4npnir1h30rUBncaB3lYIH1zyJk9ZbbnmmXQG/FuHY81qIYB6xdmBnQJK4OrKR8SMN3E/jDfefykK+BBtv8wOMfKLgaoJTPGbfoX0BdVj4rHta8kGVFgiKcmFRwozUi/oqBRTgd6z7kbQksoEcZp7zG7bO/8HuagwtYZJzF3x2UxAiFhLwcj+pGva/I8VzQWjUn0YHZhT/T66arMwvoGOq1OuHXGVr+j9c1p77BNuq6JLE3zcf7/N7ipwtzM6lIxC+ulh9eLnE3tmkEwBUfUK4hd5lCStT5GJ5ox+u5AQ0EVMcvSgEIAKq7uI9/+MBbtEjxdbupGicqY3D3FaLzh1xR7to0znfpgOUTLySPGleKtFZesIIPj/UXIdSeS99gzvn35lIWfUnLjfqBb2odfLOoPmqWGFp3G2K72Cm53139yZWybWSgBaFtRx7otnY5g6Wmd0pmFQcNRGdYgEDp/Bxz4pTuQKLMInsU9eujXLRaJSQp/8gaAGI/alsTkrQ6g1NxZuw1pomiKdQ6dNAVYp4Mjs8FPPNLfR3GNrZwdkOWt4MYeXm7nQpf8SSyomqWg+GGPktCSJ21e/WQxtWzSURol7BsgXQlhcPuMCmwBiTdP+nxA7qGsI420H+Ee0bvRzBvAB5SBKUAEQEAAYkBHwQYAQoACQUCVMcvSgIbDAAKCRCnkgZpZFLRmAV1B/9iBTgld2tnxJZAcuUo88Lw9S1gZ600rwsmPnTOqrNpalVnd2Ac9ue6jfkFyr6AGc+tXzsAkb0hJy8xu49qDFHqoGDBaAri7Q1tmfeLJ3h209TXQqzom/myWsSIB+pKvbq8LNj202Idsc+K4mIdhjCXLqJWp1XYWAag5PkM6/yBKIckaz8UIM+SFKOxCAFHC02Wezl6v6jUnodUQxhIQ3pVF3NJFf41DShbtrInG8wc3XwSOcQ2q75ifcZdHTSdzmJhWQToMlr0Ii7qc1g0et6iNxtZ3FVyr2S2+aVtJ3oDUxtbZoib96C4AcFesjihZv++ChVBBLBoED8FwNXIvxV6<br />
          =JFW7<br />
          -----END PGP PUBLIC KEY BLOCK-----
        </Monospace>
      </Subsection>
    </PGPSection>

    <Callout
      heading="Contact Us"
      description={
        <>
          If you’ve got any questions, <Br maxWidth="30em" />
          don’t hestitate to contact our{' '}team.
        </>
      }
      url="mailto:security@buildkite.com"
      buttonTitle="Email security@buildkite.com"
    />
  </Page>
))
