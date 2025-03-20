const permissions = {
    admin: [{
        view: "post",
        create: "post",
        update: "post",
        delete: "post",
    },
    {
        view: "comment",
        create: "comment",
        update: "comment",
        delete: "comment",
    },
    {
        view: "like",
        create: "like",
        update: "like",
        delete: "like",
    },
    {
        view: "report",
        create: "report",
        update: "report",
        delete: "report",
    },
    {
        view: "follow",
        create: "follow",
        update: "follow",
        delete: "follow",
    },
    {
        view: "unfollow",
        create: "unfollow",
        update: "unfollow",
        delete: "unfollow",
    },
    {
        view: "block",
        create: "block",
        update: "block",
        delete: "block",
    },
    {
        view: "unblock",
        create: "unblock",
        update: "unblock",
        delete: "unblock",
    },
    {
        view: "admin",
        create: "admin",
        update: "admin",
        delete: "admin",
    },
    {
        view: "moderator",
        create: "moderator",
        update: "moderator",
        delete: "moderator",
    },
    {
        view: "user",
        create: "user",
        update: "user",
        delete: "user",
    }
    ],
    user: [
        {
            view: "post",
            create: "post",
            update: "post",
            delete: "post",
        },
        {
            view: "comment",
            create: "comment",
            update: "comment",
            delete: "comment",
        },
        {
            view: "like",
            create: "like",
            update: "like",
            delete: "like",
        },
        {
            view: "report",
            create: "report",
            update: "report",
            delete: "report",
        },
        {
            view: "follow",
            create: "follow",
            update: "follow",
            delete: "follow",
        },
        {
            view: "unfollow",
            create: "unfollow",
            update: "unfollow",
            delete: "unfollow",
        },
        {
            view: "block",
            create: "block",
            update: "block",
            delete: "block",
        },
        {
            view: "unblock",
            create: "unblock",
            update: "unblock",
            delete: "unblock",
        },
    ],
    moderator: [{
        view: "post",
        create: "post",
        update: "post",
        delete: "post",
    },
    {
        view: "comment",
        create: "comment",
        update: "comment",
        delete: "comment",
    },
    {
        view: "like",
        create: "like",
        update: "like",
        delete: "like",
    },
    {
        view: "report",
        create: "report",
        update: "report",
        delete: "report",
    },
    {
        view: "follow",
        create: "follow",
        update: "follow",
        delete: "follow",
    },
    {
        view: "unfollow",
        create: "unfollow",
        update: "unfollow",
        delete: "unfollow",
    },
    {
        view: "block",
        create: "block",
        update: "block",
        delete: "block",
    },
    {
        view: "unblock",
        create: "unblock",
        update: "unblock",
        delete: "unblock",
    },
    {
        view: "admin",
        create: "admin",
        update: "admin",
        delete: "admin",
    },
    {
        view: "moderator",
        create: "moderator",
        update: "moderator",
        delete: "moderator",
    },
    {
        view: "user",
        create: "user",
        update: "user",
        delete: "user",
    }
    ]
};

export const checkPermission = (user, action, resource) => { 
    const permission = permissions[user.role];
    if (!permission) return false;
    return permission.includes(`${action}_${resource}`);
};