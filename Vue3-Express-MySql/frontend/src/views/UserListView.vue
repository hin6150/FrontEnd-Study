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
    <button @click="called">CALL API</button>
    <button @click="update">UPDATE API</button>
    <p></p>
    startIndex:
    <input :v-model="startIndex" value="1" type="number" />
    <p></p>
    endIndex:
    <input :v-model="startIndex" value="2" type="number" />
    <ul>
      <li>
        {{ apiData }}
        <hr />
      </li>
      <li v-for="(data, index) in apiData" :key="index">
        <p>시리얼 COLUMN1: {{ data.COLUMN1 }}</p>
        <p>데이터관측일시 COLUMN2: {{ data.COLUMN2 }}</p>
        <p>온도 COLUMN3: {{ data.COLUMN3 / 10 - 100 }}</p>
        <p>습도(%) COLUMN4: {{ data.COLUMN4 }}</p>
        <p>미세먼지(㎍/㎥) COLUMN5: {{ data.COLUMN5 }}</p>
        <p>초미세먼지(㎍/㎥) COLUMN9: {{ data.COLUMN9 }}</p>
        <p>소음(㏈) COLUMN6: {{ data.COLUMN6 }}</p>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      apiData: [],
      startIndex: 1,
      endIndex: 2
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
          start: this.startIndex,
          end: this.endIndex
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
