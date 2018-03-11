<template>
    <ol class="breadcrumb" v-if="routesLength">
        <li class="breadcrumb-item">
            <router-link to="/">Dashboard</router-link>
        </li>
        <li class="breadcrumb-item"
            v-if="route.meta.breadcrumb"
            v-for="(route, index) in routes"
            :key="index"
        >
            <router-link active-class="active"
                         :to="route.path"
                         :tag="index !== routes.length - 1 ? 'a' : 'span'"
            >
                {{ route.meta.breadcrumb }}
            </router-link>
        </li>
    </ol>
</template>

<script>
    const component = {
        name: 'breadcrumbs',
        computed: {
            routesLength() {
                return this.routes.length;
            },
            routes() {
                return this.$route.matched;
            }
        }
    };

    export default component;
</script>

