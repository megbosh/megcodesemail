module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'MegCodesEmail',
  siteDescription:
    'Portfolio website from Megan Boshuyzen, award-winning senior email developer',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: '', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: '', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: '', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#58153E', //  Manifest: defines the default theme color for the application
  themeBgColor: '#ffffff', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/src/megcodesemaillogo.svg', // fallback/default meta image
    opengraph_default_alt:
      'Visible content: MegCodesEmail logo ', // alt text for default meta image
    twitterSite: '',
    twitterCreator: '@megcodesemail'
  },
  blog: {
    // this is for the rss feed
    name: 'MegCodesEmail',
    description:
      'Recent works from Megan Boshuyzen'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    mobileDisplay: '',
    mobileCall: ' ',
    email: '',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
