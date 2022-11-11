<template>
    <div class="header">
        <el-header class="head">
            <div class="title">通用后台管理系统</div>
            <div>{{ name }}</div>
        </el-header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '1111'
        }
    }
}
</script>

<style>
.el-header {
    background: #545c64;
    color: #fff;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
}

.title {
    width: 200px;
    font-size: 24px;
}
</style>