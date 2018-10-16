import { getContentTypes } from './src/contentful/get'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
const contentful = require('contentful')
import * as config from './src/contentful/_config'

const client = contentful.createClient({
  space: config.SPACE_ID,
  accessToken: config.PROD_API_KEY
})

export default {
  getSiteData: () => ({
    title: 'React Static with Contentful CMS'
  }),
  getRoutes: async () => {
    const entries = await client.getEntries({
      content_type: 'article'
    })

    const articles = entries.items.map(item => item.fields)

    return [
      {
        path: '/',
        component: 'src/containers/Home'
      },
      {
        path: '/about',
        component: 'src/containers/About'
      },
      {
        path: '/data',
        component: 'src/containers/Data',
        getData: async () => ({
          title: 'Data!',
          data: await client.getContentTypes()
        })
      },
      {
        path: '/articles',
        component: 'src/containers/Articles',
        getData: () => ({
          data: entries
        }),
        children: articles.map(article => ({
          path: `/article/${article.sys.id}`,
          component: 'src/containers/Data',
          getData: () => ({
            data: article
          })
        }))
      },
      {
        is404: true,
        component: 'src/containers/404'
      }
    ]
  }
  // renderToHtml: (render, Comp, meta) => {
  //   const sheet = new ServerStyleSheet()
  //   const html = render(sheet.collectStyles(<Comp />))
  //   meta.styleTags = sheet.getStyleElement()
  //   return html
  // },
  // Document: class CustomHtml extends Component {
  //   render() {
  //     const { Html, Head, Body, children, renderMeta } = this.props
  //
  //     return (
  //       <Html>
  //         <Head>
  //           <meta charSet="UTF-8" />
  //           <meta
  //             name="viewport"
  //             content="width=device-width, initial-scale=1"
  //           />
  //           {renderMeta.styleTags}
  //         </Head>
  //         <Body>{children}</Body>
  //       </Html>
  //     )
  //   }
  // }
}
