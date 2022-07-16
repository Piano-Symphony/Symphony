<template>
<div class="row">
    <div class="col-md-6 offset-md-3">
<div>
    <div>
        <h3>Login</h3>
        <hr />
    </div>
    <form>
        <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" v-model="email" placeholder="Email"/>
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password"/>
        </div>
        <div class ="my-3">
            <button type="submit" class="btn btn-primary"
            @click="navigateTo({name:'home'})">Login</button>
        </div>
    </form>
</div>
    </div>
</div>
</template>
<script>
export default {
    data () {
    return {
    email: '',
    password: ''
    }
    },
    methods: {
         navigateTo (route) {
            this.$router.push(route)
         }
    }
}
</script>
