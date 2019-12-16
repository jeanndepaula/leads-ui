<template>
  <div id="app">
    
    <div class="container">

      <div class="row">

        <!-- formulario -->
        <div class="col-sm-12">

          <h3>Preencha abaixo</h3>

          <form @submit.prevent="enviar" @reset="resetar">

            <div class="form-group">
              <label>Nome:</label>
              <input 
                type="text" 
                class="form-control" 
                placeholder="Seu nome"
                v-model.lazy.trim="employee.name">
            </div>

            <div class="form-group">
              <label>Endereço de email:</label>
              <input 
                type="email" 
                class="form-control" 
                placeholder="Seu email"
                :value="employee.email"
                @input="employee.email = $event.target.value">
            </div>

            <div class="row">
              <div class="form-group col-4">
                <label>Idade:</label>
                <input 
                  type="number" 
                  class="form-control" 
                  placeholder="Sua idade"
                  v-model.number="employee.age">
              </div>

              <div class="form-group col-8">

                <p>Gênero:</p>

                <div class="form-check form-check-inline">
                  <input 
                    type="radio" 
                    class="form-check-input" 
                    value="Masculino"
                    v-model="employee.gender">
                  <label class="form-check-label">Masculino</label>
                </div>

                <div class="form-check form-check-inline">
                  <input 
                    type="radio" 
                    class="form-check-input" 
                    value="Feminino"
                    v-model="employee.gender">
                  <label class="form-check-label">Feminino</label>
                </div>

              </div>
            
            </div>

            <button class="btn btn-secondary" type="reset">Cancelar</button>
            <button class="btn btn-success" type="submit">Enviar</button>

          </form>

        </div>

      </div>

    </div>

  </div>
</template>


<script>

export default {
  data() {
    return {
      employee: {},
      default: {
        name: '',
        email: '',
        age: 0,
        gender: 'male',
      },
    }
  },
  methods: {
    send(event) {},
    reset() {
      this.employee = Object.assign({}, this.default)
    }
  },
  created() {
    this.reset()
  }
}
</script>

<style scoped>
  .btn {
    margin-right: 5px;
  }
</style>