<template>
  <div id="app">
    <nav class="navbar">
    <a class="brand" href="#">RS</a>
    <ul>
      <li>
        <a href="#">Blog</a>
      </li>
      <li>
        <router-link to="">Operator page</router-link>
      </li>

    </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style >
#app{
  margin: 0;
  padding: 0;
}
body{
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.navbar {
  background-color: #333333;
  display: flex;
  align-items:center;
}

.navbar a {
  color: #e7e7e7;
}

.navbar .brand {
  display: block;
  padding: 0 24px;
  font-size: 24px;
}

.navbar ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items:center;
  justify-content: flex-start;
}

.navbar ul li a {
  color: #e7e7e7;
  padding: 24px;
  display: block;
}

.navbar ul a:hover,
.navbar ul a:focus,
.navbar ul .active {
  background-color: #272727;
}
</style>
