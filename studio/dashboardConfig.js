export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d468a6ab043058eb8465805',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-znpd672x',
                  apiId: '8f016815-a24d-4933-960f-d641054d3fc7'
                },
                {
                  buildHookId: '5d468a6aab85259ddf9be07b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7wmkdywp',
                  apiId: '6a3cae27-e2ec-458d-a37f-fb434e845866'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pereibex/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7wmkdywp.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
