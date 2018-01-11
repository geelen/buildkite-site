import styled from 'styled-components'

import { ActionGrid, ActionGridItem } from 'components/ActionGrid'
import Page, { page } from 'components/Page'
import Br from 'components/Br'
import Callout from 'components/Callout'

const vulnerabilityImage = require('../assets/images/security/vulnerability.jpg')
const securityImage = require('../assets/images/security/contact.jpg')

const Monospace = styled.pre`
  font-family: SFMono-Regular, Monaco, Menlo, Consolas, Liberation Mono, Courier, monospace;
  overflow-x: auto;
`

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Security"
    title="Security"
    description="TODO"
    loggedIn={loggedIn}
  >
    <ActionGrid columns="280px">
      <ActionGridItem
        heading="Report Vulnerability"
        image={vulnerabilityImage}
        imageAlt=""
        description="Request an invite to our responsible disclosure program on Hacker One"
        url="mailto:security@buildkite.com?subject=Vulnerability reporting invite"
        buttonTitle="Request Invite"
        note="For confidential information, please use our PGP key"
      />
      <ActionGridItem
        heading="Contact Security"
        image={securityImage}
        imageAlt=""
        description="For any security questions or concerns, you can email our team"
        url="mailto:security@buildkite.com"
        buttonTitle="Email security@buildkite.com"
        note="For confidential information, please use our PGP key"
      />
    </ActionGrid>

    <h2>Platform Security</h2>

    <h3>Infrastructure</h3>
    <h4>Physical Access</h4>
    <p>All of our services run in the cloud. Buildkite does not run it’s own routers, load balancers, DNS servers, or physical servers.</p>

    <h3>Application Security</h3>
    <h4>Training and Review</h4>
    <p>All code is reviewed by a senior engineer with security best practice training before being deployed to production systems.</p>
    <h4>Automated Testing and Build Processes</h4>
    <p>We have an extensive set of automated testing procedures that are run for every code change.</p>
    <h4>Software Dependencies</h4>
    <p>Buildkite keeps up to date with software dependencies and has automated tools scanning for common security issues including Cross Site Scripting (XSS), Cross Site Request Forgery (CSRF), and SQL Injection.</p>
    <h4>Development and QA Environments</h4>
    <p>These environments are separated physically from Buildkite’s production environment. No customer data is ever used in development or QA environments.</p>
    <h4>User Logins</h4>
    <p>We protect against brute force attacks with rate limiting technology. All sensitive data such as password and API tokens are filtered out of logs and exception trackers. User passwords are one-way encrypted and salted before being stored in our database.</p>
    <h4>Penetration Testing</h4>
    <p>Buildkite performs regular penetration test audits with a contracted third party.</p>

    <h3>Data in Transit</h3>
    <p>All data transferred in and out of Buildkite is encrypted using hardened TLS. Buildkite is also protected by HTTP Strict Transport Security and is pre-loaded in major browsers. Additionally, data transferred to and from Buildkite’s backend database is encrypted using TLS.</p>

    <h2>Policies and Compliance</h2>
    <h3>Employee Access to Data</h3>
    <p>Buildkite employees will only ever access customer data when it’s required for support related duties. When a customer contacts support, support staff may sign into their account to help debug a problem with builds or check pipeline settings. When this happens, staff will do their best to respect customer privacy and only access the builds and settings required to diagnose and debug the issue.</p>
    <p>Buildkite does not have access to customer source code, or artifacts customers host on third parties such as Amazon S3 or Google Cloud.</p>
    <h3>PCI Obligations</h3>
    <p>Buildkite is not subject to PCI obligations. All payments processing is outsourced to Pin Payments and Stripe.</p>
    <h4>Documentation and Change Control</h4>
    <p>We manage all our infrastructure as code, allowing us to audit and peer review any changes, and to provide a secure and automated process for applying these changes.</p>

    <h2>PGP Key</h2>
    <p>If you need to secure your communications with us secure, use our PGP details below.</p>
    <h3>Keybase</h3>
    <p>Find us on Keybase, where you can symetrically PGP encrypt a message before emailing it to us.</p>
    <p><a href="https://keybase.io/buildkite">keybase.io/buildkite</a></p>
    <h3>Buildkite’s PGP Key</h3>
    <h4>Key ID</h4>
    <Monospace>6452D198</Monospace>
    <h4>Fingerprint</h4>
    <Monospace>mQENBFTHL0oBCADvaUEoRRDk4KIOm</Monospace>
    <h4>Key</h4>
    <Monospace>
      -----BEGIN PGP PUBLIC KEY BLOCK-----<br />
      mQENBFTHL0oBCADvaU++EoRRDk4KIOmD7ckUflNla3zF1As3WLD2iR8SdnlqZvgXGuX0PyjT<br />
      zFerS0eYO+0dyj8MqjrCH39N83Mj3hEfXCQdCO/wnzOZytmuowR0hg8T4ESy/84TXnoXo+c7<br />
      S+1a2Wz0IX9jrf390hKa70uSTvQ20CBbdiGI7JmoqiBGE1VeWWWY+utjEznY2HKrPRU6tBJb<br />
      EH8laAqnJQra/nIGNQJ5iUZU+be0Q6DUvVDrsg50t4zgBoJ6g/yEuWdkP2DwaYdd1RA5EGTN<br />
      Yr4xuYYAK6h/3HCcSSHef3eYDPzH0UUEv7ttlnaXvMREhKsgsD0xb8kCyFnRqJf9TKDXABEB<br />
      AAG0HUJ1aWxka2l0ZSA8ZGV2QGJ1aWxka2l0ZS5jb20+iQE3BBMBCgAhBQJUxy9KAhsDBQsJ<br />
      CAcDBRUKCQgLBRYDAgEAAh4BAheAAAoJEKeSBmlkUtGYqk4H/jIEqQZN8ILAH4eukwn3wejU<br />
      Zte+gAdmrQJ0rxwtmYlR3/dKZ4npnir1h30rUBncaB3lYIH1zyJk9ZbbnmmXQG/FuHY81qIY<br />
      B6xdmBnQJK4OrKR8SMN3E/jDfefykK+BBtv8wOMfKLgaoJTPGbfoX0BdVj4rHta8kGVFgiKc<br />
      mFRwozUi/oqBRTgd6z7kbQksoEcZp7zG7bO/8HuagwtYZJzF3x2UxAiFhLwcj+pGva/I8VzQ<br />
      WjUn0YHZhT/T66arMwvoGOq1OuHXGVr+j9c1p77BNuq6JLE3zcf7/N7ipwtzM6lIxC+ulh9e<br />
      LnE3tmkEwBUfUK4hd5lCStT5GJ5ox+u5AQ0EVMcvSgEIAKq7uI9/+MBbtEjxdbupGicqY3D3<br />
      FaLzh1xR7to0znfpgOUTLySPGleKtFZesIIPj/UXIdSeS99gzvn35lIWfUnLjfqBb2odfLOo<br />
      PmqWGFp3G2K72Cm53139yZWybWSgBaFtRx7otnY5g6Wmd0pmFQcNRGdYgEDp/Bxz4pTuQKLM<br />
      InsU9eujXLRaJSQp/8gaAGI/alsTkrQ6g1NxZuw1pomiKdQ6dNAVYp4Mjs8FPPNLfR3GNrZw<br />
      dkOWt4MYeXm7nQpf8SSyomqWg+GGPktCSJ21e/WQxtWzSURol7BsgXQlhcPuMCmwBiTdP+nx<br />
      A7qGsI420H+Ee0bvRzBvAB5SBKUAEQEAAYkBHwQYAQoACQUCVMcvSgIbDAAKCRCnkgZpZFLR<br />
      mAV1B/9iBTgld2tnxJZAcuUo88Lw9S1gZ600rwsmPnTOqrNpalVnd2Ac9ue6jfkFyr6AGc+t<br />
      XzsAkb0hJy8xu49qDFHqoGDBaAri7Q1tmfeLJ3h209TXQqzom/myWsSIB+pKvbq8LNj202Id<br />
      sc+K4mIdhjCXLqJWp1XYWAag5PkM6/yBKIckaz8UIM+SFKOxCAFHC02Wezl6v6jUnodUQxhI<br />
      Q3pVF3NJFf41DShbtrInG8wc3XwSOcQ2q75ifcZdHTSdzmJhWQToMlr0Ii7qc1g0et6iNxtZ<br />
      3FVyr2S2+aVtJ3oDUxtbZoib96C4AcFesjihZv++ChVBBLBoED8FwNXIvxV6<br />
      =JFW7<br />
      -----END PGP PUBLIC KEY BLOCK-----
    </Monospace>

    <Callout
      heading="Contact Us"
      description={<span>If you’ve got any questions,<Br maxWidth='30em'/> don’t hestitate to contact our team.</span>}
      url="mailto:security@buildkite.com"
      buttonTitle="Email security@buildkite.com"
    />
  </Page>
))