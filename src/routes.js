
const routes = [{
    id: 1,
    title: 'Home',
    path: '/',
    subMenu: []
},
{
    id: 2,
    title: 'Services',
    path: '/Services',
    subMenu: [{
        id: 21,
        title: 'IT Consulting',
        path: "/ITConsulting"
    },
    {
        id: 22,
        title: 'WebDesign',
        path: "/WebDesign"
    },
    {
        id: 23,
        title: 'Webshop',
        path: "/Webshops"
    },
    {
        id: 24,
        title: 'Programing',
        path: "/Programming"
    },
    {
        id: 25,
        title: 'Wordpress',
        path: "/Wordpress"
    },
    {
        id: 26,
        title: 'SEO',
        path: "/SEO"
    },
        // {
        //     id: 27,
        //     title: 'Graphic Design',
        //     path: "/GraphicDesign"
        // }
    ]
},
{
    id: 3,
    title: 'Projects',
    path: '/Projects',
    subMenu: []
},
{
    id: 4,
    title: 'Demo',
    path: '/Demo',
    subMenu: []
},
{
    id: 5,
    title: 'About',
    path: '/About',
    subMenu: []
},
{
    id: 6,
    title: 'Contact',
    path: '/Contact',
    subMenu: []
}
];

export default routes;