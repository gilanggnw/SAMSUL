document.addEventListener('DOMContentLoaded', () => {
    // Profile box click event
    document.querySelector('.profile-box').addEventListener('click', () => {
        alert('Redirecting to Profile Details...');
    });

    // Add click functionality to popup buttons
    const popupButtons = document.querySelectorAll('.popup-menu button');
    popupButtons.forEach((button) => {
        button.addEventListener('click', () => {
            alert(`You selected ${button.innerText}`);
        });
    });

    // Add click functionality to feature buttons
    const features = document.querySelectorAll('.feature');
    features.forEach((feature) => {
        feature.addEventListener('click', () => {
            alert(`You selected feature ${feature.innerText}`);
        });
    });
});

// Function to show the selected page
function showPage(pageId, element) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach((page) => {
        page.style.display = 'none';
    });

    // Show the selected page
    document.getElementById(pageId).style.display = 'block';

    // Remove active class from all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
        link.classList.remove('active');
    });

    // Add active class to the clicked navigation link
    element.classList.add('active');
}

// Cash Menu Show/Hide
function showCashMenu() {
    document.getElementById('cash-menu').style.display = 'block';
}

function hideCashMenu() {
    document.getElementById('cash-menu').style.display = 'none';
}