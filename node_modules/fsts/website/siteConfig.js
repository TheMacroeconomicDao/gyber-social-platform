const currentYear = new Date().getFullYear();

const siteConfig = {
  projectName: 'fsts-js',
  title: 'From Station to Station',
  tagline: 'JavaScript toolkits library accumulated from working from project to project.',
  copyright: 'Copyright © ' + currentYear + ' Richard Zhang',

  rootUrl: 'https://richardzcode.github.io',
  baseUrl: '/fsts-js',

  icon: 'img/fsts.png',
  favicon: 'img/favicon.ico',

  headerLinks: [
    {type: 'doc', value: 'installation', label: 'Docs'},
    {type: 'doc', value: 'guide_logger', label: 'Guide'},
    {type: 'page', value: 'help', label: 'Help'},
    {type: 'blog', label: 'Blog'},
  ]
};

module.exports = siteConfig;
