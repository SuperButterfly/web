const urlbase = '/workspace/assets'

export const user = {
  id: 'ac19b222-0d4a-40a4-a94e-f99130164fab',
  username: 'Username',
  avatar: `${urlbase}/imagen.svg`,
  plan: 'Free',
  workspaces: [
    {
      name: 'Current work',
      projects: [
        {
          name: 'new project ABC',
          createdAt: '10-02-2023',
          updatedAt: '12-02-2023'
        },
        {
          name: 'other project',
          createdAt: '09-02-2023',
          updatedAt: '07-02-2023'
        }
      ]
    }
    // ,
    // {
    //   name: 'other workspace',
    //   projects: []
    // }
  ],
  shared: {
    workspaces: [
      {
        id: '206c0a55-0ab9-4477-8cc2-63836921a27e',
        name: 'WorkTeamAs',
        projects: [
          {
            name: 'project brandX',
            createdAt: '10-02-2023',
            updatedAt: '12-02-2023'
          }
        ]
      },
      {
        id: 'c99680eb-7409-4e9f-a7e6-ce79e614a01d',
        name: 'OtherWorkspace',
        projects: [
          {
            name: 'work hard',
            createdAt: '10-02-2023',
            updatedAt: '12-02-2023'
          }
        ]
      }
    ]
  },
  resourceslist: [
    {
      icon: `${urlbase}/imagen.svg`,
      name: 'resource',
      url: '#'
    },
    {
      icon: `${urlbase}/imagen.svg`,
      name: 'resource',
      url: '#'
    },
    {
      icon: `${urlbase}/imagen.svg`,
      name: 'resource',
      url: '#'
    },
    {
      icon: `${urlbase}/imagen.svg`,
      name: 'resource',
      url: '#'
    },
    {
      icon: `${urlbase}/imagen.svg`,
      name: 'resource',
      url: '#'
    }
  ]
}
