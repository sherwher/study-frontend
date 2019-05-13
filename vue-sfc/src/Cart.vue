<template>
    <div id="app">
        <cart-header></cart-header>
        <div v-show="showAll">
            <h2>전체 목록</h2>
            <ul>
                <li v-for="(item, index) in items" v-bind:key="index">
                    {{ item.name }}
                </li>
            </ul>
        </div>
        <input type="checkbox" v-model="showAll" />전체목록보기
        <shop-list v-bind:shopping-items="items"></shop-list>
        <!-- v-on을 cart-input에 추가하면 부모노드로 이벤트 보냄 -->
        <!-- 부모에 있는 메서드 addItem-->
        <cart-input v-on:add-item="addItem"></cart-input>
        <bought-list
            v-bind:bought-items="items"
            v-on:remove-item="removeItem"
        ></bought-list>
        <cart-footer></cart-footer>
    </div>
</template>

<script>
    import CartHeader from "./components/CartHeader.vue";
    import CartFooter from "./components/CartFooter.vue";
    import ShopList from "./components/ShopList.vue";
    import BoughtList from "./components/BoughtList.vue";
    import CartInput from "./components/CartInput.vue";
    export default {
        data: () => {
            return {
                showAll: true,
                items: [
                    { name: "무", buy: false },
                    { name: "배추", buy: false },
                    { name: "쪽파", buy: false },
                    { name: "고춧가루", buy: false }
                ]
            };
        },
        components: {
            "cart-header": CartHeader,
            "cart-footer": CartFooter,
            "shop-list": ShopList,
            "bought-list": BoughtList,
            "cart-input": CartInput
        },
        methods: {
            addItem: function(newItem) {
                console.log("item from child : ", newItem);
                //넘겨받은 아이템이름을 객체로 변환
                this.items.push({
                    name: newItem,
                    buy: false
                });
            },
            removeItem: function(item) {
                console.log("remove item : ", item);
                //배열에서 아이템 삭제 시
                //객체 인덱스 찾고
                //var index = a.indexOf(item)
                //a.splice(index,1)
                var index = this.items.indexOf(item);
                if (index > -1) {
                    this.items.splice(index, 1);
                }
            }
        }
    }
</script>

<style>

</style>
