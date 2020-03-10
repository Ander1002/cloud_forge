<template>
  <v-data-table
    :headers="headers"
    :items="nombres"
    :search="search"
    sort-by="promedio"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="Black">
        <v-toolbar-title>Lista de Estudiantes</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-text-field class="text-xs-center" v-model="search" append-icon="search" label="Busqueda" single-line="" hide-details=""></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">Nuevo Estudiante</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Nombre"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.apellido" label="Apellido"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.ced" label="Cedula"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.asig" label="Asignatura"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.promedio" label="Promedio"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="save">Guardar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        create
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Nombre',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Apellido', value: 'apellido' },
        { text: 'Cedula', value: 'ced' },
        { text: 'Asignatura', value: 'asig' },
        { text: 'Promedio', value: 'promedio' },
        { text: 'Actiones', value: 'action', sortable: false },
      ],
      nombres: [],
      search: '',
      editedIndex: -1,
      editedItem: {
        name: '',
        apellido: '',
        ced: '',
        asig: '',
        promedio: 0,
      },
      defaultItem: {
        name: '',
        apellido: '',
        ced: '',
        asig: '',
        promedio: 0,
      },
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    created () {
      this.initialize()
    },
    methods: {
      initialize () {
        this.nombres = [
          {
            name: 'Ronan',
            apellido: 'Lynch',
            ced: '22424020',
            asig: 'Latín',
            promedio: 10,
          },
          {
            name: 'Adam',
            apellido: 'Parrish',
            ced: '22565020',
            asig: 'Algebra',
            promedio: 20,
          },
          {
            name: 'Richard',
            apellido: 'Gansey',
            ced: '22464737',
            asig: 'Programación',
            promedio: 18,
          },
        ]
      },
      editItem (item) {
        this.editedIndex = this.nombres.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        const index = this.nombres.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.nombres.splice(index, 1)
      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.nombres[this.editedIndex], this.editedItem)
        } else {
          this.nombres.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>