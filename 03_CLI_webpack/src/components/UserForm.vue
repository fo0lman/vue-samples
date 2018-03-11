<template>
    <div role="form">
        <div class="form-group">
            <label for="fname">First Name</label>
            <input type="text" id="fname" class="form-control" v-model="user.firstName"/>
        </div>
        <div class="form-group">
            <label for="lname">Last name</label>
            <input type="text" id="lname" class="form-control" v-model="user.lastName"/>
        </div>
        <div class="form-group">
            <label for="company">Company</label>
            <input type="text" id="company" class="form-control" v-model="user.company"/>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" id="email" class="form-control" v-model="user.email"/>
        </div>
        <div class="form-group">
            <label for="phone">Phone</label>
            <input type="text" id="phone" class="form-control" v-model="user.phone"/>
        </div>
        <slot name="form-groups"></slot>
        <slot name="buttons"></slot>
    </div>
</template>

<script>
    const component = {
        name: 'user-form',
        props: {
            user: {
                type: Object,
                required: true
            }
        }
    };

    export default component;
</script>