<template>
    <div>
        <NavBar></NavBar>
        <div class="content-wrapper">
            <router-view></router-view>
            <DashboardFooter></DashboardFooter>
            <ToTop></ToTop>
        </div>
    </div>
</template>

<script>
    import NavBar from '@/views/common/NavBar.vue';
    import DashboardFooter from '@/views/common/Footer.vue';
    import ToTop from '@/views/common/ToTop.vue';

    export default {
        name: 'home',
        components: {
            NavBar,
            DashboardFooter,
            ToTop
        },
    };
</script>

<style src="./styles/app.scss" lang="scss"></style>
