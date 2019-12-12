import pluginPage from 'components/Page/plugin'
import { useRouter } from 'next/router'

export default function specifyPlugin() {
  const pathname = useRouter().query.plugin

  if (pathname != null) {
    return (
      pluginPage(pathname)()
    )
  }
  return null
}

specifyPlugin.getInitialProps = () => {
  console.log("Is this enough to make this dynamic?")
  return {}
}
