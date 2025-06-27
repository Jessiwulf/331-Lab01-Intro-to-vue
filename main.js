const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('Description')
        const image = ref('./assets/images/socks_green.jpg')
        const inStock = ref(false)
        const inventory = ref(9)
        const onSale = ref(true) 
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const varients = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
        ])
        function updateImage(varientImage){
            image.value = varientImage
        }

        const cart = ref(0)
        function addToCart() {
            cart.value += 1
        }

        const sizes = ref(['S', 'M', 'L']);
            return {
                product,
                image,
                description,
                inStock,
                onSale,
                inventory,
                details,
                varients,
                sizes,
                cart,
                addToCart,
                updateImage
            }

    }
}).mount('#app')

