document.addEventListener("DOMContentLoaded", () => {
    const totalPriceElement = document.querySelector(".total");
    
    // Fonction pour mettre à jour le prix total
    const updateTotalPrice = () => {
      const unitPrices = document.querySelectorAll(".unit-price");
      let total = 0;
      
      unitPrices.forEach((priceElement) => {
        const price = parseFloat(priceElement.textContent.replace(' $', ''));
        const quantityElement = priceElement.nextElementSibling.querySelector(".quantity");
        const quantity = parseInt(quantityElement.textContent);
        total += price * quantity;
      });
      
      totalPriceElement.textContent = `${total} $`;
    };
  
    // Fonction pour gérer les événements de quantité
    const handleQuantityChange = (event) => {
      const target = event.target;
      const quantityElement = target.parentElement.querySelector(".quantity");
      let quantity = parseInt(quantityElement.textContent);
  
      if (target.classList.contains("fa-plus-circle")) {
        quantity += 1;
      } else if (target.classList.contains("fa-minus-circle")) {
        if (quantity > 0) {
          quantity -= 1;
        }
      }
      
      quantityElement.textContent = quantity;
      updateTotalPrice();
    };
  
    // Fonction pour supprimer les articles
    const handleDeleteProduct = (event) => {
      const target = event.target;
      if (target.classList.contains("fa-trash-alt")) {
        target.closest(".card-body").remove();
        updateTotalPrice();
      }
    };
  
    // Fonction pour aimer les articles
    const handleLikeProduct = (event) => {
      const target = event.target;
      if (target.classList.contains("fa-heart")) {
        target.classList.toggle("liked");
      }
    };
  
    // Ajouter les écouteurs d'événements pour les boutons "+" et "-"
    document.querySelectorAll(".fa-plus-circle, .fa-minus-circle").forEach(button => {
      button.addEventListener("click", handleQuantityChange);
    });
  
    // Ajouter les écouteurs d'événements pour les boutons de suppression
    document.querySelectorAll(".fa-trash-alt").forEach(button => {
      button.addEventListener("click", handleDeleteProduct);
    });
  
    // Ajouter les écouteurs d'événements pour les boutons "aimer"
    document.querySelectorAll(".fa-heart").forEach(button => {
      button.addEventListener("click", handleLikeProduct);
    });
    
    // Initialiser le prix total au chargement de la page
    updateTotalPrice();
  });
  