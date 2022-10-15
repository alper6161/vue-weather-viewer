import { defineStore } from 'pinia'

export const useMenuHandler = defineStore('menu-handler', {
    state: () => ({
        isMenuOpen: false
    }),
    actions: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            console.log(this.isMenuOpen)
        },
    },
})