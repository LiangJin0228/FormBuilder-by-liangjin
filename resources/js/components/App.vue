<template>
    <v-app class="rounded rounded-md">
        <v-app-bar title="Application bar"></v-app-bar>

        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
            Main Content
        </v-main>

        <v-footer class="bg-grey-lighten-1">
            <v-row justify="center" no-gutters>
                <v-btn v-for="link in links" :key="link" color="white" variant="text" class="mx-2" rounded="xl">
                    {{ link }}
                </v-btn>
                <v-col class="text-center mt-4" cols="12">
                    {{ new Date().getFullYear() }} - <strong>Form Builder</strong>
                </v-col>
            </v-row>
        </v-footer>
        <v-bottom-navigation>Powered by Liang Jin</v-bottom-navigation>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        links: [
            'Home',
            'About Us',
            'Team',
            'Services',
            'Blog',
            'Contact Us',
        ],
    }),
}
</script>