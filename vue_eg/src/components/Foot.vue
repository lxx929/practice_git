<template>
    <footer>
        <span v-for="(item,index) in data" :key="index" :class='{"active":index===ind}' @click="tapFoot(index)">{{item.title}}</span>
    </footer>
</template>

<script>

export default {
    data(){
        return {
            ind:0,
           data:[
               {title:'首页'},
               {title:'精选'},
               {title:'搜索'},
               {title:'我的'}
           ]
        }
    },
    methods: {
        tapFoot(index){
            this.ind=index;
        }
    },
}
</script>
<style scoped  lang="">
footer{
    width: 100%;
    height: 50px;
    background: lightcoral;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.active{
    color:lightgoldenrodyellow;
    font-weight: bolder;
}
</style>