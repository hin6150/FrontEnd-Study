<template>
  <div class="hello">
    <div v-for="(user, index) in users" :key="index" class="user-wrap">
      <h2>No. {{ index + 1 }}</h2>
      <dl>
        <dt>아이디</dt>
        <dd>{{ user.userid }}</dd>
        <dt>이름</dt>
        <dd>{{ user.name }}</dd>
      </dl>
    </div>
    <button @click="called">
      CALL API
    </button>
    <button @click="update">
      UPDATE API
    </button>
    <ul>
      <li>
        {{apiData}}
        <hr />
      </li>
      <li v-for="data in apiData" :key="data.name">
        {{data.name}} : {{data.elements[0].text}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      apiData: []
    }
  },
  created() {
    this.$http.get('/api/users').then((response) => {
      this.users = response.data
    })
  },
  methods: {
    update: function (event) {
      this.$http
        .post('/api/data/update', {
        })
        .then((res) => {
          if (res.data.success === true) {
            alert(res.data.message)
          }
          if (res.data.success === false) {
            alert(res.data.message)
          }
        })
        .catch(function (error) {
          alert(error + 'error!')
        })
    },
    called: function (event) {
      this.$http.get('/api/data/called').then((response) => {
        this.apiData = response.data
      })
    }
  }
}
</script>
