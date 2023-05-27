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

const clearActiveMenuItems = (menuItems) => {
    menuItems.forEach(menuItem => {
        if (menuItem.classList.contains('active')) {
            menuItem.classList.remove('active');
        }
    });
}

Alpine.magic('setActiveMenuItem', (_, { evaluate }) => {
    return () => {
        const aboutUs = evaluate('$refs.aboutUs').getBoundingClientRect();
        const services = evaluate('$refs.services').getBoundingClientRect();
        const packages = evaluate('$refs.packages').getBoundingClientRect();
        const contact = evaluate('$refs.contact').getBoundingClientRect();
        const aboutUsMenuItem = evaluate('$refs.aboutUsMenuItem');
        const servicesMenuItem = evaluate('$refs.servicesMenuItem');
        const packagesMenuItem = evaluate('$refs.packagesMenuItem');
        const contactMenuItem = evaluate('$refs.contactMenuItem');

        if (contact.top <= 90) {
            clearActiveMenuItems([aboutUsMenuItem, servicesMenuItem, packagesMenuItem]);
            contactMenuItem.classList.add('active');
        } else if (packages.top <= 90) {
            clearActiveMenuItems([aboutUsMenuItem, servicesMenuItem, contactMenuItem]);
            packagesMenuItem.classList.add('active');
        } else if (services.top <= 90) {
            clearActiveMenuItems([aboutUsMenuItem, packagesMenuItem, contactMenuItem]);
            servicesMenuItem.classList.add('active');
        } else if (aboutUs.top <= 90) {
            clearActiveMenuItems([servicesMenuItem, packagesMenuItem, contactMenuItem]);
            aboutUsMenuItem.classList.add('active');
        } else {
            clearActiveMenuItems([aboutUsMenuItem, servicesMenuItem, packagesMenuItem, contactMenuItem]);
        }
    }
})

Alpine.magic('sendEmail', (formElement) => {
    return async () => {
        const formData = Object.fromEntries(new FormData(formElement));
        const response = await fetch(import.meta.env.VITE_API_URL, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        if (response.status === 404) {
            return { success: response.ok, message: '' };
        }

        const { message } = await response.json();

        if (response.ok) {
            formElement.reset();
            return { success: response.ok, message };
        } else {
            return { success: response.ok, message };
        }
    };
})

window.Alpine = Alpine

Alpine.start()
