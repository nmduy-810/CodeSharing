import { SideNavInterface } from '../../interfaces/side-nav.type';

export const ROUTES: SideNavInterface[] = [
    {
        path: '',
        title: 'Trang chủ',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: []
    },

    {
        path: '',
        title: 'Nội dung',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'read',
        submenu: [
            {
                path: '/contents/categories',
                title: 'Danh mục',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/contents/posts',
                title: 'Bài viết',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/contents/comments',
                title: 'Bình luận',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/contents/contact',
                title: 'Liên hệ',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/contents/about',
                title: 'Thông tin về mình',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Thống kê',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'pie-chart',
        submenu: [
            {
                path: '/statistics/monthly-new-members',
                title: 'Thành viên mới',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/statistics/monthly-new-posts',
                title: 'Bài viết mới',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/statistics/monthly-new-comments',
                title: 'Bình luận mới',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Hệ thống',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'setting',
        submenu: [
            {
                path: '/systems/users',
                title: 'Người dùng',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/systems/permissions',
                title: 'Phân quyền',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/systems/roles',
                title: 'Vai trò',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/systems/functions',
                title: 'Lệnh',
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