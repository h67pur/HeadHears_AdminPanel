import { reactive } from 'vue';

export const store = reactive({
    cartItems: [
        {
            id: 2,
            name: 'Sennheiser HD 450BT',
            price: 12990,
            image: 'img/main/anker.png',
            quantity: 1
        }
    ],
    isSidebarOpen: false,

    addToCart(item) {
        const existingItem = this.cartItems.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cartItems.push({ ...item, quantity: 1 });
        }
    },

    removeFromCart(item) {
        const index = this.cartItems.findIndex((i) => i.id === item.id);
        if (index !== -1) {
            this.cartItems.splice(index, 1);
        }
    },

    incrementQuantity(item) {
        const cartItem = this.cartItems.find(i => i.id === item.id);
        if (cartItem) {
            cartItem.quantity += 1;
        }
    },

    decrementQuantity(item) {
        const cartItem = this.cartItems.find(i => i.id === item.id);
        if (cartItem && cartItem.quantity > 1) {
            cartItem.quantity -= 1;
        }
    },

    clearCart() {
        this.cartItems = [];
    },

    get total() {
        return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
});