<template>
  <div>
    <div class="header">
      <h1>(주) OpenSG</h1>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contacts">Contacts</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: "default",
}
</script>
