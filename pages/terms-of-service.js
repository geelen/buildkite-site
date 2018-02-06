import Page, { page } from 'components/Page'
import PolicyDocument, { LastUpdated } from 'components/PolicyDocument'

export default page((props) => (
  <Page
    headTitle="Buildkite Terms of Service"
    title="Terms of Service"
    {...props}
  >
    <LastUpdated>Last Updated: July 16<sup>th</sup>, 2015</LastUpdated>

    <PolicyDocument>
      <div id="1-introduction">
        <h2>Introduction</h2>
        <ol className="PrivacyPolicy__list">
          <li>Buildkite is a software development build automation suite. Buildkite is proudly Australian owned and developed. These Terms of Service are prepared in accordance with Australian laws, but Buildkite can be used by anyone, anywhere. In general, Buildkite wants to have as many happy Customers as possible. Buildkite would be foolish to change pricing, features or services in a way that made Customer’s unhappy. However, as a SaaS product, Buildkite will change over time (presumably for the better).</li>
          <li>In these Terms of Service, the “Important Terms” mostly deal using Buildkite, and the “General Conditions” set out the legal basis on which Buildkite is provided. You must accept these terms to use Buildkite.</li>
          <li>Buildkite treats the confidentiality of our Customer’s information seriously, and handles all personal information in accordance with Australian privacy laws. Simply, we protect our Customers’ information, not exploit it.</li>
        </ol>
      </div>

      <div id="2-important-terms">
        <h2>Important Terms</h2>
        <ol className="PrivacyPolicy__heading-list PrivacyPolicy__heading-list--extra">
          <li>
            <h3>Key terms</h3>
            <ol className="PrivacyPolicy__list">
              <li>
                The following terms are used regularly throughout these Terms of Service and have a particular meaning:
                <ol>
                  <li><strong>Account</strong> means an registered Customer account within Buildkite</li>
                  <li><strong>Agent</strong> means the Buildkite installed executable ‘agent’ used for deploying builds on a User’s server.</li>
                  <li><strong>Agreement</strong> means the agreement formed in accordance with these Terms of Service between the Company and the User.</li>
                  <li><strong>Application</strong> means the Buildkite SaaS application accessible via login through the Site.</li>
                  <li><strong>API</strong> means the Buildkite application programming interface as released and updated from time-to-time by the Company.</li>
                  <li><strong>Buildkite</strong> means the Company’s suite of tools, applications and services, known together as “Buildkite”, licensed to the Customer under this Agreement.</li>
                  <li><strong>Company</strong> means Buildkite Pty Ltd ABN 70 601 137 508.</li>
                  <li><strong>Customer</strong> means the entity that Buildkite is licensed to under this Agreement (which if in doubt shall be the named Account holder).</li>
                  <li><strong>Customer Data</strong> means all information, data, code, documents and other such materials that belong to the Customer.</li>
                  <li><strong>Fee</strong> means any fees payable to the Company for access to or use of Buildkite.</li>
                  <li><strong>Member</strong> means any registered user of Buildkite authorised to the Customer’s Account.</li>
                  <li><strong>Privacy Policy</strong> means the Company’s privacy policy as updated from time-to-time, accessible from here: https://buildkite.com/privacy-policy</li>
                  <li><strong>Pipeline</strong> means a Customer’s build pipeline established in the Customer’s Account.</li>
                  <li><strong>Site</strong> means the website found at https://buildkite.com</li>
                  <li><strong>Subscription Fee</strong> means the either the monthly or annual “per user” fee charged for access to and use of Buildkite.</li>
                  <li><strong>Third Party Services</strong> means any of the Customer’s third party service account connected to and/or integrated with Buildkite.</li>
                  <li><strong>User</strong> means either or both of a Customer and a Member, as the use of the term in its context implies.</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <h3>Agreement</h3>
            <ol className="PrivacyPolicy__list">
              <li>The licence granted under this Agreement shall be ongoing until terminated in accordance with the terms of this Agreement.</li>
              <li>
                The User agrees:
                <ol>
                  <li>To use Buildkite in accordance with the terms of this Agreement; and</li>
                  <li>If creating a Customer Account, that it is authorised to establish, maintain and pay for the Account for the Customer.</li>
                </ol>
              </li>
              <li>
                The Customer agrees:
                <ol>
                  <li>To pay the Fees for each Member it authorises on its Account as and when they fall due; and</li>
                  <li>That it is responsible for the conduct of each Member it authorises (who each must enter into and comply with this Agreement).</li>
                </ol>
              </li>
              <li>The Customer may terminate this Agreement by written notice and cease using Buildkite. No pro-rata refunds are offered for terminated accounts. The Company may terminate this Agreement on no less than 14 days’ written notice to the Customer, and access shall terminate at the end of the Customer’s billing cycle active at the expiry of that notice period.</li>
            </ol>
          </li>
          <li>
            <h3>Paying for Buildkite</h3>
            <ol className="PrivacyPolicy__list">
              <li>
                <strong>Fees</strong>
                <ol>
                  <li>The primary Fee to use Buildkite shall be the Subscription Fee, which is payable in advance (after any free trial period has expired).</li>
                  <li>The Subscription Fee applies to each individual user of Buildkite at a Customer. If the Customer has more than 1 user using a singular Membership within the Account, the Subscription Fee for each individual remains payable.</li>
                  <li>The Customer agrees to provide a credit card through Buildkite, which will be charged monthly in advance for all Fees due. Without provision of a valid credit card, the Customer agrees that it has no right to access Buildkite.</li>
                  <li>The Company reserves the right to introduce or change any Fees from time-to-time by giving the User no less than 14 days’ written notice. Any new or changed Fees will commence apply at the next billing period after the Customer has been given such notice.</li>
                  <li>If a User does not accept a change to any Fees, then it can simply terminate its Account (or its Membership, as the case may be).</li>
                </ol>
              </li>
              <li><strong>Currency</strong><br /> All Fees are quoted in US dollars, however transactions may be processed in an equivalent foreign currency (such as Australian dollars or British pounds).</li>
              <li><strong>GST</strong><br /> For Customers in Australia, GST is applicable to any Fees charged by the Company to the User. Unless expressed otherwise, all Fees shall be deemed inclusive of GST. The Company will provide the Customer with a Tax Invoice for any payments.</li>
              <li><strong>Refunds</strong><br /> No refunds of Fees are offered other than as required by law.</li>
              <li>
                <strong>Late Payment</strong>
                <ol>
                  <li>If the Customer does not pay the full Fees as required, the Company may suspend all User access to Buildkite for that Account.</li>
                  <li>If Fees are not brought out of arrears within 28 days of becoming overdue, the Company may terminate the Customer’s Account in Buildkite without notice and end this Agreement.</li>
                  <li>
                    The User agrees that the Company shall not be responsible or liable in any way for:
                    <ol>
                      <li>Interruptions to the availability of Buildkite in the event of (a);</li>
                      <li>Loss of Customer Data in the event of (b).</li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <h3>Using Buildkite</h3>
            <ol className="PrivacyPolicy__list">
              <li>To access Buildkite, each User must register with Buildkite (either as a Customer or as a Member, as the case may be) with a valid email address.</li>
              <li>The Company provides instructional documentation on the Site and within Buildkite to assist Users with Buildkite. This documentation shall be updated from time-to-time. Buildkite also provides user support services.</li>
              <li>
                The prequisites to use Buildkite are:
                <ol>
                  <li>Access to the Application;</li>
                  <li>A server from which the User deploys builds (which will host the Agent);</li>
                  <li>Installation of the Agent on the User’s server; and</li>
                  <li>An internet connection.</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <h3>Application</h3>
            <ol className="PrivacyPolicy__list">
              <li>The Application is accessible to registered Users via login from the Site. To use Buildkite, it is necessary that the User has access to the Application.</li>
              <li>The Application contains the Customer’s Pipelines, controls the deployed Agents, connects the Customer’s Third Party Services and provides the Customer with Account management.</li>
              <li>Each build in a Pipeline is deployed from the Application.</li>
            </ol>
          </li>
          <li>
            <h3>Agent</h3>
            <ol className="PrivacyPolicy__list">
              <li>The Agent is an open-source toolkit for running builds on the User’s server.</li>
              <li>As the Agent is open-source, the Company makes no warranty as to the Agent. However, the Agent is a necessary element to Buildkite and therefore its operability, stability and security are endorsed and maintained by the Company.</li>
              <li>The User can install an unlimited number or Agents on a server, and the Application distributes builds across the relevant Agents. Each Agent runs a single build at a time.</li>
              <li>
                The User is solely responsible:
                <ol>
                  <li>For the security of the servers on which it deploys an Agent(s); and</li>
                  <li>Ensuring any Agent(s) are updated to get the latest features and security fixes.</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <h3>API</h3>
            <ol className="PrivacyPolicy__list">
              <li>Each User shall have a set of unique keys in order to access the API.</li>
              <li>The Company authorises the User to access and use the Buildkite services available through the API.</li>
              <li>Misuse of the API may cause issues to Buildkite, and as a result, may affect the performance of the Application. Any intentional misuse of the API by a User may result in suspension or termination of access to the API and or Buildkite.</li>
            </ol>
          </li>
          <li>
            <h3>Third Party Services</h3>
            <ol className="PrivacyPolicy__list">
              <li>Buildkite connects to and integrates with many Third Party Services.</li>
              <li>Buildkite cannot warrant the ongoing availability or efficacy of any Third Party Services.</li>
              <li>The User authorises the Company to access the Customer Data in any Third Party Services enabled by the User.</li>
              <li>The User must comply with the terms of use of any Third Party Service, and in now way will the Company be liable for any breach of such terms by the User’s connection of Buildkite to a Third Party Service.</li>
            </ol>
          </li>
          <li>
            <h3>Dependencies</h3>
            <ol className="PrivacyPolicy__list">
              <li>
                The User agrees and acknowledges that:
                <ol>
                  <li>Buildkite has third party dependencies which may affect its availability, including (without limitation) infrastructure providers; and</li>
                  <li>The Company has no means of controlling the availability of such dependencies, although each of those services has a robust operating standard suitable for commercial dependency.</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <h3>Support</h3>
            <ol className="PrivacyPolicy__list">
              <li>
                The Company provides user support for Buildkite via:
                <ol>
                  <li>A dedicated support email; and/or</li>
                  <li>A support ticketing system within Buildkite.</li>
                </ol>
              </li>
              <li>The Company shall endeavour to respond to all support requests within 24 hours.</li>
              <li>The Company reserves the right to require the payment of reasonable Fees for non-standard support requests prior to the provision of such support.</li>
            </ol>
          </li>
          <li>
            <h3>Special Conditions</h3>
            <ol className="PrivacyPolicy__list">
              <li>The parties may agree to any Special Conditions to this Agreement in writing. Where the parties make such Special Conditions those Special Conditions shall prevail over any inconsistency with any other provisions of this Agreement.</li>
            </ol>
          </li>
        </ol>
      </div>

      <div id="3-general">
        <h2>General Conditions</h2>
        <ol className="PrivacyPolicy__heading-list">
          <li>
            <h3>Interpretation</h3>
            <ol className="PrivacyPolicy__list">
              <li>
                The following definitions apply in this document:
                <ol>
                  <li><strong>ABN</strong> means Australian Business Number.</li>
                  <li><strong>ACN</strong> means Australian Company Number.</li>
                  <li><strong>Business Day</strong> means a day (other than a Saturday, Sunday or public holiday) on which banks are open for general banking business in Melbourne, Australia.</li>
                  <li><strong>Commencement Date</strong> means the date set out in this Agreement.</li>
                  <li>
                    <strong>Confidential Information</strong> means all information (whether or not it is described as confidential) in any form or medium concerning any past, present or future business, operations or affairs of either party, including, without limitation:
                    <ol>
                      <li>all technical or non-technical data, formulae, patterns, programs, devices, methods, techniques, plans, drawings, models and processes, source and object code, software and computer records;</li>
                      <li>all business and marketing plans and projections, details of agreements and arrangements with third parties, and User and supplier information and lists;</li>
                      <li>all financial information, pricing schedules and structures, product margins, remuneration details and investment outlays;</li>
                      <li>all information concerning any employee, customer, contractor, supplier or agent of the relevant party;</li>
                      <li>the party’s policies and procedures; and</li>
                      <li>all information contained in this document,</li>
                      <li className="no-counter">but excludes information that the other party can establish</li>
                      <li>but excludes information that the other party can establish:</li>
                      <li>is known by or is in the other party’s possession or control other than through a breach of this document and is not subject to any obligation of confidence; or</li>
                      <li>is in the public domain other than by a breach of this document or any obligations of confidence.</li>
                    </ol>
                  </li>
                  <li><strong>Corporations Act</strong> means the Corporations Act 2001 (Cth).</li>
                  <li>
                    <strong>Force Majeure</strong> means an event or cause beyond the reasonable control of the party claiming force majeure.  It includes each of the following, to the extent it is beyond the reasonable control of that party:
                    <ol>
                      <li>act of God, lightning, storm, flood, fire, earthquake or explosion cyclone, tidal wave, landslide, adverse weather conditions;</li>
                      <li>act of public enemy, war (declared or undeclared), terrorism, sabotage, blockade, revolution, riot, insurrection, civil commotion, epidemic;</li>
                      <li>the effect of any change in applicable laws, orders, rules or regulations of any government or other competent authority; and</li>
                      <li>embargo, inability to obtain necessary materials, equipment or facilities, or power or water shortage.</li>
                    </ol>
                  </li>
                  <li><strong>General Conditions</strong> means the terms and conditions set out in the section of this Agreement entitled “General Conditions”.</li>
                  <li><strong>GST</strong> has the meaning given by the A New Tax System (Goods and Services Tax) Act 1999 (Cth).</li>
                  <li><strong>Intellectual Property</strong> means all copyright, patents, inventions, trade secrets, know-how, product formulations, designs, circuit layouts, databases, registered or unregistered trademarks, brand names, business names, domain names and other forms of intellectual property;</li>
                  <li><strong>Intellectual Property Rights</strong> means, for the duration of the rights in any part of the world, any Moral Rights, industrial or intellectual property rights, whether registrable or not, including in respect of Intellectual Property, applications for the registration of any Intellectual Property and any improvements, enhancements or modifications to any Intellectual Property registrations.</li>
                  <li>
                    <strong>Moral Rights</strong> means:
                    <ol>
                      <li>moral rights pursuant to the Copyright Act 1968 (Cth);</li>
                      <li>or any rights analogous to the rights set out in Article 6bis of the Berne Convention for Protection of Literary and Artistic Works 1886 (as amended from time to time).</li>
                    </ol>
                  </li>
                  <li><strong>Important Terms</strong> means this Agreement’s details and variables set out in the section of this Agreement entitled “Important Terms”.</li>
                  <li><strong>Privacy Act</strong> means the Privacy Act 1989 (Cth).</li>
                  <li><strong>Special Conditions</strong> means the terms and conditions set out in the section of this agreement entitled “Special Conditions”.</li>
                  <li><strong>Tax Invoice</strong> has the meaning given by the A New Tax System (Goods and Services Tax) Act 1999 (Cth).</li>
                </ol>
              </li>
              <li>
                Headings are only for convenience and do not affect interpretation.  The following rules apply unless the context requires otherwise:
                <ol>
                  <li>The singular includes the plural and the opposite also applies.</li>
                  <li>If a word or phrase is defined, any other grammatical form of that word or phrase has a corresponding meaning.</li>
                  <li>A reference to a clause refers to clauses in this Agreement.</li>
                  <li>A reference to legislation is to that legislation as amended, reenacted or replaced, and includes any subordinate legislation issued under it.</li>
                  <li>Mentioning anything after includes, including, or similar expressions, does not limit anything else that might be included.</li>
                  <li>A reference to a party to this Agreement or another agreement or document includes that party’s successors and permitted substitutes and assigns (and, where applicable, the party’s legal personal representatives).</li>
                  <li>A reference to a person, corporation, trust, partnership, unincorporated body or other entity includes any of them.</li>
                  <li>A reference to information is to information of any kind in any form or medium, whether formal or informal, written or unwritten, for example, computer software or programs, concepts, data, drawings, ideas, knowledge, procedures, source codes or object codes, technology or trade secrets.</li>
                  <li>A reference to dollars or $ is to an amount in Australian currency.</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <h3>Application of this Agreement</h3>
            <ol className="PrivacyPolicy__list">
              <li>This Agreement applies to use of and access to Buildkite.</li>
              <li>Where the User does not accept or can no longer comply with the terms and conditions of this Agreement, the User must immediately cease using Buildkite.</li>
              <li>This Agreement may be updated by the Company at its absolute discretion from time-to-time, and unless stated otherwise by the Company in writing, such updates shall come into effect for use of Buildkite at the commencement of the User’s next billing period.</li>
            </ol>
          </li>
          <li>
            <h3>Solution</h3>
            <ol className="PrivacyPolicy__list">
              <li>
                The User agrees and accepts that Buildkite is:
                <ol>
                  <li>hosted by the Company and shall only be installed, accessed and maintained by the Company, accessed using the internet or other connection to the Company’s servers and is not available ‘locally’ from the User’s systems; and</li>
                  <li>managed and supported exclusively by the Company from the Company’s servers and that no ‘back-end’ access to Buildkite is available to the User unless expressly agreed in writing.</li>
                </ol>
              </li>
              <li>As a hosted and managed service, the Company reserves the right to upgrade, maintain, tune, backup, amend, add or remove features, redesign, improve or otherwise alter Buildkite.</li>
              <li>the Company shall not exercise its rights under clause 3.2 in a manner that would intentionally cause the User to lose access to Customer Data or fundamentally decrease the utility of Buildkite to the User, other than in accordance with the terms of this Agreement.</li>
            </ol>
          </li>
          <li>
            <h3>License</h3>
            <ol className="PrivacyPolicy__list">
              <li>By accepting the terms and conditions of this Agreement, the User is granted a limited, non-exclusive and revocable license to access and use Buildkite for the duration of this Agreement, in accordance with the terms and conditions of this Agreement.</li>
              <li>The Company may revoke or suspend the User’s license(s) in its absolute discretion for any reason that it sees fit, including for breach of the terms and conditions in this Agreement by the User or any of its users.  the Company will ordinarily advise the User of any suspension or revocation however it is under no obligation to do so.</li>
            </ol>
          </li>
          <li>
            <h3>Use</h3>
            <ol className="PrivacyPolicy__list">
              <li>The User agrees that it shall only use Buildkite for legal purposes and shall not use it to engage any conduct that is unlawful, immoral, threatening, abusive or in a way that is deemed unreasonable by the Company in its discretion.</li>
            </ol>
          </li>
          <li>
            <h3>Authorised Users</h3>
            <ol className="PrivacyPolicy__list">
              <li>The Customer shall authorise users to access Buildkite in its absolute discretion.</li>
              <li>The Company accepts no liability for access to Customer Data by users authorised by the User or using login details of users authorised by the User.</li>
              <li>The User is solely responsible for the security of its username and password for access to Buildkite.</li>
              <li>The User is responsible for ensuring that users comply with this Agreement in full and are liable for any breach of them.</li>
            </ol>
          </li>
          <li>
            <h3>Customer Data</h3>
            <ol className="PrivacyPolicy__list">
              <li>The Company obtains no right, title or interest in Customer Data including any Intellectual Property found within it.</li>
              <li>The Company accepts no liability for the content of Customer Data.</li>
              <li>The User is responsible for the accuracy, quality and legality of Customer Data and the User’s acquisition of it, and the users that create, access and/or use Customer Data.</li>
              <li>Despite clause 7.1, the Company shall be authorised to permanently delete Customer Data where outstanding Fees remain unpaid in accordance the Important Terms.</li>
              <li>The Company shall not access, use, modify or otherwise deal with Customer Data except where required by compulsion of law or upon the User’s authority (such as to provide support for Buildkite).</li>
            </ol>
          </li>
          <li>
            <h3>Privacy</h3>
            <ol className="PrivacyPolicy__list">
              <li>The Company maintains the Privacy Policy in compliance with the provisions of the Privacy Act for data that it collects about the User and other customers.</li>
              <li>The Privacy Policy does not apply to how the User handles Customer Data.  It is the User’s responsibility to meet the obligations of the Privacy Act by implementing a Privacy Policy in accordance with law.</li>
              <li>the Company makes no warranty as to the suitability of Buildkite in regards to the User’s privacy obligations at law or contract, and it is the User’s responsibility to determine whether Buildkite is appropriate for the User’s circumstances.</li>
            </ol>
          </li>
          <li>
            <h3>Invoicing &amp; Payments</h3>
            <ol className="PrivacyPolicy__list">
              <li>The Company shall issue the User a Tax Invoice for all Fees for which GST applies.</li>
              <li>The terms of payment set out in the Important Terms shall apply.</li>
              <li>Should the User dispute a Tax Invoice, the User must notify the Company of the disputed item within 5 Business Days of the date of the Tax Invoice.  The User must pay the amount of the Tax Invoice not in dispute within the prescribed payment period.</li>
              <li>Overdue Tax Invoices shall accrue interest at the rate of 1.5% per month, or in default, the maximum rate of penalty interest prescribed under law.</li>
            </ol>
          </li>
          <li>
            <h3>Data</h3>
            <ol className="PrivacyPolicy__list">
              <li><strong>Security.</strong>  The Company takes the security of Buildkite and the privacy of its Users very seriously.  The User agrees that the User shall not do anything to prejudice the security or privacy of the Company’s systems or the information on them.</li>
              <li><strong>Transmission.</strong>  The Company shall do all things reasonable to ensure that the transmission of data occurs according to accepted industry standards.  It is up to the User to ensure that any transmission standards meet the User’s operating and legal requirements.</li>
              <li><strong>Storage.</strong>  The Company may limit the amount of data that the User stores in Buildkite, and shall advise the User of such.  Data that is stored with the Company shall be stored according to accepted industry standards.</li>
              <li><strong>Backup.</strong>  The Company shall perform backups of its entire systems in as reasonable manner at such times and intervals as is reasonable for its business purposes.  the Company does not warrant that it is able to backup or recover specific Customer Data from any period of time unless so stated in writing by the Company.</li>
            </ol>
          </li>
          <li>
            <h3>Access</h3>
            <ol className="PrivacyPolicy__list">
              <li><strong>Solution.</strong>  By accepting the terms of this Agreement the User agrees that the Company shall provide access to Buildkite to the best of its abilities, however it accepts no responsibility for ongoing access to Buildkite.</li>
            </ol>
          </li>
          <li>
            <h3>Intellectual Property</h3>
            <ol className="PrivacyPolicy__list">
              <li><strong>Trademarks.</strong>  The Company has moral & registered rights in its trademarks and the User shall not copy, alter, use or otherwise deal in the marks without the prior written consent of the Company.</li>
              <li><strong>Proprietary Information.</strong>  Buildkite may use software and other proprietary systems and Intellectual Property for which the Company has appropriate authority to use, and the User agrees that such is protected by copyright, trademarks, patents, proprietary rights and other laws, both domestically and internationally.  The User warrants that it shall not infringe on any third-party rights through the use of Buildkite.</li>
              <li>
                <strong>Solution.</strong>  The User agrees and accepts that Buildkite is the Intellectual Property of the Company and the User further warrants that by using Buildkite the User will not:
                <ol>
                  <li>copy Buildkite or the services that it provides for the User’s own commercial purposes; and</li>
                  <li>directly or indirectly copy, recreate, decompile, reverse engineer or otherwise obtain, modify or use any source or object code, architecture, algorithms contained in Buildkite or any documentation associated with it.</li>
                </ol>
              </li>
              <li><strong>Content.</strong>  All content (with the exception of Customer Data) remains the Intellectual Property of the Company, including (without limitation) any source code, ideas, enhancements, feature requests, suggestions or other information provided by the User or any other party with respect to Buildkite.</li>
            </ol>
          </li>
          <li>
            <h3>Confidentiality</h3>
            <ol className="PrivacyPolicy__list">
              <li>The Company agrees to keep all Customer Data in the strictest confidence, and to the extent Customer Data is accessed and/or received by Buildkite it shall be deemed as Confidential Information for the purposes of this Agreement.</li>
              <li>
                Each party acknowledges and agrees that:
                <ol>
                  <li>the Confidential Information is secret, confidential and valuable to the disclosing party (<strong>Discloser</strong>);</li>
                  <li>it owes an obligation of confidence to the Discloser concerning the Confidential Information;</li>
                  <li>it must not disclose the Confidential Information to a third party except as permitted in this Agreement;</li>
                  <li>all Intellectual Property rights remain vested in the Discloser but disclosure of Confidential Information does not in any way transfer or assign any rights or interests in the Intellectual Property to the receiving party; and</li>
                  <li>any breach or threatened breach by the receiving party of an obligation under this Agreement may cause the Discloser immediate and irreparable harm for which damages alone may not be an adequate remedy.  Consequently the Discloser has the right, in addition to other remedies available at law or in equity, to seek injunctive relief against the receiving party (and its agents, assigns, employees, officers and directors, personally) or to compel specific performance of this clause.</li>
                </ol>
              </li>
              <li>
                A party must notify the Discloser in writing, giving full details known to it immediately, when it becomes aware of:
                <ol>
                  <li>any actual, suspected, likely or threatened breach by it of any obligations it has in relation to the Confidential Information.</li>
                  <li>any actual, suspected, likely or threatened breach by any person of any obligation in relation to the Confidential Information; or</li>
                  <li>any actual, suspected, likely or threatened theft, loss, damage, or unauthorised access, use or disclosure of or to any Confidential Information.</li>
                </ol>
              </li>
              <li>
                The receiving party must promptly take all steps that the Discloser may reasonably require and must co-operate with any investigation, litigation or other action of the Discloser or of a related body corporate if there is:
                <ol>
                  <li>any actual, suspected, likely or threatened breach of a term of this Agreement; or</li>
                  <li>any theft, loss, damage or unauthorised access, use or disclosure of or to any Confidential Information that is or was in its possession or control.</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <h3>Liability &amp; Indemnity</h3>
            <ol className="PrivacyPolicy__list">
              <li>The User agrees that it uses Buildkite at its own risk.</li>
              <li>The User acknowledges that the Company is not responsible for the conduct or activities of any user and that the Company is not liable for such under any circumstances.</li>
              <li>The User agrees to indemnify the Company for any loss, damage, cost or expense that the Company may suffer or incur as a result of or in connection with the User’s use of Buildkite or conduct in connection with Buildkite, including any breach by the User of this Agreement.</li>
              <li>In no circumstances will the Company be liable for any direct, incidental, consequential or indirect damages, loss or corruption of data, loss of profits, goodwill, bargain or opportunity, loss of anticipated savings or any other similar or analogous loss resulting from the User’s access to, or use of, or inability to use Buildkite, whether based on warranty, contract, tort, negligence, in equity or any other legal theory, and whether or not the Company knew or should have known of the possibility of such damage, to business interruption of any type, whether in tort, contract or otherwise.</li>
              <li>
                Certain rights and remedies may be available under the Competition and Consumer Act 2010 (Cth) or similar legislation of other States or Territories and may not be permitted to be excluded, restricted or modified.  Apart from those that cannot be excluded, the Company and the Company’s related entities exclude all conditions and warranties that may be implied by law.  To the extent permitted by law, the Company’s liability for breach of any implied warranty or condition that cannot be excluded is restricted, at the Company’s option to:
                <ol>
                  <li>the re-supply of services or payment of the cost of re-supply of services; or</li>
                  <li>the replacement or repair of goods or payment of the cost of replacement or repair.</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <h3>Breach</h3>
            <ol className="PrivacyPolicy__list">
              <li>
                Where a party is in breach of this Agreement, the other party may issue a written notice (<strong>Breach Notice</strong>) requiring the party in breach that must set out:
                <ol>
                  <li>the nature of the breach;</li>
                  <li>the provisions of the Agreement that are alleged to have been breached;</li>
                  <li>a reasonable timeframe to remedy the breach in no less than 10 Business Days; and</li>
                  <li>the action required to remedy the breach.</li>
                </ol>
              </li>
              <li>
                Where a party issues a compliant Breach Notice in accordance with clause 15.1, the receiving party shall be required to respond and/or remedy the breach as so set out in the Breach Notice.  Failure to respond in writing setting out:
                <ol>
                  <li>the steps taken to remedy the breach; or</li>
                  <li>why the party believes it is not in breach as put forward in the Breach Notice,</li>
                  <li>shall not in itself confirm the alleged breach but shall be in itself a breach of this Agreement.</li>
                </ol>
              </li>
              <li>Failure to remedy a breach set out in a Breach Notice shall be a material breach of this Agreement (<strong>Material Breach</strong>).</li>
            </ol>
          </li>
          <li>
            <h3>Termination</h3>
            <ol className="PrivacyPolicy__list">
              <li><strong>Breach.</strong>  Where a party is in Material Breach of this Agreement, the other party may terminate this Agreement by giving written notice of termination, which shall become effective 5 Business Days after the date of the notice.</li>
              <li>
                <strong>Insolvency.</strong>  Either party may terminate this Agreement immediately by notice, if either party:
                <ol>
                  <li>stops or suspends or threatens to stop or suspend payment of all or a class of its debts;</li>
                  <li>is insolvent within the meaning of section 95A of the Corporations Act;</li>
                  <li>fails to comply with a statutory demand (within the meaning of section 459F(1) of the Corporations Act) unless:</li>
                  <li>the debt to which the statutory demand relates is discharged within 15 Business Days of the date of the failure; or</li>
                  <li>the party demonstrates to the satisfaction of the other party (acting reasonably) that it is able to pay all its debts as and when they become due and payable;</li>
                  <li>has an administrator appointed in respect of it;</li>
                  <li>has a controller within the meaning of section 9 of the Corporations Act or similar officer appointed to the whole or a substantial part of its assets or undertaking and that controller or similar officer is not removed within 15 Business Days of the appointment;</li>
                  <li>has an order made or a resolution passed for its winding up or dissolution or it enters into an arrangement, compromise or composition with or assignment for the benefit of its creditors or a class of them;</li>
                  <li>has any security enforced over, or a distress, execution or other similar process levied or served against, the whole or a substantial part of its assets or undertaking; or</li>
                  <li>is subject to any event which, under the law of any relevant jurisdiction, has an analogous or equivalent effect to any of the events listed above.</li>
                </ol>
              </li>
              <li>Expiry or termination of this Agreement is without prejudice to and does not affect the accrued rights or remedies of any of the parties arising in any way out of this Agreement up to the date of expiry or termination.</li>
              <li>The rights and obligations under the relevant provisions of clauses 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18 and 19 survive termination of this Agreement.</li>
            </ol>
          </li>
          <li>
            <h3>Disputes</h3>
            <ol className="PrivacyPolicy__list">
              <li>All disputes shall be handled in accordance with the Company’s dispute resolution policy.</li>
              <li>
                Where the Company does not have a relevant dispute resolution policy for a type of dispute, the following process shall apply:
                <ol>
                  <li><strong>Negotiation.</strong>  If there is a dispute between the parties relating to or arising out of this Agreement, then within 5 Business Days of a party notifying the other party of a dispute, senior representatives from each party must meet (or discuss directly via the telephone or internet) and use all reasonable endeavours acting in good faith to resolve the dispute by joint discussions;</li>
                  <li><strong>Mediation.</strong>  If the dispute between the parties relating to or arising out of this Agreement is not resolved within five Business Days of notification of the dispute under Clause 17.1, the parties must agree to submit the dispute to mediation, administered by lawyers engaged in alternative dispute resolution;</li>
                  <li><strong>Court proceedings.</strong>  A party may not commence court proceedings in relation to a dispute relating to or arising out of this Agreement until it has exhausted the procedures in this clause 17.2 unless the party seeks appropriate injunctive or other interlocutory relief to preserve property or rights or to avoid losses that are not compensable in damages.</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <h3>Force Majeure</h3>
            <ol className="PrivacyPolicy__list">
              <li>
                If a party is prevented in whole or in part from carrying out its obligations under this Agreement as a result of Force Majeure, it will promptly notify the other party accordingly.  The notice must:
                <ol>
                  <li>specify the obligations and the extent to which it cannot perform those obligations;</li>
                  <li>fully describe the event of Force Majeure;</li>
                  <li>estimate the time during which the Force Majeure will continue; and</li>
                  <li>specify the measures proposed to be adopted to remedy or abate the Force Majeure.</li>
                </ol>
              </li>
              <li>Following a notice of Force Majeure in accordance with clause 18.1 and while the Force Majeure continues, the obligations which cannot be performed because of the Force Majeure will be suspended, other than obligations to pay money that is due and payable.</li>
              <li>The party that is prevented from carrying out its obligations under this Agreement as a result of Force Majeure must remedy the Force Majeure to the extent reasonably practicable and resume performance of its obligations as soon as reasonably possible.</li>
              <li>The party that is prevented from carrying out its obligations under this Agreement as a result of Force Majeure must take all action reasonably practicable to mitigate any loss suffered by the other party as a result of the party’s failure to carry out its obligations under this Agreement.</li>
              <li>The term of this Agreement will not be extended by the period of Force Majeure.</li>
            </ol>
          </li>
          <li>
            <h3>Electronic Communication and Assignment</h3>
            <ol className="PrivacyPolicy__list">
              <li>The words in this clause that are defined in the Electronic Transactions Act 1999 (Cth) have the same meaning.</li>
              <li>The User can direct notices, enquiries, complaints and so forth to the Company as set out in this Agreement.  the Company will notify the User of a change of details from time-to-time.</li>
              <li>The Company will send the User notices and other correspondence to the details that the User submits to the Company, or that the User notifies the Company of from time-to-time. It is the User’s responsibility to update its contact details as they change.</li>
              <li>A consent, notice or communication under this Agreement is effective if it is sent as an electronic communication unless required to be physically delivered under law.</li>
              <li>Notices must be sent to a party’s most recent known contact details.</li>
              <li>The User may not assign or otherwise create an interest in this Agreement without the written consent of the Company.</li>
              <li>The Company may assign or otherwise create an interest in its rights under this Agreement by giving written notice to the User.</li>
            </ol>
          </li>
          <li>
            <h3>General</h3>
            <ol className="PrivacyPolicy__list">
              <li><strong>Prevalence.</strong> Each party to this Agreement agrees to the clauses in the Important Terms and the Special Conditions.  The Important Terms, any Special Conditions and the General Conditions form a single legal agreement.  To the extent that the Important Terms or the Special Conditions are inconsistent with the General Conditions, the terms of the Important Terms will prevail.   To the extent that the Special Conditions are inconsistent with the Important Terms, the Special Conditions will prevail.</li>
              <li><strong>Disclaimer.</strong>  Each party acknowledges that it has not relied on any representation, warranty or statement made by any other party, other than as set out in this Agreement.</li>
              <li><strong>Relationship.</strong>  The relationship of the parties to this Agreement does not form a joint venture or partnership.</li>
              <li><strong>Waiver.</strong>  No clause of this Agreement will be deemed waived and no breach excused unless such waiver or consent is provided in writing.</li>
              <li><strong>Further Assurances.</strong>  Each party must do anything necessary (including executing agreements and documents) to give full effect to this Agreement and the transaction facilitated by it.</li>
              <li><strong>Governing Law.</strong>  This Agreement is governed by the laws of the state of Victoria, Australia.  Each of the parties hereby submits to the non-exclusive jurisdiction of courts with jurisdiction there.</li>
              <li><strong>Severability.</strong>  Any clause of this Agreement, which is invalid or unenforceable is ineffective to the extent of the invalidity or unenforceability without affecting the remaining clauses of this Agreement.</li>
            </ol>
          </li>
        </ol>
      </div>
    </PolicyDocument>
  </Page>
))