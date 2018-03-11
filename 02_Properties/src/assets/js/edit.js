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
                title: '',
                user: null
            };
        },
        created: function () {
            this.getUser();
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
                        self.title = user.firstName + ' ' + user.lastName;
                        self.user = user;
                    })
                    .catch(function(exception) {
                        console.error(exception);
                    });
            }
        }
    });
})();