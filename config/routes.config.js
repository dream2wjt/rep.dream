const routes = [
        {
          path: '/',
          component: '../layouts/index',
          routes: [
            { path: '/tarbar1', component: '../pages/TarBar1/index' },
            { path: '/tarbar2', component: '../pages/TarBar2/index' }
          ]
        }
      ]


export default routes