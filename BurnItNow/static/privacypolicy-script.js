function toggleSection(header) {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    header.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section p");
    const headers = document.querySelectorAll("section h2");
    sections.forEach(p => p.style.display = 'none');

    

    const toggleButton = document.getElementById('toggle-all');
    let isCollapsed = true;

    toggleButton.addEventListener('click', () => {
        if (isCollapsed) {
            sections.forEach(p => p.style.display = 'block');
            headers.forEach(header => header.classList.add('active'));
            toggleButton.textContent = 'Collapse All';
        } else {
            sections.forEach(p => p.style.display = 'none');
            headers.forEach(header => header.classList.remove('active'));
            toggleButton.textContent = 'Expand All';
        }
        isCollapsed = !isCollapsed;
    });
});

