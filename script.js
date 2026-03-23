// Create an advanced API card for the Marketplace/Home
function createAdvancedApiCard(api) {
    const card = document.createElement('div');
    card.className = 'api-card';
    card.onclick = () => window.location.href = `api-details.html?slug=${api.slug}`;
    card.style.cursor = 'pointer';

    const badgeClass = api.status === 'Free' ? 'badge-free' : 'badge-paid';

    card.innerHTML = `
        <span class="api-badge ${badgeClass}">${api.status}</span>
        <div class="api-category">${api.category}</div>
        <div class="api-icon">${api.icon}</div>
        <h3>${api.name}</h3>
        <p>${api.short_description}</p>
        <div class="api-footer">
            <div class="api-rating">
                <i class="fa fa-star"></i> ${api.rating}
            </div>
            <a href="api-details.html?slug=${api.slug}" class="btn btn-outline" style="padding: 5px 12px; font-size: 0.8rem;">View API</a>
        </div>
    `;
    return card;
}

function handleNavSearch(query) {
    if (query.length > 2) {
        // Debounce if needed, but for local data it's fine
        window.location.href = `marketplace.html?q=${query}`;
    }
}
