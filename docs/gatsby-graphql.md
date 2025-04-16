# graphql queries

```js
import { useStaticQuery, graphql } from "gatsby"
const data = useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

<Header siteTitle={data.site.siteMetadata.title} />
// See: https://www.gatsbyjs.org/docs/use-static-query/
```
