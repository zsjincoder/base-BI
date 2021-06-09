<template>
    <Container :options="{ width: 1920, height: 720 }">
        <template>
            <Header />
            <div class="main">
                <router-view />
            </div>
        </template>
    </Container>
</template>

<script>
import Container from '@/components/layout/Container';
import Header from '@/components/layout/Header';

export default {
    name: 'Layout',
    components: {
        Header,
        Container
    }
};
</script>

<style lang="less"
       scoped>
.main {
    overflow: hidden;
    height: calc(100% - 90px);
}
</style>
