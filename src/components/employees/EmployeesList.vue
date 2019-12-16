<template>
  <div>
    <h3 class="font-wheight-light">Funcionários</h3>

    <ul class="list-group" v-if="employees.length > 0">
      <EmployeesItemList
        class="list-group-item"
        v-for="employee in employees"
        :key="employee.id"
        :employee="employee" />
    </ul>

    <p v-else>Nenhum funcionário cadastrado.</p>

    <button class="btn btn-secondary mt-4 mb-4" @click="fnBack">Voltar</button>
  </div>
</template>

<script>

import EmployeesItemList from './EmployeesItemList.vue'

export default {
  components: {
    EmployeesItemList
  },
  data() {
    return {
      employees: [
        { id: 1, name: 'Felipe Costa', email: 'felipe@mail.com' },
        { id: 2, name: 'Marina Rocha', email: 'marina@mail.com' },
        { id: 3, name: 'Tiago Santos', email: 'tiago@mail.com' },
      ]
    }
  },
  methods: {
    fnBack(event) {
      this.$router.back()
    }
  } 
}
</script>