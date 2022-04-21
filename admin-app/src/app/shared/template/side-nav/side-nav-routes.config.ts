import { SideNavInterface } from '../../interfaces/side-nav.type';

export const ROUTES: SideNavInterface[] = [
    {
        path: '',
        title: 'Dashboard',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: []
    },

    {
        path: '',
        title: 'Contents',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'read',
        submenu: [
            {
                path: '/contents/categories',
                title: 'Categories',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/contents/posts',
                title: 'Posts',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/contents/comments',
                title: 'Comments',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/contents/contact',
                title: 'Contact',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/contents/about',
                title: 'About',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            }
        ]
    },

    {
        path: '',
        title: 'Systems',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'setting',
        submenu: [
            {
                path: '/systems/users',
                title: 'Users',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/systems/permissions',
                title: 'Permissions',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/systems/roles',
                title: 'Roles',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/systems/functions',
                title: 'Functions',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            }
        ]
    },

    {
        path: '',
        title: 'Statistics',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'pie-chart',
        submenu: [
            {
                path: '/statistics/monthly-new-members',
                title: 'New Members',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/statistics/monthly-new-posts',
                title: 'New Posts',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/statistics/monthly-new-comments',
                title: 'New Comments',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            }
        ]
    },

    {
        path: '',
        title: 'Apps',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'appstore',
        submenu: [
            {
                path: '/apps/chat',
                title: 'Chat',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/apps/file-manager',
                title: 'File Manager',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/apps/mail',
                title: 'Mail',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '',
                title: 'Projects',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                    {
                        path: '/apps/projects/project-list',
                        title: 'Project List',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/apps/projects/project-details',
                        title: 'Project Details',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                ]
            },
            {
                path: '',
                title: 'E-commerce',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                    {
                        path: '/apps/e-commerce/orders-list',
                        title: 'Orders List',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/apps/e-commerce/product',
                        title: 'Products',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/apps/e-commerce/products-list',
                        title: 'Products List',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    }
                ]
            }
        ]
    },
    {
        path: '',
        title: 'Pages',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'file',
        submenu: [
            {
                path: '/pages/profile',
                title: 'Profile',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/pages/members',
                title: 'Members',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/pages/setting',
                title: 'Setting',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Authentication',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'lock',
        submenu: [
            {
                path: '/authentication/error-1',
                title: 'Error 1',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/authentication/error-2',
                title: 'Error 2',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            }
        ]
    },
]    