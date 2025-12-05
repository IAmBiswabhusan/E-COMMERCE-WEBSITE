document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
  <div class="footer-wrapper">

    <div class="footer-grid">

      <!-- GLASS BOX 1 — LOGO + SOCIAL -->
      <div class="glass-box" style="text-align:center;">
  <img src="/image/logo.png" class="footer-logo" />

  <p class="tagline">Your destination for cutting-edge gadgets.</p>

  <div class="social-icons" style="justify-content:center;">
    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
    <a href="https://x.com/iAmBiswabhusan0/"><i class="fa-brands fa-twitter"></i></a>
    <a href="#"><i class="fa-brands fa-instagram"></i></a>
    <a href="https://www.youtube.com/@biswabhusanmohapatra46"><i class="fa-brands fa-youtube"></i></a>
    <a href="https://www.linkedin.com/in/biswabhusanmohapatra"><i class="fa-brands fa-linkedin"></i></a>
  </div>
</div>


  <div class="glass-box">
  <div class="footer-flex-two">

    <div class="footer-col">
      <h3>Shop</h3>
      <a href="products.html">All Products</a>
      <a href="#">Mobiles</a>
      <a href="#">Laptops</a>
      <a href="#">Accessories</a>
    </div>

    <div class="footer-col">
      <h3>About</h3>
      <a href="about.html">About Us</a>
      <a href="contact.html">Contact</a>
      <a href="#">Careers</a>
      <a href="#">Press</a>
    </div>
    <img src="/image/card2.png" 
             class="cards-img"
             style="margin-top:18px; width:160px;" />
  </div>
</div>


      <!-- GLASS BOX 3 — NEWSLETTER -->
      <div class="glass-box">
        <h3>JOIN NEWSLETTER</h3>
        <p>Get exclusive offers & early product access.</p>

        <div class="newsletter-box">
          <input type="email" placeholder="Your Email" />
          <button>SUBSCRIBE</button>
        </div>

        <img src="/image/card.png" 
             class="cards-img"
             style="margin-top:18px; width:160px;" />
      </div>

    </div>

    <!-- Bottom Text -->
    <div class="footer-bottom">
      ©2025 <span>Bhusan Mart</span> — Designed with ❤️ ~ By <a href="https://www.linkedin.com/in/iambiswabhusan/" >Biswabhusan Mohapatra
      <div class="bottom-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
  </div>
  `;

  // Inject into the <footer> tag
  document.querySelector("footer").innerHTML = footerHTML;
});
