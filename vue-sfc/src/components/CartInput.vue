<template>
    <div>
        <input v-model="newItem">
        <button v-on:click="addItem">추가</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            newItem: ""
        };
    },
    methods: {
        addItem: function(item) {
            console.log(this.newItem);
            if (this.newItem.trim().length > 0) {
                this.$emit("add-item", this.newItem);
                this.newItem = "";
            }
        }
    }
}
</script>

<style>

</style>
