import React, { useState } from "react";
import { useCart } from "../../context/CartContext";

const WhatsAppCheckout = () => {
  const { items: cartItems, getTotalPrice } = useCart();
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckout = () => {
    // ✅ Validate customer details
    if (
      !customerDetails.name.trim() ||
      !customerDetails.address.trim() ||
      !customerDetails.phone.trim()
    ) {
      alert("⚠️ Please fill in all customer details before proceeding.");
      return;
    }

    if (cartItems.length === 0) {
      alert("🛒 Your cart is empty!");
      return;
    }

    // ✅ Format cart items
    let cartItemsText = "";
    cartItems.forEach((item, index) => {
      const itemPrice = parseFloat(
        item.price.toString().replace(/[^\d.]/g, "")
      );
      const itemTotal = itemPrice * item.quantity;
      cartItemsText += `${index + 1}. ${item.name} - Qty: ${
        item.quantity
      } - ₹${itemTotal.toFixed(2)}\n`;
    });

    // ✅ Create WhatsApp message
    const message = `🛒 New Order Request

${cartItemsText}
Total: ₹${getTotalPrice()}

👤 Name: ${customerDetails.name}
📍 Address: ${customerDetails.address}

Please confirm my order.`;

    // ✅ Encode & Redirect to WhatsApp
    const encodedMessage = encodeURIComponent(message).replace(/\n/g, '%0A').trim();
    const sellerPhoneNumber = "919511801233"; // ✅ Updated seller’s WhatsApp number
    window.open(`https://wa.me/${sellerPhoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="mt-4 p-4 bg-light rounded">
      <h3 className="mb-4">Checkout via WhatsApp</h3>

      {/* Customer Details Form */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={customerDetails.name}
          onChange={handleInputChange}
          placeholder="Enter your full name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">Delivery Address</label>
        <textarea
          className="form-control"
          id="address"
          name="address"
          value={customerDetails.address}
          onChange={handleInputChange}
          placeholder="Enter your complete address"
          rows="3"
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone Number</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          name="phone"
          value={customerDetails.phone}
          onChange={handleInputChange}
          placeholder="Enter your phone number"
        />
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        style={{
          backgroundColor: "#25D366",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "16px",
          transition: "opacity 0.2s ease-in-out",
        }}
        onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
        onMouseLeave={(e) => (e.target.style.opacity = "1")}
      >
        Checkout via WhatsApp
      </button>
    </div>
  );
};

export default WhatsAppCheckout;
