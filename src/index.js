const scrollIntoView = (element, header) => {
    const { scrollY } = window;
    const { clientHeight: headerHeight } = header;
    const { top } = element.getBoundingClientRect();
    const scrollTo = top + scrollY - headerHeight - 20;
    window.scrollTo({ top: scrollTo, behavior:'smooth' })
}
