<template>
    <div class="card mb-3">
        <div class="card-header">
            <i class="fa fa-user"></i> {{ title }}
        </div>
        <div class="card-body">
            <div v-if="user" class="user-form-container">
                <user-form v-bind:user="user">
                    <div slot="buttons">
                        <router-link :to="cancelBtn" class="btn btn-outline-secondary float-right">Cancel</router-link>
                    </div>
                </user-form>
            </div>
            <div v-else class="alert alert-info">
                Loading user data...
            </div>
        </div>
    </div>
</template>

<script>
    import UserForm from '@/components/UserForm.vue';

    const component = {
        name: 'about',
        components: {
            UserForm
        },
        data() {
            return {
                title: '',
                cancelBtn: '/',
                user: null
            }
        },
        computed: {
            userId() {
                return this.$route.params.id;
            },
            restUrl() {
                return `http://localhost:3000/users/${this.userId}`;
            }
        },
        methods: {
            getUser: function() {
                this.$http
                    .get(this.restUrl)
                    .then(({ body }) => body)
                    .then(user => {
                        this.user = user;
                        this.title = `${user.firstName} ${user.lastName}`
                    });
            }
        },
        created: function () {
            this.getUser();
        }
    };

    export default component;
</script>
