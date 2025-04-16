# AI Week Event Page

This starter is made with [SNG Event Starter](https://github.com/scoopnewsgroup/gatsby-event-starter) - which is a blazing fast app generator for React.

## 🚀 Quick start

1. **Create an event page.**

    ```shell
    # Clone the repo
    git clone https://github.com/scoopnewsgroup/event-ai-week.git
    ```

1. **Start developing.**

    Navigate into the new event page’s directory, install npm packages if this is the first time and start it up.

    ```shell
    cd event-ai-week/
    yarn
    yarn start
    # Starts dev server automatically!
    ```

1. **Open the source code and start editing!**

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql) or get the basic how [query your your data](docs/gatsby-graphql.md)._

    ```bash
    ├── src
    │   ├── components
    │   │   ├── seo.js                  # SEO Component with Helmet tags
    │   │   ├── image.js                # Gatsby image component for speaker imanges
    │   │   ├── layout.js               # Layout component wraps entire app
    │   │   ├── navigation.js           # Navigation component
    │   │   ├── about.js                # About component
    │   │   └── speakers.js             # Speakers Component
    │   │   ├── agenda.js               # Agenda component
    │   │   ├── location.js             # Location component
    │   │   ├── footer.js               # Footer component
    │   │   ├── layout.css              # CSS file loaded in Layout compoment
    │   │   ├── layout.module.css       # CSS Module for Layout component
    │   │   ├── footer.module.css       # CSS Module for Footer component
    │   │   ├── navigation.module.css   # CSS Module for Navigation component
    │   ├── images
    │   ├── pages
    │   │   ├── 404.js
    │   │   ├── index.js
    │   └── scss
    │       └── variables.scss          # SCSS Variables used in CSS Modules
    └── README.md
    ```

## Components

### Navigation

  ```js
    <Navigation
      type="hamburger"
      items={[
          {
              title: "About",
              url: "/#about",
          },
          {
              title: "Sponsor",
              url: "/#sponsor",
          },
          {
              title: "Schedule",
              url: "/#schedule",
          },
          {
              title: "Host",
              url: "/#host",
          },
          {
              title: "Register",
              url: "/#schedule",
          },
      ]}
  />
  ```

## 💅 CSS - Component-Scoped Styles with CSS Modules

```css
/* inside src/components/container.module.css */
.container {
  margin: 3rem auto;
  max-width: 600px;
}
```

```js
// inside src/components/container.js
import React from "react"
import containerStyles from "./container.module.css"

export default ({ children }) => (
  /**
   * assign container object from containerStyles
   * You also do className={containerStyles.container}
   * if additional classes are not need
  */
  <section className={`container ${containerStyles.container}`}>
    {children}
  </section>
)
```

Learn more about [css-modules](https://www.gatsbyjs.org/tutorial/part-two/#css-modules) in gatsby.

## Resources

- [CSS Grid Lines](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Lines)
