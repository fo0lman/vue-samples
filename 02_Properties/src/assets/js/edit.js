(function() {
    const UserForm = {
        template: '#user-form',
        props: {
            user: {
                type: Object,
                required: true
            }
        }
    };

    new Vue({
        el: '#app',
        components: {
            'user-form': UserForm
        },
        data: function() {
            return {
                user: {}
            };
        },
        computed: {
            title: function() {
                return this.user.firstName + ' ' + this.user.lastName;
            },
        },
        methods: {
            getUser: function() {
                var self = this;

                fetch('users.json')
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(users) {
                        return users[5];
                    })
                    .then(function(user) {
                        self.user = user;
                    })
                    .catch(function(exception) {
                        console.error(exception);
                    });
            }
        },
        created: function () {
            this.getUser();
        }
    });
})();