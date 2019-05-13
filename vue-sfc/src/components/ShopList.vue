<template>
    <div>
        <h2>구매할 물건들</h2>
        <ul> 
            <li v-for="(item, index) in filteredItems" v-bind:key="index">
                {{ item.name }} 
                <button v-on:click="buyItem(item)">
                    구매
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["shopping-items"],
    methods: {
        buyItem: function(item) {
            item.buy = true;
        }
    },
    computed: {
        // =>, function() 다 가능
        filteredItems(){
            return this.shoppingItems.filter((item, index) => !item.buy)
        } 
        // function(item){return !item.buy}랑 같음
    }
}
</script>
//scoped 내부스타일로 다른곳에 적용되지 않음
<style scoped>
    li {
        height: 30px;
    }
    li > button {
        float: right;
        margin-bottom: 5px;
    }
</style>
