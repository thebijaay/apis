// Create a card element for an API object
function createApiCard(api) {
    const card = document.createElement('div');
    card.className = 'api-card';
    card.innerHTML = `
        <div class="api-category">${api.category}</div>
        <div class="api-icon">${api.icon}</div>
        <h3>${api.name}</h3>
        <p>${api.description}</p>
        <div class="api-meta">
            <span>Auth: ${api.auth}</span>
            <span>HTTPS: ${api.https}</span>
            <span>CORS: ${api.cors}</span>
        </div>
        <div style="margin-top: 20px; text-align: center;">
            <a href="#" class="btn btn-outline btn-sm" onclick="alert('Viewing details for ${api.name}'); return false;">View Details</a>
        </div>
    `;
    return card;
}

// Common functions or data-related utilities can go here.
// The specific page logic is already in the <script> tags of the HTML files.
