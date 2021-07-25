<template>
  <div>
    <h1>연락처</h1>
    <ul>
      <li v-for="{no, name} in contacts" :key="no">
        <nuxt-link :to="`/contacts/${no}`">
          {{ name }}
        </nuxt-link>
      </li>
    </ul>
    <hr>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: "Contacts",
  transition: "elastic",
  computed: {
    contacts() {
      return this.$store.getters.getContacts;
    },
  },
}
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
}

li {
  list-style: none;
  padding: 5px 10px;
  border: 1px solid lightskyblue;
  background: lightblue;
  border-radius: 6px;
}

</style>