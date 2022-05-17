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
    }
]    