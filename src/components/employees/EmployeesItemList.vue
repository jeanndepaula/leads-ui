<template>
  <li>
    <span>{{ employee.name }}</span>
    <router-link 
      :to="`/employees/${employee.id}`"
      class="btn btn-info btn-sm float-right">
        Detalhes
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    employee: {
      type: Object,
      required: true
    }
  }
}
</script>