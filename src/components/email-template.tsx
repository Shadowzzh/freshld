import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'

interface EmailTemplateProps {
  name: string
  phone: string
  email: string
  address: string
  company: string
  node: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  phone,
  email,
  address,
  company,
  node,
}) => (
  <Html>
    <Head />
    <Preview>官网渠道新增客户登记</Preview>

    <Body style={main}>
      <Container style={container}>
        <Section>
          <Row>
            <Column style={tableCell}>
              <Text style={heading}>客户信息</Text>
            </Column>
          </Row>
        </Section>
        <Section style={informationTable}>
          <Row style={informationTableRow}>
            <Column colSpan={2}>
              <Section>
                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>联系人姓名</Text>
                    <Link
                      style={{
                        ...informationTableValue,
                      }}
                    >
                      {name}
                    </Link>
                  </Column>
                </Row>

                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>联系人电话</Text>
                    <Text style={informationTableValue}>{phone}</Text>
                  </Column>
                </Row>

                <Row>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>邮箱</Text>
                    <Link
                      style={{
                        ...informationTableValue,
                      }}
                    >
                      {email}
                    </Link>
                  </Column>
                  <Column style={informationTableColumn}>
                    <Text style={informationTableLabel}>预计采购点数</Text>
                    <Text style={informationTableValue}>{node}</Text>
                  </Column>
                </Row>
              </Section>
            </Column>
            <Column style={informationTableColumn}>
              <Row>
                <Column style={informationTableColumn}>
                  <Text style={informationTableLabel}>公司名称</Text>
                  <Text style={informationTableValue}>{company}</Text>
                </Column>
              </Row>
              <Row>
                <Column style={informationTableColumn} rowSpan={2}>
                  <Text style={informationTableLabel}>地址</Text>
                  <Text style={informationTableValue}>{address}</Text>
                </Column>
              </Row>
            </Column>
          </Row>
        </Section>
        <Text style={footerCopyright}>
          Copyright © {new Date().getFullYear()} Magic Shield. <br />{' '}
          <Link href='https://www.fyreshld.com'>All rights reserved</Link>
        </Text>
      </Container>
    </Body>
  </Html>
)

const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  backgroundColor: '#ffffff',
}

const resetText = {
  margin: '0',
  padding: '0',
  lineHeight: 1.4,
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '660px',
  maxWidth: '100%',
}

const tableCell = { display: 'table-cell' }

const heading = {
  fontSize: '32px',
  fontWeight: '300',
  color: '#888888',
}

const informationTable = {
  borderCollapse: 'collapse' as const,
  borderSpacing: '0px',
  color: 'rgb(51,51,51)',
  backgroundColor: 'rgb(250,250,250)',
  borderRadius: '3px',
  fontSize: '12px',
}

const informationTableRow = {
  height: '46px',
}

const informationTableColumn = {
  paddingLeft: '20px',
  borderStyle: 'solid',
  borderColor: 'white',
  borderWidth: '0px 1px 1px 0px',
  height: '44px',
}

const informationTableLabel = {
  ...resetText,
  color: 'rgb(102,102,102)',
  fontSize: '10px',
}

const informationTableValue = {
  fontSize: '12px',
  margin: '0',
  padding: '0',
  lineHeight: 1.4,
}

const footerCopyright = {
  margin: '25px 0 0 0',
  textAlign: 'center' as const,
  fontSize: '12px',
  color: 'rgb(102,102,102)',
}
