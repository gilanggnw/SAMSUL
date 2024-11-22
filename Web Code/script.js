document.addEventListener('DOMContentLoaded', () => {
    // Example: Add click functionality to features
    const features = document.querySelectorAll('.feature');
    features.forEach((feature) => {
        feature.addEventListener('click', () => {
            alert(`Anda memilih fitur ${feature.innerText}`);
        });
    });
});
