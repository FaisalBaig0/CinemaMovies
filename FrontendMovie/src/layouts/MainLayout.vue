<template>
    <div>
        <HeaderCom />
        <router-view></router-view>
        
    </div>
</template>
<script>
import HeaderCom from '@/components/HeaderCom.vue'

export default {
    name:'MainLayout',
    components:{
        HeaderCom
    }
}
</script>