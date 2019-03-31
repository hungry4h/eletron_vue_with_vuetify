<template>
    <div class="table">
        <v-container>
            <v-data-table
                :headers="headers"
                :items="desserts"
                class="elevation-1"
            >
                <template v-slot:items="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.calories }}</td>
                <td class="text-xs-right">{{ props.item.fat }}</td>
                <td class="text-xs-right">{{ props.item.carbs }}</td>
                <td class="text-xs-right">{{ props.item.protein }}</td>
                <td class="text-xs-right">{{ props.item.iron }}</td>
                </template>
            </v-data-table>
        </v-container>
    </div>
</template>

<script>
import desserts from '../json/desserts.json'

  export default {
    data () {
      return {
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        desserts: desserts
      }
    }
  }
</script>

<style>

</style>
