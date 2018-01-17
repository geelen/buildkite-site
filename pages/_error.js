import Page, { page } from 'components/Page'

const STATUS_MESSAGES = {
  404: {
    title: 'Page not found',
    description: 'Sorry, the page you’re trying to access could not be found'
  }
}

const FALLBACK_STATUS_MESSAGE = {
  title: 'Something went wrong',
  description: 'We’re not entirely sure what – try one of the links above'
}

class Error extends React.Component {
  static getInitialProps(ctx) {
    const { res, err, jsonPageRes } = ctx;

    let statusCode = null;

    if (res) {
      statusCode = res.statusCode
    } else if (err) {
      statusCode = err.statusCode
    } else if (jsonPageRes) {
      statusCode = jsonPageRes.status
    }

    return { statusCode }
  }

  render() {
    const { loggedIn, statusCode } = this.props;

    const { title, description } = (
      statusCode
        ? (
          STATUS_MESSAGES[statusCode] || { title: `Error ${statusCode}`, description: 'Sorry about that' }
        )
        : FALLBACK_STATUS_MESSAGE
    );

    return (
      <Page
        headTitle={title}
        title={title}
        description={description}
        loggedIn={loggedIn}
      >
      </Page>
    )
  }
}

export default page(Error)
