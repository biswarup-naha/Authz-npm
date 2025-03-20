# Authorization Checker - NPM Package

A lightweight Node.js package to check user authorization based on predefined roles and permissions.

## Features
- Role-based access control (RBAC)
- Supports Admin, Moderator, and User roles
- Customizable permissions
- Simple and easy-to-use API

## Installation

Install the package using npm:
```sh
npm install @biswarup598/authz
```

or using yarn:
```sh
yarn add @biswarup598/authz
```

## Usage

### Import the module
```javascript
import { checkPermission } from '@biswarup598/authz';
```

### Define User Roles
Each user should have a `role` assigned (e.g., `admin`, `moderator`, `user`).

### Checking Permissions
```javascript
const user = { role: 'admin' };
const action = 'create';
const resource = 'post';

if (checkPermission(user, action, resource)) {
    console.log('Access granted');
} else {
    console.log('Access denied');
}
```

## Roles and Permissions

### Admin Permissions
- View, create, update, and delete posts, comments, likes, reports, follows, unfollows, blocks, unblocks, admins, moderators, and users.

### Moderator Permissions
- Same as Admin except cannot manage admins.

### User Permissions
- Can view, create, update, and delete posts, comments, likes, reports, follows, unfollows, blocks, and unblocks.

## API Reference

### `checkPermission(user, action, resource)`
- **user**: An object containing the `role` property.
- **action**: The action to be performed (e.g., `create`, `update`, `delete`).
- **resource**: The resource on which the action is performed (e.g., `post`, `comment`).
- **Returns**: `true` if the user has permission, otherwise `false`.

## License
This project is licensed under the MIT License.