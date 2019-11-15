import React from "react"
import Helmet from "react-helmet"

export default ( props) => {

  const defaultProps = {
    lang: `en`,
    description: `My resume`,
    name: 'Resume.js'
  }

  const title = props.page? `${props.page} | ${props.meta.name}` : props.meta.name ? props.meta.name : defaultProps.name
  const description = props.description || defaultProps.description


  return (
    <Helmet>
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      <meta charset="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/scroll.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/scroll.png" />
    </Helmet>
  )
}
