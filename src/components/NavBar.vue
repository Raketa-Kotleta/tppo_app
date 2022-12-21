<template>
    <nav class="navbar">
        <a class="navbar-brand" href="#">RS</a>
        <ul>
            <li>
                <router-link to="/">Manager page</router-link>
            </li>
            <li>
                <router-link to="operator">Operator page</router-link>
            </li>
            <li>
                <router-link to="consultant">Сonsultant page</router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default{
    name:"NavBar",
}

</script>
<style scoped>
nav{
    padding: 0 64px;
}
</style>