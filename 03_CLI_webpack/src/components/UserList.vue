<template>
    <table class="table table-striped table-bordered rounded">
        <thead>
        <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(user, index) in users" v-bind:key="user.id">
            <td>{{index + 1}}</td>
            <td>
                <div class="avatar" v-if="user.picture">
                    <img v-bind:src="user.picture" alt="">
                </div>
                <div class="no-avatar" v-else="user.picture">No image</div>
            </td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.company }}</td>
            <td><a v-bind:href="'mailto:' + user.email" target="_blank">{{ user.email }}</a></td>
            <td><a v-bind:href="'tel:' + user.phone ">{{ user.phone }}</a></td>
            <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-link" disabled><i class="fa fa-eye" aria-hidden="true"></i></button>
                    <router-link :to="'/users/' + user.id" class="btn btn-link"><i class="fa fa-pencil" aria-hidden="true"></i></router-link>
                    <button type="button" class="btn btn-link" disabled><i class="fa fa-trash" aria-hidden="true"></i></button>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    const component = {
        name: 'user-list',
        props: {
            users: {
                type: Array,
                required: true
            }
        },
        computed: {
            usersCount: function () {
                return this.users.length;
            }
        }
    };

    export default component;
</script>
