(function () {
    const UserList = {
        template: '#user-list',
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

    new Vue({
        el: "#app",
        components: {
            'user-list': UserList
        },
        data: function() {
            return {
                showUsers: true,
                users: []
            };
        },
        methods: {
            getUsers: function() {
                var self = this;

                fetch('users.json')
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(users) {
                        self.users = users;
                    })
                    .catch(function(exception) {
                        console.error(exception);
                    });
            },
            toggleUsersHandler: function () {
                this.showUsers = !this.showUsers;
            }
        },
        created: function() {
            this.getUsers();
        }
    });
})();