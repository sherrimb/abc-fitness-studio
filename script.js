// Handle all page interactions after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Subscribe buttons on all pages
  const subscribeButtons = document.querySelectorAll(".subscribe-btn");
  subscribeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Thank you for subscribing");
    });
  });

  // Add to Cart buttons (Gallery Page)
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const clearCartBtn = document.getElementById("clear-cart");
  const processOrderBtn = document.getElementById("process-order");
  const viewCartBtn = document.getElementById("view-cart");
  const cartModal = document.getElementById("cart-modal");
  const cartContents = document.getElementById("cart-contents");
  const closeCartBtn = document.getElementById("close-cart");

  // Helper: Get current cart from sessionStorage
  function getCart() {
    return JSON.parse(sessionStorage.getItem("cart")) || [];
  }

  // Helper: Save cart back to sessionStorage
  function saveCart(cart) {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }

  // Add to Cart buttons
  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const name = button.getAttribute("data-name");
      const price = button.getAttribute("data-price");
      const cart = getCart();
      cart.push({ name, price });
      saveCart(cart);
      alert("Item added to the cart");
    });
  });

  // View Cart button
  if (viewCartBtn && cartModal && cartContents && closeCartBtn) {
    viewCartBtn.addEventListener("click", () => {
      const cart = getCart();
      if (cart.length === 0) {
        cartContents.innerHTML = "<p>Your cart is empty.</p>";
      } else {
        let html = "<ul>";
        cart.forEach(item => {
          html += `<li>${item.name} - $${item.price}</li>`;
        });
        html += "</ul>";
        cartContents.innerHTML = html;
      }
      cartModal.style.display = "block";
    });

    closeCartBtn.addEventListener("click", () => {
      cartModal.style.display = "none";
    });
  }

  // Clear Cart button
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      const cart = getCart();
      if (cart.length > 0) {
        sessionStorage.removeItem("cart");
        alert("Cart cleared");
      } else {
        alert("No items to clear");
      }
    });
  }

  // Process Order button
  if (processOrderBtn) {
    processOrderBtn.addEventListener("click", () => {
      const cart = getCart();
      if (cart.length > 0) {
        sessionStorage.removeItem("cart");
        alert("Thank you for your order");
      } else {
        alert("Cart is empty");
      }
    });
  }

  // Contact Form (About Page)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name")?.value || "";
      const email = document.getElementById("email")?.value || "";
      const message = document.getElementById("message")?.value || "";
      const order = document.getElementById("order")?.value || "";

      // Store in localStorage
      const submission = { name, email, message, order };
      localStorage.setItem("customOrder", JSON.stringify(submission));

      alert("Thank you for your message");
      contactForm.reset();
    });
  }

  // Booking Form (Schedule Page)
  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Your class has been booked! See you soon!");
      bookingForm.reset();
    });
  }

  // View Class Schedule Button (Home Page)
  const viewScheduleBtn = document.getElementById("view-schedule-btn");
  if (viewScheduleBtn) {
    viewScheduleBtn.addEventListener("click", () => {
      alert("Schedule is currently being updated. Please check back soon!");
    });
  }
});