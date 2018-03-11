<template>
    <div :class="{ 'sidenav-toggled': toggled }">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">

            <router-link to="/" class="navbar-brand">Dashboard</router-link>

            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
                    <router-link v-for="(menu, index) in sideMenu"
                                 :key="index"
                                 :to="menu.link"
                                 tag="li"
                                 active-class="active"
                                 class="nav-item"
                                 data-toggle="tooltip"
                                 data-placement="right"
                    >
                        <a class="nav-link">
                            <i v-if="menu.iconClass" :class="menu.iconClass"></i>
                            <span class="nav-link-text">{{menu.title}}</span>
                        </a>
                    </router-link>
                </ul>
                <ul class="navbar-nav sidenav-toggler" id="sidenavToggler">
                    <li class="nav-item">
                        <a class="nav-link text-center" @click="toggleSidebar">
                            <i class="fa fa-fw fa-angle-left"></i>
                        </a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#"
                           data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-fw fa-envelope"></i>
                            <span class="d-lg-none">Messages
                          <span class="badge badge-pill badge-primary">12 New</span>
                        </span>
                            <span class="indicator text-primary d-none d-lg-block">
                            <i class="fa fa-fw fa-circle"></i>
                        </span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
                            <h6 class="dropdown-header">New Messages:</h6>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">
                                <strong>David Miller</strong>
                                <span class="small float-right text-muted">11:21 AM</span>
                                <div class="dropdown-message small">Lorem ipsum dolor sit amet.</div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">
                                <strong>Jane Smith</strong>
                                <span class="small float-right text-muted">11:21 AM</span>
                                <div class="dropdown-message small">Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item small" href="#">View all messages</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-fw fa-bell"></i>
                            <span class="d-lg-none">Alerts
                          <span class="badge badge-pill badge-warning">6 New</span>
                        </span>
                            <span class="indicator text-warning d-none d-lg-block">
                          <i class="fa fa-fw fa-circle"></i>
                        </span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
                            <h6 class="dropdown-header">New Alerts:</h6>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">
                                  <span class="text-success">
                                    <strong>
                                      <i class="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
                                  </span>
                                <span class="small float-right text-muted">11:21 AM</span>
                                <div class="dropdown-message small">This is an automated server response message. All
                                    systems are online.
                                </div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item small" href="#">View all alerts</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle mr-lg-2" id="accountDropdown" href="#" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-fw fa-user"></i>
                            <span class="d-lg-none">Account</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="accountDropdown">
                            <a class="dropdown-item" href="#"><i class="fa fa-fw fa-cogs"></i> Settings</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-fw fa-sign-out"></i> Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    const component = {
        name: 'navbar',
        data() {
            return {
                toggled: '',
                sideMenu: [
                    {
                        title: 'User List',
                        link: '/users',
                        iconClass: 'fa fa-fw fa-list'
                    },
                    {
                        title: 'About',
                        link: '/about',
                        iconClass: 'fa fa-fw fa-info-circle'
                    },
                ]
            };
        },
        created() {
             this.toggled = this.getSidebarState();
        },
        methods: {
            toggleSidebar() {
                this.toggled = !this.toggled;
            },
            getSidebarState() {
                return JSON.parse(localStorage.getItem('menu-toggled'));
            },
            setSidebarState() {
                localStorage.setItem('menu-toggled', this.toggled);
            }
        },
        watch: {
            toggled() {
                this.setSidebarState();
            }
        }
    };

    export default component;
</script>