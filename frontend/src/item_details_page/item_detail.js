const params = new URLSearchParams(window.location.search);
const itemId = params.get("id");
const container = document.getElementById("item-container");

if (!itemId) {
  container.innerHTML = "<p>No item ID provided.</p>";
} else {
  fetch(`http://localhost:5000/api/items/${itemId}`)
    .then(res => {
      if (!res.ok) throw new Error("Item not found");
      return res.json();
    })
    .then(item => {
      const imgSrc = item.imageUrl && item.imageUrl.trim() !== ""
        ? item.imageUrl
        : "https://placehold.co/400x300?text=No+Image";

      container.innerHTML = `
        <div class="item-detail-image">
          <img src="${imgSrc}" alt="${item.title}" />
        </div>
        <div class="item-detail-info">
          <h2>${item.title}</h2>
          <p class="item-price">£${item.price}</p>
          <p><strong>Description:</strong> ${item.description}</p>
          <p><strong>Location:</strong> ${item.location}</p>
          <p><strong>Category:</strong> ${item.category}</p>
        </div>
      `;
    })
    .catch(err => {
      container.innerHTML = `<p>Error: ${err.message}</p>`;
    });
}
