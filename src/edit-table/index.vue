<template>
  <div class="edit-table">
    <el-table :data="tableData.data" border highlight-current-row v-bind="$attrs" v-on="$listeners" @cell-dblclick="onDblclick">
      <el-table-column
        v-for="(colum, i) in tableData.colums"
        :key="i"
        :prop="colum.prop"
        :label="colum.name"
        :width="colum.width"
        :column-key="colum.prop"
      >
        <template slot-scope="scope">
          <el-input
            v-if="scope.row.isEdit && colum.prop === activeColum.property"
            v-model="scope.row[colum.prop]"
            @blur="onBlur(scope.row, colum)"
          >
          </el-input>
          <span v-else>{{ scope.row[colum.prop] }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'editTable',
  props: {
    tableData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      activeColum: null
    }
  },
  watch: {
    tableData: {
      handler() {},
      deep: true
    }
  },
  methods: {
    onDblclick(row, column, cell, event) {
      row.isEdit = !row.isEdit
      this.activeColum = column
    },
    // 修改
    onBlur(row, column) {
      row.isEdit = !row.isEdit
      this.$emit('dataEdit', this.tableData?.data)
    }
  }
}
</script>
<style >
.edit-table {

}
</style>
