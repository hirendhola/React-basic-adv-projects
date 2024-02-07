const MenuItems = [
    {
        id: 1,
        label: 'Home',
        url: '/home',
        submenu: []
    },
    {
        id: 2,
        label: 'Products',
        url: '/products',
        submenu: [
            {
                id: 21,
                label: 'Laptops',
                url: '/products/laptops',
                submenu: [
                    {
                        id: 211,
                        label: 'Gaming Laptops',
                        url: '/products/laptops/gaming',
                        submenu: []
                    }
                ]
            },
            {
                id: 22,
                label: 'Smartphones',
                url: '/products/smartphones',
                submenu: []
            },
        ],
    },
    {
        id: 3,
        label: 'Services',
        url: '/services',
        submenu: [
            {
                id: 31,
                label: 'Repair',
                url: '/services/repair',
                submenu: []
            },
            {
                id: 32,
                label: 'Maintenance',
                url: '/services/maintenance',
                submenu: []
            },
        ],
    },
];

export default MenuItems;