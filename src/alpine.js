import Alpine from 'alpinejs'

Alpine.magic('scrollTo', (_, { evaluate }) => {
    return (element) => {
        const { scrollY } = window;
        const { clientHeight: headerHeight } = evaluate('$refs.header');
        const { top } = element.getBoundingClientRect();
        const scrollTo = top + scrollY - headerHeight - 20;
        window.scrollTo({ top: scrollTo, behavior:'smooth' });
    };
})

window.Alpine = Alpine

Alpine.start()
