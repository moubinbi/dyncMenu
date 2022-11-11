<template>
    <div class="menu" style="margin-top:9px">
        <el-aside width="200px">
            <el-menu router default-active="2" class="el-menu-vertical-demo" background-color="#545c64"
                text-color="#fff" active-text-color="#ffd04b">
                <!-- for循环我们拿到路由里面的menus -->
                <template v-for="item in navData">
                    <el-submenu :index="item.path + ''" :key="item.path" v-if="!item.hidden">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span>{{ item.title }}</span>
                        </template>
                        <el-menu-item-group v-for="child in item.children" :key="child.path">
                            <el-menu-item :index="child.path">
                                <i :class="child.icon"></i>
                                {{ child.title }}
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </template>
            </el-menu>
        </el-aside>



        <!-- <ul>
           
            <li v-for="v in navData" :key="v.path">
                <router-link :to="v.path">
                    <i class="iconfront" :class="v.icon"></i>
                    <span>{{v.title}}</span>
                </router-link>
            </li>
        </ul> -->
        <!-- <el-row class="tac">
            <el-col :span="12">
                <el-menu default-active="1-4-1" class="el-menu-vertical-demo" 
                    router>
                    <template v-for="item in navData">
                        <template v-if="item.children">
                            <el-submenu :index="item.path" :key="item.path">
                                <template slot="title">
                                    <i :class="item.icon"></i>
                                </template>
                                <span slot="title">{{ item.title }}</span>
                                <el-menu-item :index="subItem.path + ''" v-for="subItem in item.children"
                                    :key="subItem.path">
                                    <template slot="title">
                                    <i :class="subItem.icon"></i>
                                    </template>
                                    <span slot="title">{{ subItem.title }}</span>
                                </el-menu-item>
                            </el-submenu>
                        </template>
                    </template>

                </el-menu>
            </el-col>
        </el-row> -->
        <!-- <el-row>
            <el-col :span="24">
                <el-menu default-active="0">
                    <el-submenu :index="item.id + ''" v-for="item in items" :key="item.id">
                        <template slot="title">
                            <span>{{ item.title }}</span>
                        </template>
                        <el-menu-item :index="subItem.id + ''" v-for="subItem in item.children" :key="subItem.id">
                            <span slot="title">{{ subItem.title }}</span>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row> -->
    </div>
</template>

<script>
// import commMenu from '@/util/commMenu';
// import { getNavData } from '@/util/http' //导入多个对象需要用{}框起来 
import { mapGetters } from 'vuex'; //vuex自带的辅助函数
export default {
    computed: { ...mapGetters(['navData']) },
    //直接获取到缓存中的这个对象数组
}

// export default {
//     data() {
//         return {
//             items: []
//         }
//     }, mounted() {
//         this.getNav();
//         console.log(this.items);
//     },
//     methods: {
//         handleOpen(key, keyPath) {
//             console.log(key, keyPath);
//         },
//         handleClose(key, keyPath) {
//             console.log(key, keyPath);
//         }, getNav() {
//             getNavData().then(res => {
//                 // console.log(res.data.data);
//                 this.items = res.data.data;
//             })
//         }
//     }
// }


</script>

<style>
.el-aside {
    height: 100%;


}

.el-submenu .el-menu-item {
    min-width: 0;
}

.el-menu {
    height: 100%;
}

.fa {
    margin-right: 10px;
}
</style>