<template>
    <div>
        <h2>구매한 물건들</h2>
        <ul>
            <li v-for="(item, index) in filteredList" v-bind:key="index">
                {{item.name}} 
                <button v-on:click="removeItem(item)">
                    삭제
                </button>
                <button v-on:click="cancleBuy(item)">
                    취소
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["bought-items"],
    methods: {
        cancleBuy: function(item) {
            item.buy = false;
        },
        removeItem: function(item) {
            this.$emit("remove-item", item);
        }
    },
    computed: {
        filteredList() {
            return this.boughtItems.filter(item => item.buy);
        }
    }
}
</script>

<style>

</style>
