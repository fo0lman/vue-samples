<template>
    <div>
        <NavBar></NavBar>
        <div class="content-wrapper">
            <div class="container-fluid">
                <DashboardBreadcrumbs></DashboardBreadcrumbs>
                <router-view></router-view>
            </div>
            <DashboardFooter></DashboardFooter>
            <ToTop></ToTop>
        </div>
    </div>
</template>

<script>
    import NavBar from '@/views/common/NavBar.vue';
    import DashboardBreadcrumbs from '@/components/Breadcrumbs.vue';
    import DashboardFooter from '@/views/common/Footer.vue';
    import ToTop from '@/views/common/ToTop.vue';

    export default {
        name: 'home',
        components: {
            NavBar,
            DashboardBreadcrumbs,
            DashboardFooter,
            ToTop
        },
    };
</script>

<style src="./styles/app.scss" lang="scss"></style>
