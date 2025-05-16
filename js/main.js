// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        // Toggle icon
        icon.classList.toggle('fa-minus');
        icon.classList.toggle('fa-plus');

        // Toggle body visibility of body
        groupBody.classList.toggle('open');

        // Close other open FAQ bodies
        const otherGroups = faqContainer.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });
    });
});

// Mobile Menu
document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => {
        hamburgerButton.classList.toggle('is-active');
        mobileMenu.classList.toggle('active');
    });
});

// Sign Up Form
function selectOption(button, value) {
    // Deselect all buttons in the same group
    const group = button.parentElement;
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Select the clicked one
    button.classList.add('selected');

    // Update the hidden input value (if it exists)
    const hiddenInput = group.parentElement.querySelector('input[type="hidden"]');
    if (hiddenInput) {
        hiddenInput.value = value;
    }
}
