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

Alpine.magic('sendEmail', (formElement) => {
    return async () => {
        const formData = Object.fromEntries(new FormData(formElement));
        const response = await fetch("http://localhost:3000/api", {
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
            return { success: response.ok, message };
            // formElement.reset();
        } else {
            return { success: response.ok, message };
        }
    };
})

window.Alpine = Alpine

Alpine.start()
