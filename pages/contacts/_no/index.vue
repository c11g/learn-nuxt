<template>
  <div>
    <div>NO: {{ contact.no }}</div>
    <div>이름: {{ contact.name }}</div>
    <div>전화: {{ contact.tel }}</div>
    <div>주소: {{ contact.address }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CONSTANT from "~/constant";

export default {
  name: "Contact",
  computed: {
    ...mapGetters({
      contact: "getContact"
    })
  },
  methods: {
    changeNo(no){
      this.$store.commit(CONSTANT.CHANGE_NO, { no });
    }
  },
  created: function(){
    const no = this.$route.params.no;
    this.changeNo(no);
  },
  beforeRouteUpdate(to, from, next){
    const no = to.params.no;
    this.changeNo(no);
    next();
  }
}
</script>

<style>

</style>