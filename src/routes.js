
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
        path: "/Services/ITConsulting"
    },
    {
        id: 22,
        title: 'Website',
        path: "/Services/Website"
    },
    {
        id: 23,
        title: 'Webshop',
        path: "/Services/Webshop"
    },
    {
        id: 24,
        title: 'Programing',
        path: "/Services/Programing"
    },
    {
        id: 25,
        title: 'Wordpress',
        path: "/Services/Wordpress"
    },
    {
        id: 26,
        title: 'SEO',
        path: "/Services/SEO"
    },
    {
        id: 27,
        title: 'Graphic Design',
        path: "/Services/GraphicDesign"
    }
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
    title: 'About',
    path: '/About',
    subMenu: []
},
{
    id: 5,
    title: 'Contact',
    path: '/Contact',
    subMenu: []
}
];

export default routes;