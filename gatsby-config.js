module.exports = {
  pathPrefix: `/`,
  plugins: [
    // https://www.gatsbyjs.org/packages/gatsby-plugin-sass/#other-options
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-sass",
      options: { implementation: require("sass") },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-157607416-1",
        head: true,
        // cookieDomain: "https://aiweek.com",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://aiweek.com",
        sitemap: null,
        policy: [
          { userAgent: "Googlebot", allow: "/" },
          { userAgent: "GPTBot", disallow: ["/"] },
          { userAgent: "GPT-3-Crawler", disallow: ["/"] },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://aiweek.com`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-transformer-csv`,
      options: {
        noheader: false,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `./`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/AI-Favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "mso2xty",
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
        minify: false,
        transpileTemplateLiterals: false,
        pure: true,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  //assetPrefix: `https://cyberscoop.com/events/ci/cyberweek`,
  siteMetadata: {
    siteUrl: `https://aiweek.com`,
    title: `AI Week 2025`,
    description: `AI Week is the nation's only week-long tech festival dedicated to artificial intelligence and its potential to transform the world we live in. During AI Week 2025, thousands of C-suite leaders from the government, tech and education communities across the U.S. will gather online and in person to participate in hundreds of community events, interactive sessions, lightning talks, networking opportunities and more for an exclusive look at the latest in the AI space.`,
    author: `Scoop News Group`,
    twitterImage: `https://s3.amazonaws.com/sng-global-web-assets/images/ai-week/2025/aiweek25Twitter3.png`,
    facebookImage: `https://s3.amazonaws.com/sng-global-web-assets/images/ai-week/2025/aiweek25Facebook3.png`,
    speakers: [
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Froelich_Craig.png",
        name: "Craig Froelich",
        title: "CISO",
        org: "Bank of America",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Easterly_Jen.png",
        name: "Jen Easterly",
        title: "Director",
        org: "CISA",
        event: "NVTC Capital Cybersecurity Summit",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Wales_Brandon.png",
        name: "Brandon Wales",
        title: "Executive Director",
        org: "CISA",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/McKeown_David.png",
        name: "David McKeown",
        title: "Deputy CIO for Cybersecurity",
        org: "DOD",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Plater_Tony.png",
        name: "Tony Plater",
        title: "CISO",
        org: "Dept. of Navy",
        event: "SNG Live: Modernizing Federal Cybersecurity",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Ash_Will.jpg",
        name: "Will Ash",
        title: "Sr. Director, U.S. Public Sector Security",
        org: "Cisco",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Auh_Yoon.png",
        name: "Yoon Auh",
        title: "Founder",
        org: "NUTS Technologies, Inc.",
        event: "Data is the Endpoint!™",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Baer_Merritt.png",
        name: "Merritt Baer",
        title: "Principal, Office of the CISO",
        org: "AWS",
        event: "SNG Live: Modernizing Federal Cybersecurity",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/barney_shane.png",
        name: "Shane Barney",
        title: "CISO",
        org: "USCIS",
        event: "SNG Live: Modernizing Federal Cybersecurity",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Baggett_Mark.png",
        name: "Mark Baggett",
        title: "Senior Instructor & Technical Advisor to the DOD",
        org: "SANS Institute",
        event: "New Tools for Your Threat Hunting Toolbox",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Bielawski_Joe.png",
        name: "Joe Bielawski",
        title: "President",
        org: "Knowledge Services",
        event: "Interview with StateRAMP’s Founders",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Boudreau_Todd.png",
        name: "Todd Boudreau",
        title: "Deputy Commandant",
        org: "U.S. Army Cyber School",
        event: "Zero Trust - Cybersecurity Beyond the Perimeter",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Burg_Steve.png",
        name: "Stephen Burg",
        title: "Director of Product & Strategy",
        org: "Cyberbit",
        event: "ROI of Cybersecurity Skills Development",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Caron_Gerald.png",
        name: "Gerald Caron",
        title:
          "CIO & Assistant Inspector General of Information Technology, OIG",
        org: "HHS",
        event: "SNG Live: Modernizing Federal Cybersecurity",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Clark_Laura.png",
        name: "Laura Clark",
        title: "Chief Security Officer",
        org: "State of Michigan",
        event: "SNG Live: Securing State, Local & Higher Ed",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Coose_Matt.png",
        name: "Matt Coose",
        title: "CEO & Founder",
        org: "Qmulos",
        event: "The Future of Compliance is Now",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Connelly_Chris.png",
        name: "Chris Connelly",
        title: "Area Leader, Public Sector Cybersecurity",
        org: "Cisco",
        event: "SNG Live: Securing State, Local & Higher Ed",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Cotterill_Ted.png",
        name: "Ted Cotterill",
        title: "Chief Privacy Officer",
        org: "State of Indiana",
        event: "Interview with StateRAMP’s Founders",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Covino_Christopher.png",
        name: "Christopher Covino",
        title:
          "Policy Director for Cybersecurity, Mayor Garcetti's Office of Public Safety",
        org: "City of Los Angeles",
        event: "SNG Live: Securing State, Local & Higher Ed",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Crummey_Chris.png",
        name: "Chris Crummey",
        title: "Cybersecurity Leader",
        org: "IBM Center for Government",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Cyrus_John.png",
        name: "John Cyrus",
        title: "Principal",
        org: "Deep Water Point",
        event: "Zero Trust - Cybersecurity Beyond the Perimeter",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Dameff_Christian.png",
        name: "Christian Dameff",
        title: "Medical Director of Cybersecurity",
        org: "University of California San Diego",
        event: "Prioritizing Hospital Cybersecurity",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Day_Bob.png",
        name: "Bob Day",
        title: "President",
        org: "BlackBerry Government Solutions",
        event: "SNG Live: Modernizing Federal Cybersecurity",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Deaver-Vazquez_Charlene.png",
        name: "Charlene Deaver-Vazquez",
        title: "President",
        org: "FISMACS, LLC",
        event: "A Cyber Series: What's the Risk?",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Demopoulos_Ted.png",
        name: "Ted Demopoulos",
        title: "Principal Instructor",
        org: "SANS Institute",
        event:
          "Resilience: Surviving Ransomware, Pandemics, and Other Highly...",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Domas_Stephanie.png",
        name: "Stephanie Domas",
        title: "Director, Security Strategy & Communications",
        org: "Intel Corporation",
        event: "Prioritizing Hospital Cybersecurity",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Donbeck_Tina.png",
        name: "Tina Donbeck",
        title: "CIO",
        org: "DFC",
        event: "Zero Trust - Cybersecurity Beyond the Perimeter",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Duff_Frank.png",
        name: "Frank Duff",
        title: "GM, ATT&CK Evaluations",
        org: "MITRE Engenuity",
        event: "2021 Managed Services Report: No Rest for the Wary",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Eckman_Bob.png",
        name: "Bob Eckman",
        title: "CISO",
        org: "Kent State University",
        event: "SNG Live: Securing State, Local & Higher Ed",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Farro_Briana.png",
        name: "Briana Farro",
        title: "Principal Engineer, Global Technical Director, Endpoint & EDR",
        org: "McAfee",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Fathi_Sandra.png",
        name: "Sandra Fathi",
        title: "CSO",
        org: "Gregory FCA",
        event: "Begin at Step Zero: Simplifying the Zero Trust Journey",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Frincke_Deborah.png",
        name: "Dr. Deborah Frincke",
        title:
          "Associate Laboratory Director for National Security Sciences, Oak Ridge National Laboratory (ORNL)",
        org: "Dept. of Energy",
        event: "Zero Trust - Cybersecurity Beyond the Perimeter",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Galloway_Mari.png",
        name: "Mari Galloway",
        title: "CEO & Founding Board Member",
        org: "Women's Society of Cyberjutsu",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/George_Barbara.png",
        name: "Dr. Barbara George",
        title: "Executive Director, Advisory Services",
        org: "Fortalice Solutions",
        event: "NVTC Capital Cybersecurity Summit",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Gerenstein_Ben.png",
        name: "Ben Gerenstein",
        title: "President & CEO",
        org: "Rimstorm",
        event: "CMMC Compliance Using an Enclave",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Gin_Alan.png",
        name: "Alan Gin",
        title: "CEO",
        org: "Zero Down Software",
        event: "Begin at Step Zero: Simplifying the Zero Trust Journey",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Gula_Ron.png",
        name: "Ron Gula",
        title: "President & Co-Founder",
        org: "Gula Tech Adventures",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Hallenbeck_Chris.png",
        name: "Chris Hallenbeck",
        title: "CISO",
        org: "Tanium",
        event: "Cyber Spotlight Series",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Henry_Lindsey.png",
        name: "Lindsey Henry",
        title: "Sr. Technical Program Manager",
        org: "AWS",
        event: "Begin at Step Zero: Simplifying the Zero Trust Journey",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Hernandez_Steven.png",
        name: "Steven Hernandez",
        title: "CISO",
        org: "Dept. of Education",
        event: "SNG Live: Modernizing Federal Cybersecurity",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Houser_Beau.png",
        name: "Beau Houser",
        title: "CISO",
        org: "Census Bureau",
        event: "SNG Live: Modernizing Federal Cybersecurity",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Kellermann_Tom.png",
        name: "Tom Kellermann",
        title: "Head of Cybersecurity Strategy",
        org: "VMware",
        event: "SNG Live: Modernizing Federal Cybersecurity",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Lalumondier_Rob.png",
        name: "Rob Lalumondier",
        title: "Senior Director, Federal Civilian",
        org: "McAfee Enterprise",
        event: "SNG Live: Modernizing Federal Cybersecurity",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Lauro_Tony.png",
        name: "Tony Lauro",
        title: "Director of Security Technology & Strategy",
        org: "Akamai",
        event: "SNG Live: Modernizing Federal Cybersecurity",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Lee_Adam.png",
        name: "Adam Lee",
        title: "VP & CSO",
        org: "Dominion Energy",
        event: "NVTC Capital Cybersecurity Summit",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Lesser_Nate.png",
        name: "Nate Lesser",
        title: "CISO",
        org: "Children's National Hospital",
        event: "NVTC Capital Cybersecurity Summit",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Love_Byron.png",
        name: "Byron Love",
        title: "Sr. Program Manager, Cyber Protection Services",
        org: "Raytheon",
        event: "Cyber Spotlight",
      },

      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Hogan-Burney_Amy.png",
        name: "Amy Hogan-Burney",
        title: "General Manager, Digital Crimes Unit",
        org: "Microsoft",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Horvath_Steve.png",
        name: "Steve Horvath",
        title: "Vice President of Strategy & Cloud",
        org: "Telos Corporation",
        event: "OSCAL, Your Fast Pass to FedRAMP and Beyond",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Laudermilch_Norm.png",
        name: "Norm Laudermilch",
        title: "Chief Cyber Officer",
        org: "LookingGlass",
        event: "Cyber Spotlight Series",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Makstman_Michael.png",
        name: "Michael Makstman",
        title: "CISO",
        org: "City & County of San Francisco",
        event: "SNG Live: Securing State, Local & Higher Ed",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Martin_Natalia.png",
        name: "Natalia Martin",
        title:
          "Deputy Director, National Cybersecurity Center of Excellence, ITL",
        org: "NIST",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/McCarthy_Greg.png",
        name: "Greg McCarthy",
        title: "CISO",
        org: "City of Boston",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Lijeskic_Milica.png",
        name: "Milica Lijeskic",
        title: "CEO",
        org: "Kyberstorm",
        event: "OSCAL, Your Fast Pass to FedRAMP and Beyond",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Londono_Hernan.png",
        name: "Hernán Londoño",
        title: "Senior Higher Education Strategist",
        org: "Dell Technologies",
        event: "SNG Live: Securing State, Local & Higher Ed",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Messerschmidt_Erika.png",
        name: "Erika Messerschmidt",
        title: "Solutions Engineer",
        org: "Okta",
        event: "SNG Live: Securing State, Local & Higher Ed",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Naseem_Sajed.png",
        name: "Sajed Naseem",
        title: "CISO",
        org: "New Jersey Courts",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/McGrath_Leah.png",
        name: "Leah McGrath",
        title: "Executive Director",
        org: "StateRAMP",
        event: "Interview with StateRAMP’s Founders",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Miaoulis_William.png",
        name: "William Miaoulis",
        title: "CISO",
        org: "Auburn University",
        event: "SNG Live: Securing State, Local & Higher Ed",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Morris_Ken.png",
        name: "Ken Morris",
        title: "Founder & CEO",
        org: "KnectIQ",
        event: "Begin at Step Zero: Simplifying the Zero Trust Journey",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/OBrien_Nichole.png",
        name: "Nichole O'Brien",
        title: "Branch Manager for Cybersecurity and IT Solutions",
        org: "Dynetics (a Leidos company)",
        event: "SNG Live: Securing State, Local & Higher Ed",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/OFarril_Roger.png",
        name: "Roger O'Farril",
        title: "Instructor",
        org: "SANS Institute",
        event: "Enhancing Visibility for Cloud Security Operations",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Panych_Vitaliy.png",
        name: "Vitaliy Panych",
        title: "CISO",
        org: "State of California",
        event: "SNG Live: Securing State, Local & Higher Ed",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Patton_Helen.png",
        name: "Helen Patton",
        title: "Advisory CISO",
        org: "Duo Security",
        event: "SNG Live: Securing State, Local & Higher Ed",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Peoples_Dovarius.png",
        name: "Dovarius Peoples",
        title: "CIO",
        org: "U.S. Army Corps of Engineers",
        event: "SNG Live: Modernizing Federal Cybersecurity",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Perry_James.png",
        name: "James Perry",
        title: "SA Security Leader, Worldwide Public Sector",
        org: "AWS",
        event: "SNG Live: Securing State, Local & Higher Ed",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Rainosek_Nancy.png",
        name: "Nancy Rainosek",
        title: "CISO",
        org: "State of Texas",
        event: "SNG Live: Securing State, Local & Higher Ed",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Rose_Scott.png",
        name: "Scott Rose",
        title: "Computer Scientist",
        org: "NIST",
        event: "Zero Trust - Cybersecurity Beyond the Perimeter",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Russo_Chris.png",
        name: "Chris Russo",
        title: "Director, U.S. State, Local and Education Sales",
        org: "BlackBerry",
        event: "SNG Live: Securing State, Local & Higher Ed",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Ryan_Jet.png",
        name: "Jet Ryan",
        title: "Solution Architect",
        org: "Telos Corporation",
        event: "OSCAL, Your Fast Pass to FedRAMP and Beyond",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Schroeder_Rusty.png",
        name: 'Chris "Rusty" Schroeder',
        title: "Master Cyber Trainer",
        org: "Cyberbit",
        event: "LIVE Incident Response Simulation on Cyberbit Cyber Range",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Schnitter_Mark.png",
        name: "Mark Schnitter",
        title: "CIO",
        org: "Nexigen",
        event: "Begin at Step Zero: Simplifying the Zero Trust Journey",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Self_Cat.png",
        name: "Cat Self",
        title: "Adversary Emulation Engineer",
        org: "The MITRE Corporation",
        event: "2021 Managed Services Report: No Rest for the Wary",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Silva_Daniel.png",
        name: "Daniel Silva",
        title: "Chief Innovation Officer",
        org: "DMS International",
        event: "ROI of Cybersecurity Skills Development",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Singleton_Matt.png",
        name: "Matt Singleton",
        title: "CISO",
        org: "State of Oklahoma",
        event: "SNG Live: Securing State, Local & Higher Ed",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Sisson_Greg.png",
        name: "Greg Sisson",
        title: "CISO",
        org: "Dept. of Energy",
        event: "SNG Live: Modernizing Federal Cybersecurity",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Sloan_JR.png",
        name: "J.R. Sloan",
        title: "CIO",
        org: "State of Arizona",
        event: "Interview with StateRAMP’s Founders",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Smith_Scott.png",
        name: "Scott Smith",
        title: "Partner, Government & Public Sector Cybersecurity Lead",
        org: "EY",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Stewart_Andrew.png",
        name: "Andy Stewart",
        title:
          "Senior National Security & Government Strategist, Cybersecurity",
        org: "Cisco",
        event: "The Future of Compliance is Now",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Stewart_Camille.png",
        name: "Camille Stewart",
        title:
          "Co-Founder, #ShareTheMicInCyber & Global Head, Product Security Strategy",
        org: "Google",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Tabassi_Elham.png",
        name: "Elham Tabassi",
        title: "Chief of Staff, Information Technology Laboratory",
        org: "NIST",
        event: "SNG Live: Modernizing Federal Cybersecurity",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Wei_James.png",
        name: "James Wei",
        title: "SOC Transformation Lead",
        org: "Leidos",
        event: "SNG Live: Modernizing Federal Cybersecurity",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Wright_Ben.png",
        name: "Ben Wright",
        title: "Senior Instructor",
        org: "SANS Institute",
        event: "The Influence of New Privacy Laws on Cybersecurity Practices",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Todd_Tommy.png",
        name: "Tommy Todd",
        title: "VP of Security",
        org: "Code 42",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Travis_Matthew.png",
        name: "Matthew Travis",
        title: "CEO",
        org: "CMMC Accreditation Body",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Vida_Juliana.png",
        name: "Juliana Vida",
        title: "Group Vice President & Chief Strategy Advisor, Public Sector",
        org: "Splunk",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/White_Jason.png",
        name: "Jason White",
        title: "Public Sector Solutions Architect",
        org: "McAfee Enterprise",
        event: "SNG Live: Securing State, Local & Higher Ed",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Wilkerson_Jessica.png",
        name: "Jessica Wilkerson",
        title:
          "Sr. Cyber Policy Advisor, Office of Strategic Partnerships & Technology Innovation, Center for Devices & Radiological Health",
        org: "FDA",
        event: "Prioritizing Hospital Cybersecurity",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Wilson_Micah.png",
        name: "Micah Wilson",
        title: "Systems Engineering Manager, Public Sector",
        org: "Duo Security",
        event: "SNG Live: Modernizing Federal Cybersecurity",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Wood_Robert.png",
        name: "Robert Wood",
        title: "CISO & Director, Information Security & Privacy Group, CMS",
        org: "HHS",
        event: "Zero Trust - Cybersecurity Beyond the Perimeter",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Young_Lisa.png",
        name: "Lisa Young",
        title: "VP, Cyber Risk",
        org: "Axio Global",
        event: "Prioritizing Hospital Cybersecurity",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Youngquist_Kevin.png",
        name: "Kevin Youngquist",
        title: "VP, Public Sector Sales",
        org: "Veritas Technologies",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Zabierek_Lauren.png",
        name: "Lauren Zabierek",
        title:
          "Co-Founder, #ShareTheMicInCyber & Executive Director, Cyber Project",
        org: "Harvard Belfer Center",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Kamali_Goldy.png",
        name: "Goldy Kamali",
        title: "Founder & CEO",
        org: "Scoop News Group",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Barnett_Jackson.png",
        name: "Jackson Barnett",
        title: "Tech Reporter",
        org: "FedScoop",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Freed_Ben.png",
        name: "Benjamin Freed",
        title: "Technology Editor",
        org: "StateScoop",
        event: "SNG Live: Securing State, Local & Higher Ed",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Kash_Wyatt.png",
        name: "Wyatt Kash",
        title: "SVP, Content Strategy",
        org: "Scoop News Group",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Mitchell_Billy.png",
        name: "Billy Mitchell",
        title: "VP, Content & Community & Editor-in-Chief",
        org: "FedScoop",
        event: "SNG Live: Modernizing Federal Cybersecurity",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Francis_Rose.png",
        name: "Francis Rose",
        title: "VP, Multimedia Solutions",
        org: "Scoop News Group",
        event: "Cyber Spotlight",
      },
      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Stone_Jeff.png",
        name: "Jeff Stone",
        title: "Editor-in-Chief",
        org: "CyberScoop",
        event: "SNG Live: Modernizing Federal Cybersecurity",
      },

      {
        image:
          "https://s3.amazonaws.com/sng-global-web-assets/images/cyberweek/Williams_Jake.png",
        name: "Jake Williams",
        title: "VP, Content & Community, SLED",
        org: "StateScoop & EdScoop",
        event: "SNG Live: Securing State, Local & Higher Ed",
      },
    ],
    sponsors: [
      {
        name: "Google Cloud",
        package: "Diamond",
        logo:
          "https://s3.amazonaws.com/sng-global-web-assets/content_studio/images/clients/googlecloudw.png",
        url: "https://cloud.google.com/solutions/government/",
        width: "250px",
      },
      {
        name: "Verizon",
        package: "Diamond",
        logo:
          "https://s3.amazonaws.com/sng-global-web-assets/content_studio/images/clients/verizonw.png",
        url: "https://enterprise.verizon.com/solutions/public-sector/federal/",
        width: "200px",
      },
    ],
    defaultTabs: {
      agenda: 1,
      onDemand: 1,
      live: 1,
    },
    videoPlayerSetting: {
      accoundId: "6188831335001",
      playerId: "CRxQL9qKc",
      liveMainVideoId: "ref:2021_cw_spotlight_day3",
      liveDVRVideoId: "ref:2021_cw_spotlight_day3",
      liveSessionPlaylistId: "1795885760515091416",
      onDemandSessionsPlaylistId: "1795885760515091416",
      placeholders: [
        {
          name: "Day 1 palceholder",
          inactiveAt: "2021-10-18T12:59:59-0400",
          uri:
            "https://s3.amazonaws.com/sng-global-web-assets/images/ai-week/2024/spotlight/AIWeek_Spotlight_Placeholder.png",
          enable: true,
        },
        {
          name: "Day 2 palceholder",
          activeAt: "2021-10-18T12:00:00-0400",
          inactiveAt: "2021-10-19T09:59:59-0400",
          uri:
            "https://s3.amazonaws.com/sng-global-web-assets/images/ai-week/2024/spotlight/AIWeek_Spotlight_Placeholder.png",
          enable: true,
        },
        {
          name: "Day 3 palceholder",
          activeAt: "2021-10-19T12:00:00-0400",
          inactiveAt: "2021-10-20T12:59:59-0400",
          uri:
            "https://s3.amazonaws.com/sng-global-web-assets/images/ai-week/2024/spotlight/AIWeek_Spotlight_Placeholder.png",
          enable: true,
        },
        {
          name: "Day 4 palceholder",
          activeAt: "2021-05-12T18:00:00-0400",
          inactiveAt: "2021-05-13T17:59:59-0400",
          uri:
            "https://s3.amazonaws.com/sng-global-web-assets/images/ai-week/2024/spotlight/AIWeek_Spotlight_Placeholder.png",
          enable: false,
        },
        {
          name: "Day 5 palceholder",
          activeAt: "2021-05-13T18:00:00-0400",
          uri:
            "https://s3.amazonaws.com/sng-global-web-assets/images/ai-week/2024/spotlight/AIWeek_Spotlight_Placeholder.png",
          enable: false,
        },
      ],
    },
    venue: {
      name: "The Conrad",
      street: "950 New York Ave NW",
      city: "Washington",
      state: "DC",
      zipCode: "20001",
    },
    defaults: {
      agendaAllSessionsText: "All Sessions",

      countries: [
        {
          name: "Afghanistan",
          alpha2Code: "AF",
          numericCode: "004",
        },
        {
          name: "Åland Islands",
          alpha2Code: "AX",
          numericCode: "248",
        },
        {
          name: "Albania",
          alpha2Code: "AL",
          numericCode: "008",
        },
        {
          name: "Algeria",
          alpha2Code: "DZ",
          numericCode: "012",
        },
        {
          name: "American Samoa",
          alpha2Code: "AS",
          numericCode: "016",
        },
        {
          name: "Andorra",
          alpha2Code: "AD",
          numericCode: "020",
        },
        {
          name: "Angola",
          alpha2Code: "AO",
          numericCode: "024",
        },
        {
          name: "Anguilla",
          alpha2Code: "AI",
          numericCode: "660",
        },
        {
          name: "Antarctica",
          alpha2Code: "AQ",
          numericCode: "010",
        },
        {
          name: "Antigua and Barbuda",
          alpha2Code: "AG",
          numericCode: "028",
        },
        {
          name: "Argentina",
          alpha2Code: "AR",
          numericCode: "032",
        },
        {
          name: "Armenia",
          alpha2Code: "AM",
          numericCode: "051",
        },
        {
          name: "Aruba",
          alpha2Code: "AW",
          numericCode: "533",
        },
        {
          name: "Australia",
          alpha2Code: "AU",
          numericCode: "036",
        },
        {
          name: "Austria",
          alpha2Code: "AT",
          numericCode: "040",
        },
        {
          name: "Azerbaijan",
          alpha2Code: "AZ",
          numericCode: "031",
        },
        {
          name: "Bahamas",
          alpha2Code: "BS",
          numericCode: "044",
        },
        {
          name: "Bahrain",
          alpha2Code: "BH",
          numericCode: "048",
        },
        {
          name: "Bangladesh",
          alpha2Code: "BD",
          numericCode: "050",
        },
        {
          name: "Barbados",
          alpha2Code: "BB",
          numericCode: "052",
        },
        {
          name: "Belarus",
          alpha2Code: "BY",
          numericCode: "112",
        },
        {
          name: "Belgium",
          alpha2Code: "BE",
          numericCode: "056",
        },
        {
          name: "Belize",
          alpha2Code: "BZ",
          numericCode: "084",
        },
        {
          name: "Benin",
          alpha2Code: "BJ",
          numericCode: "204",
        },
        {
          name: "Bermuda",
          alpha2Code: "BM",
          numericCode: "060",
        },
        {
          name: "Bhutan",
          alpha2Code: "BT",
          numericCode: "064",
        },
        {
          name: "Bolivia (Plurinational State of)",
          alpha2Code: "BO",
          numericCode: "068",
        },
        {
          name: "Bonaire, Sint Eustatius and Saba",
          alpha2Code: "BQ",
          numericCode: "535",
        },
        {
          name: "Bosnia and Herzegovina",
          alpha2Code: "BA",
          numericCode: "070",
        },
        {
          name: "Botswana",
          alpha2Code: "BW",
          numericCode: "072",
        },
        {
          name: "Bouvet Island",
          alpha2Code: "BV",
          numericCode: "074",
        },
        {
          name: "Brazil",
          alpha2Code: "BR",
          numericCode: "076",
        },
        {
          name: "British Indian Ocean Territory",
          alpha2Code: "IO",
          numericCode: "086",
        },
        {
          name: "United States Minor Outlying Islands",
          alpha2Code: "UM",
          numericCode: "581",
        },
        {
          name: "Virgin Islands (British)",
          alpha2Code: "VG",
          numericCode: "092",
        },
        {
          name: "Virgin Islands (U.S.)",
          alpha2Code: "VI",
          numericCode: "850",
        },
        {
          name: "Brunei Darussalam",
          alpha2Code: "BN",
          numericCode: "096",
        },
        {
          name: "Bulgaria",
          alpha2Code: "BG",
          numericCode: "100",
        },
        {
          name: "Burkina Faso",
          alpha2Code: "BF",
          numericCode: "854",
        },
        {
          name: "Burundi",
          alpha2Code: "BI",
          numericCode: "108",
        },
        {
          name: "Cambodia",
          alpha2Code: "KH",
          numericCode: "116",
        },
        {
          name: "Cameroon",
          alpha2Code: "CM",
          numericCode: "120",
        },
        {
          name: "Canada",
          alpha2Code: "CA",
          numericCode: "124",
        },
        {
          name: "Cabo Verde",
          alpha2Code: "CV",
          numericCode: "132",
        },
        {
          name: "Cayman Islands",
          alpha2Code: "KY",
          numericCode: "136",
        },
        {
          name: "Central African Republic",
          alpha2Code: "CF",
          numericCode: "140",
        },
        {
          name: "Chad",
          alpha2Code: "TD",
          numericCode: "148",
        },
        {
          name: "Chile",
          alpha2Code: "CL",
          numericCode: "152",
        },
        {
          name: "China",
          alpha2Code: "CN",
          numericCode: "156",
        },
        {
          name: "Christmas Island",
          alpha2Code: "CX",
          numericCode: "162",
        },
        {
          name: "Cocos (Keeling) Islands",
          alpha2Code: "CC",
          numericCode: "166",
        },
        {
          name: "Colombia",
          alpha2Code: "CO",
          numericCode: "170",
        },
        {
          name: "Comoros",
          alpha2Code: "KM",
          numericCode: "174",
        },
        {
          name: "Congo",
          alpha2Code: "CG",
          numericCode: "178",
        },
        {
          name: "Congo (Democratic Republic of the)",
          alpha2Code: "CD",
          numericCode: "180",
        },
        {
          name: "Cook Islands",
          alpha2Code: "CK",
          numericCode: "184",
        },
        {
          name: "Costa Rica",
          alpha2Code: "CR",
          numericCode: "188",
        },
        {
          name: "Croatia",
          alpha2Code: "HR",
          numericCode: "191",
        },
        {
          name: "Cuba",
          alpha2Code: "CU",
          numericCode: "192",
        },
        {
          name: "Curaçao",
          alpha2Code: "CW",
          numericCode: "531",
        },
        {
          name: "Cyprus",
          alpha2Code: "CY",
          numericCode: "196",
        },
        {
          name: "Czech Republic",
          alpha2Code: "CZ",
          numericCode: "203",
        },
        {
          name: "Denmark",
          alpha2Code: "DK",
          numericCode: "208",
        },
        {
          name: "Djibouti",
          alpha2Code: "DJ",
          numericCode: "262",
        },
        {
          name: "Dominica",
          alpha2Code: "DM",
          numericCode: "212",
        },
        {
          name: "Dominican Republic",
          alpha2Code: "DO",
          numericCode: "214",
        },
        {
          name: "Ecuador",
          alpha2Code: "EC",
          numericCode: "218",
        },
        {
          name: "Egypt",
          alpha2Code: "EG",
          numericCode: "818",
        },
        {
          name: "El Salvador",
          alpha2Code: "SV",
          numericCode: "222",
        },
        {
          name: "Equatorial Guinea",
          alpha2Code: "GQ",
          numericCode: "226",
        },
        {
          name: "Eritrea",
          alpha2Code: "ER",
          numericCode: "232",
        },
        {
          name: "Estonia",
          alpha2Code: "EE",
          numericCode: "233",
        },
        {
          name: "Ethiopia",
          alpha2Code: "ET",
          numericCode: "231",
        },
        {
          name: "Falkland Islands (Malvinas)",
          alpha2Code: "FK",
          numericCode: "238",
        },
        {
          name: "Faroe Islands",
          alpha2Code: "FO",
          numericCode: "234",
        },
        {
          name: "Fiji",
          alpha2Code: "FJ",
          numericCode: "242",
        },
        {
          name: "Finland",
          alpha2Code: "FI",
          numericCode: "246",
        },
        {
          name: "France",
          alpha2Code: "FR",
          numericCode: "250",
        },
        {
          name: "French Guiana",
          alpha2Code: "GF",
          numericCode: "254",
        },
        {
          name: "French Polynesia",
          alpha2Code: "PF",
          numericCode: "258",
        },
        {
          name: "French Southern Territories",
          alpha2Code: "TF",
          numericCode: "260",
        },
        {
          name: "Gabon",
          alpha2Code: "GA",
          numericCode: "266",
        },
        {
          name: "Gambia",
          alpha2Code: "GM",
          numericCode: "270",
        },
        {
          name: "Georgia",
          alpha2Code: "GE",
          numericCode: "268",
        },
        {
          name: "Germany",
          alpha2Code: "DE",
          numericCode: "276",
        },
        {
          name: "Ghana",
          alpha2Code: "GH",
          numericCode: "288",
        },
        {
          name: "Gibraltar",
          alpha2Code: "GI",
          numericCode: "292",
        },
        {
          name: "Greece",
          alpha2Code: "GR",
          numericCode: "300",
        },
        {
          name: "Greenland",
          alpha2Code: "GL",
          numericCode: "304",
        },
        {
          name: "Grenada",
          alpha2Code: "GD",
          numericCode: "308",
        },
        {
          name: "Guadeloupe",
          alpha2Code: "GP",
          numericCode: "312",
        },
        {
          name: "Guam",
          alpha2Code: "GU",
          numericCode: "316",
        },
        {
          name: "Guatemala",
          alpha2Code: "GT",
          numericCode: "320",
        },
        {
          name: "Guernsey",
          alpha2Code: "GG",
          numericCode: "831",
        },
        {
          name: "Guinea",
          alpha2Code: "GN",
          numericCode: "324",
        },
        {
          name: "Guinea-Bissau",
          alpha2Code: "GW",
          numericCode: "624",
        },
        {
          name: "Guyana",
          alpha2Code: "GY",
          numericCode: "328",
        },
        {
          name: "Haiti",
          alpha2Code: "HT",
          numericCode: "332",
        },
        {
          name: "Heard Island and McDonald Islands",
          alpha2Code: "HM",
          numericCode: "334",
        },
        {
          name: "Holy See",
          alpha2Code: "VA",
          numericCode: "336",
        },
        {
          name: "Honduras",
          alpha2Code: "HN",
          numericCode: "340",
        },
        {
          name: "Hong Kong",
          alpha2Code: "HK",
          numericCode: "344",
        },
        {
          name: "Hungary",
          alpha2Code: "HU",
          numericCode: "348",
        },
        {
          name: "Iceland",
          alpha2Code: "IS",
          numericCode: "352",
        },
        {
          name: "India",
          alpha2Code: "IN",
          numericCode: "356",
        },
        {
          name: "Indonesia",
          alpha2Code: "ID",
          numericCode: "360",
        },
        {
          name: "Côte d'Ivoire",
          alpha2Code: "CI",
          numericCode: "384",
        },
        {
          name: "Iran (Islamic Republic of)",
          alpha2Code: "IR",
          numericCode: "364",
        },
        {
          name: "Iraq",
          alpha2Code: "IQ",
          numericCode: "368",
        },
        {
          name: "Ireland",
          alpha2Code: "IE",
          numericCode: "372",
        },
        {
          name: "Isle of Man",
          alpha2Code: "IM",
          numericCode: "833",
        },
        {
          name: "Israel",
          alpha2Code: "IL",
          numericCode: "376",
        },
        {
          name: "Italy",
          alpha2Code: "IT",
          numericCode: "380",
        },
        {
          name: "Jamaica",
          alpha2Code: "JM",
          numericCode: "388",
        },
        {
          name: "Japan",
          alpha2Code: "JP",
          numericCode: "392",
        },
        {
          name: "Jersey",
          alpha2Code: "JE",
          numericCode: "832",
        },
        {
          name: "Jordan",
          alpha2Code: "JO",
          numericCode: "400",
        },
        {
          name: "Kazakhstan",
          alpha2Code: "KZ",
          numericCode: "398",
        },
        {
          name: "Kenya",
          alpha2Code: "KE",
          numericCode: "404",
        },
        {
          name: "Kiribati",
          alpha2Code: "KI",
          numericCode: "296",
        },
        {
          name: "Kuwait",
          alpha2Code: "KW",
          numericCode: "414",
        },
        {
          name: "Kyrgyzstan",
          alpha2Code: "KG",
          numericCode: "417",
        },
        {
          name: "Lao People's Democratic Republic",
          alpha2Code: "LA",
          numericCode: "418",
        },
        {
          name: "Latvia",
          alpha2Code: "LV",
          numericCode: "428",
        },
        {
          name: "Lebanon",
          alpha2Code: "LB",
          numericCode: "422",
        },
        {
          name: "Lesotho",
          alpha2Code: "LS",
          numericCode: "426",
        },
        {
          name: "Liberia",
          alpha2Code: "LR",
          numericCode: "430",
        },
        {
          name: "Libya",
          alpha2Code: "LY",
          numericCode: "434",
        },
        {
          name: "Liechtenstein",
          alpha2Code: "LI",
          numericCode: "438",
        },
        {
          name: "Lithuania",
          alpha2Code: "LT",
          numericCode: "440",
        },
        {
          name: "Luxembourg",
          alpha2Code: "LU",
          numericCode: "442",
        },
        {
          name: "Macao",
          alpha2Code: "MO",
          numericCode: "446",
        },
        {
          name: "Macedonia (the former Yugoslav Republic of)",
          alpha2Code: "MK",
          numericCode: "807",
        },
        {
          name: "Madagascar",
          alpha2Code: "MG",
          numericCode: "450",
        },
        {
          name: "Malawi",
          alpha2Code: "MW",
          numericCode: "454",
        },
        {
          name: "Malaysia",
          alpha2Code: "MY",
          numericCode: "458",
        },
        {
          name: "Maldives",
          alpha2Code: "MV",
          numericCode: "462",
        },
        {
          name: "Mali",
          alpha2Code: "ML",
          numericCode: "466",
        },
        {
          name: "Malta",
          alpha2Code: "MT",
          numericCode: "470",
        },
        {
          name: "Marshall Islands",
          alpha2Code: "MH",
          numericCode: "584",
        },
        {
          name: "Martinique",
          alpha2Code: "MQ",
          numericCode: "474",
        },
        {
          name: "Mauritania",
          alpha2Code: "MR",
          numericCode: "478",
        },
        {
          name: "Mauritius",
          alpha2Code: "MU",
          numericCode: "480",
        },
        {
          name: "Mayotte",
          alpha2Code: "YT",
          numericCode: "175",
        },
        {
          name: "Mexico",
          alpha2Code: "MX",
          numericCode: "484",
        },
        {
          name: "Micronesia (Federated States of)",
          alpha2Code: "FM",
          numericCode: "583",
        },
        {
          name: "Moldova (Republic of)",
          alpha2Code: "MD",
          numericCode: "498",
        },
        {
          name: "Monaco",
          alpha2Code: "MC",
          numericCode: "492",
        },
        {
          name: "Mongolia",
          alpha2Code: "MN",
          numericCode: "496",
        },
        {
          name: "Montenegro",
          alpha2Code: "ME",
          numericCode: "499",
        },
        {
          name: "Montserrat",
          alpha2Code: "MS",
          numericCode: "500",
        },
        {
          name: "Morocco",
          alpha2Code: "MA",
          numericCode: "504",
        },
        {
          name: "Mozambique",
          alpha2Code: "MZ",
          numericCode: "508",
        },
        {
          name: "Myanmar",
          alpha2Code: "MM",
          numericCode: "104",
        },
        {
          name: "Namibia",
          alpha2Code: "NA",
          numericCode: "516",
        },
        {
          name: "Nauru",
          alpha2Code: "NR",
          numericCode: "520",
        },
        {
          name: "Nepal",
          alpha2Code: "NP",
          numericCode: "524",
        },
        {
          name: "Netherlands",
          alpha2Code: "NL",
          numericCode: "528",
        },
        {
          name: "New Caledonia",
          alpha2Code: "NC",
          numericCode: "540",
        },
        {
          name: "New Zealand",
          alpha2Code: "NZ",
          numericCode: "554",
        },
        {
          name: "Nicaragua",
          alpha2Code: "NI",
          numericCode: "558",
        },
        {
          name: "Niger",
          alpha2Code: "NE",
          numericCode: "562",
        },
        {
          name: "Nigeria",
          alpha2Code: "NG",
          numericCode: "566",
        },
        {
          name: "Niue",
          alpha2Code: "NU",
          numericCode: "570",
        },
        {
          name: "Norfolk Island",
          alpha2Code: "NF",
          numericCode: "574",
        },
        {
          name: "Korea (Democratic People's Republic of)",
          alpha2Code: "KP",
          numericCode: "408",
        },
        {
          name: "Northern Mariana Islands",
          alpha2Code: "MP",
          numericCode: "580",
        },
        {
          name: "Norway",
          alpha2Code: "NO",
          numericCode: "578",
        },
        {
          name: "Oman",
          alpha2Code: "OM",
          numericCode: "512",
        },
        {
          name: "Pakistan",
          alpha2Code: "PK",
          numericCode: "586",
        },
        {
          name: "Palau",
          alpha2Code: "PW",
          numericCode: "585",
        },
        {
          name: "Palestine, State of",
          alpha2Code: "PS",
          numericCode: "275",
        },
        {
          name: "Panama",
          alpha2Code: "PA",
          numericCode: "591",
        },
        {
          name: "Papua New Guinea",
          alpha2Code: "PG",
          numericCode: "598",
        },
        {
          name: "Paraguay",
          alpha2Code: "PY",
          numericCode: "600",
        },
        {
          name: "Peru",
          alpha2Code: "PE",
          numericCode: "604",
        },
        {
          name: "Philippines",
          alpha2Code: "PH",
          numericCode: "608",
        },
        {
          name: "Pitcairn",
          alpha2Code: "PN",
          numericCode: "612",
        },
        {
          name: "Poland",
          alpha2Code: "PL",
          numericCode: "616",
        },
        {
          name: "Portugal",
          alpha2Code: "PT",
          numericCode: "620",
        },
        {
          name: "Puerto Rico",
          alpha2Code: "PR",
          numericCode: "630",
        },
        {
          name: "Qatar",
          alpha2Code: "QA",
          numericCode: "634",
        },
        {
          name: "Republic of Kosovo",
          alpha2Code: "XK",
        },
        {
          name: "Réunion",
          alpha2Code: "RE",
          numericCode: "638",
        },
        {
          name: "Romania",
          alpha2Code: "RO",
          numericCode: "642",
        },
        {
          name: "Russian Federation",
          alpha2Code: "RU",
          numericCode: "643",
        },
        {
          name: "Rwanda",
          alpha2Code: "RW",
          numericCode: "646",
        },
        {
          name: "Saint Barthélemy",
          alpha2Code: "BL",
          numericCode: "652",
        },
        {
          name: "Saint Helena, Ascension and Tristan da Cunha",
          alpha2Code: "SH",
          numericCode: "654",
        },
        {
          name: "Saint Kitts and Nevis",
          alpha2Code: "KN",
          numericCode: "659",
        },
        {
          name: "Saint Lucia",
          alpha2Code: "LC",
          numericCode: "662",
        },
        {
          name: "Saint Martin (French part)",
          alpha2Code: "MF",
          numericCode: "663",
        },
        {
          name: "Saint Pierre and Miquelon",
          alpha2Code: "PM",
          numericCode: "666",
        },
        {
          name: "Saint Vincent and the Grenadines",
          alpha2Code: "VC",
          numericCode: "670",
        },
        {
          name: "Samoa",
          alpha2Code: "WS",
          numericCode: "882",
        },
        {
          name: "San Marino",
          alpha2Code: "SM",
          numericCode: "674",
        },
        {
          name: "Sao Tome and Principe",
          alpha2Code: "ST",
          numericCode: "678",
        },
        {
          name: "Saudi Arabia",
          alpha2Code: "SA",
          numericCode: "682",
        },
        {
          name: "Senegal",
          alpha2Code: "SN",
          numericCode: "686",
        },
        {
          name: "Serbia",
          alpha2Code: "RS",
          numericCode: "688",
        },
        {
          name: "Seychelles",
          alpha2Code: "SC",
          numericCode: "690",
        },
        {
          name: "Sierra Leone",
          alpha2Code: "SL",
          numericCode: "694",
        },
        {
          name: "Singapore",
          alpha2Code: "SG",
          numericCode: "702",
        },
        {
          name: "Sint Maarten (Dutch part)",
          alpha2Code: "SX",
          numericCode: "534",
        },
        {
          name: "Slovakia",
          alpha2Code: "SK",
          numericCode: "703",
        },
        {
          name: "Slovenia",
          alpha2Code: "SI",
          numericCode: "705",
        },
        {
          name: "Solomon Islands",
          alpha2Code: "SB",
          numericCode: "090",
        },
        {
          name: "Somalia",
          alpha2Code: "SO",
          numericCode: "706",
        },
        {
          name: "South Africa",
          alpha2Code: "ZA",
          numericCode: "710",
        },
        {
          name: "South Georgia and the South Sandwich Islands",
          alpha2Code: "GS",
          numericCode: "239",
        },
        {
          name: "Korea (Republic of)",
          alpha2Code: "KR",
          numericCode: "410",
        },
        {
          name: "South Sudan",
          alpha2Code: "SS",
          numericCode: "728",
        },
        {
          name: "Spain",
          alpha2Code: "ES",
          numericCode: "724",
        },
        {
          name: "Sri Lanka",
          alpha2Code: "LK",
          numericCode: "144",
        },
        {
          name: "Sudan",
          alpha2Code: "SD",
          numericCode: "729",
        },
        {
          name: "Suriname",
          alpha2Code: "SR",
          numericCode: "740",
        },
        {
          name: "Svalbard and Jan Mayen",
          alpha2Code: "SJ",
          numericCode: "744",
        },
        {
          name: "Swaziland",
          alpha2Code: "SZ",
          numericCode: "748",
        },
        {
          name: "Sweden",
          alpha2Code: "SE",
          numericCode: "752",
        },
        {
          name: "Switzerland",
          alpha2Code: "CH",
          numericCode: "756",
        },
        {
          name: "Syrian Arab Republic",
          alpha2Code: "SY",
          numericCode: "760",
        },
        {
          name: "Taiwan",
          alpha2Code: "TW",
          numericCode: "158",
        },
        {
          name: "Tajikistan",
          alpha2Code: "TJ",
          numericCode: "762",
        },
        {
          name: "Tanzania, United Republic of",
          alpha2Code: "TZ",
          numericCode: "834",
        },
        {
          name: "Thailand",
          alpha2Code: "TH",
          numericCode: "764",
        },
        {
          name: "Timor-Leste",
          alpha2Code: "TL",
          numericCode: "626",
        },
        {
          name: "Togo",
          alpha2Code: "TG",
          numericCode: "768",
        },
        {
          name: "Tokelau",
          alpha2Code: "TK",
          numericCode: "772",
        },
        {
          name: "Tonga",
          alpha2Code: "TO",
          numericCode: "776",
        },
        {
          name: "Trinidad and Tobago",
          alpha2Code: "TT",
          numericCode: "780",
        },
        {
          name: "Tunisia",
          alpha2Code: "TN",
          numericCode: "788",
        },
        {
          name: "Turkey",
          alpha2Code: "TR",
          numericCode: "792",
        },
        {
          name: "Turkmenistan",
          alpha2Code: "TM",
          numericCode: "795",
        },
        {
          name: "Turks and Caicos Islands",
          alpha2Code: "TC",
          numericCode: "796",
        },
        {
          name: "Tuvalu",
          alpha2Code: "TV",
          numericCode: "798",
        },
        {
          name: "Uganda",
          alpha2Code: "UG",
          numericCode: "800",
        },
        {
          name: "Ukraine",
          alpha2Code: "UA",
          numericCode: "804",
        },
        {
          name: "United Arab Emirates",
          alpha2Code: "AE",
          numericCode: "784",
        },
        {
          name: "United Kingdom of Great Britain and Northern Ireland",
          alpha2Code: "GB",
          numericCode: "826",
        },
        {
          name: "United States of America",
          alpha2Code: "US",
          numericCode: "840",
        },
        {
          name: "Uruguay",
          alpha2Code: "UY",
          numericCode: "858",
        },
        {
          name: "Uzbekistan",
          alpha2Code: "UZ",
          numericCode: "860",
        },
        {
          name: "Vanuatu",
          alpha2Code: "VU",
          numericCode: "548",
        },
        {
          name: "Venezuela (Bolivarian Republic of)",
          alpha2Code: "VE",
          numericCode: "862",
        },
        {
          name: "Viet Nam",
          alpha2Code: "VN",
          numericCode: "704",
        },
        {
          name: "Wallis and Futuna",
          alpha2Code: "WF",
          numericCode: "876",
        },
        {
          name: "Western Sahara",
          alpha2Code: "EH",
          numericCode: "732",
        },
        {
          name: "Yemen",
          alpha2Code: "YE",
          numericCode: "887",
        },
        {
          name: "Zambia",
          alpha2Code: "ZM",
          numericCode: "894",
        },
        {
          name: "Zimbabwe",
          alpha2Code: "ZW",
          numericCode: "716",
        },
      ],
      states: [
        {
          name: "Not Applicable",
          abbreviation: "N/A",
        },
        {
          name: "Alabama",
          abbreviation: "AL",
        },
        {
          name: "Alaska",
          abbreviation: "AK",
        },
        {
          name: "Arizona",
          abbreviation: "AZ",
        },
        {
          name: "Arkansas",
          abbreviation: "AR",
        },
        {
          name: "California",
          abbreviation: "CA",
        },
        {
          name: "Colorado",
          abbreviation: "CO",
        },
        {
          name: "Connecticut",
          abbreviation: "CT",
        },
        {
          name: "Delaware",
          abbreviation: "DE",
        },
        {
          name: "District Of Columbia",
          abbreviation: "DC",
        },
        {
          name: "Florida",
          abbreviation: "FL",
        },
        {
          name: "Georgia",
          abbreviation: "GA",
        },
        {
          name: "Hawaii",
          abbreviation: "HI",
        },
        {
          name: "Idaho",
          abbreviation: "ID",
        },
        {
          name: "Illinois",
          abbreviation: "IL",
        },
        {
          name: "Indiana",
          abbreviation: "IN",
        },
        {
          name: "Iowa",
          abbreviation: "IA",
        },
        {
          name: "Kansas",
          abbreviation: "KS",
        },
        {
          name: "Kentucky",
          abbreviation: "KY",
        },
        {
          name: "Louisiana",
          abbreviation: "LA",
        },
        {
          name: "Maine",
          abbreviation: "ME",
        },
        {
          name: "Maryland",
          abbreviation: "MD",
        },
        {
          name: "Massachusetts",
          abbreviation: "MA",
        },
        {
          name: "Michigan",
          abbreviation: "MI",
        },
        {
          name: "Minnesota",
          abbreviation: "MN",
        },
        {
          name: "Mississippi",
          abbreviation: "MS",
        },
        {
          name: "Missouri",
          abbreviation: "MO",
        },
        {
          name: "Montana",
          abbreviation: "MT",
        },
        {
          name: "Nebraska",
          abbreviation: "NE",
        },
        {
          name: "Nevada",
          abbreviation: "NV",
        },
        {
          name: "New Hampshire",
          abbreviation: "NH",
        },
        {
          name: "New Jersey",
          abbreviation: "NJ",
        },
        {
          name: "New Mexico",
          abbreviation: "NM",
        },
        {
          name: "New York",
          abbreviation: "NY",
        },
        {
          name: "North Carolina",
          abbreviation: "NC",
        },
        {
          name: "North Dakota",
          abbreviation: "ND",
        },
        {
          name: "Ohio",
          abbreviation: "OH",
        },
        {
          name: "Oklahoma",
          abbreviation: "OK",
        },
        {
          name: "Oregon",
          abbreviation: "OR",
        },
        {
          name: "Pennsylvania",
          abbreviation: "PA",
        },
        {
          name: "Rhode Island",
          abbreviation: "RI",
        },
        {
          name: "South Carolina",
          abbreviation: "SC",
        },
        {
          name: "South Dakota",
          abbreviation: "SD",
        },
        {
          name: "Tennessee",
          abbreviation: "TN",
        },
        {
          name: "Texas",
          abbreviation: "TX",
        },
        {
          name: "Utah",
          abbreviation: "UT",
        },
        {
          name: "Vermont",
          abbreviation: "VT",
        },
        {
          name: "Virginia",
          abbreviation: "VA",
        },
        {
          name: "Washington",
          abbreviation: "WA",
        },
        {
          name: "West Virginia",
          abbreviation: "WV",
        },
        {
          name: "Wisconsin",
          abbreviation: "WI",
        },
        {
          name: "Wyoming",
          abbreviation: "WY",
        },
      ],
    },
  },
}
