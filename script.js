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
  let cartItems = 0;

  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      cartItems++;
      alert("Item added to the cart");
    });
  });

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      if (cartItems > 0) {
        cartItems = 0;
        alert("Cart cleared");
      } else {
        alert("No items to clear");
      }
    });
  }

  if (processOrderBtn) {
    processOrderBtn.addEventListener("click", () => {
      if (cartItems > 0) {
        alert("Thank you for your order");
        cartItems = 0;
      } else {
        alert("Cart is empty");
      }
    });
  }

  // Contact Form (About Page)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent form from submitting
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