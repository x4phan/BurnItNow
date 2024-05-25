document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section p");
    const headers = document.querySelectorAll("section h3");
    const toggleAllButton = document.getElementById('toggle-all');

    sections.forEach(p => p.style.display = 'none');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            header.classList.toggle('active');
            updateToggleAllButton();
        });
    });

    toggleAllButton.addEventListener('click', () => {
        const allExpanded = Array.from(sections).every(p => p.style.display === 'block');

        if (allExpanded) {
            sections.forEach(p => p.style.display = 'none');
            headers.forEach(header => header.classList.remove('active'));
            toggleAllButton.textContent = 'Expand All';
        } else {
            sections.forEach(p => p.style.display = 'block');
            headers.forEach(header => header.classList.add('active'));
            toggleAllButton.textContent = 'Collapse All';
        }
    });

    function updateToggleAllButton() {
        const allExpanded = Array.from(sections).every(p => p.style.display === 'block');
        toggleAllButton.textContent = allExpanded ? 'Collapse All' : 'Expand All';
    }
});
