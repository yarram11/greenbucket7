"use client";

import { useState } from "react";
import BannerSlider from "../components/BannerSlider";
import { ProductItemV1 } from "../components/Product_Item_V1";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaShareAlt } from 'react-icons/fa';

const productData = {
  Soup: [
    {
      imageSrc: "/img1.jpg",
      altText: "Veg Soup",
      price: 250,
      soupName: "Veg Soup",
      description: "A delicious blend of fresh vegetables and herbs.",
    },
    {
      imageSrc: "/img2.jpg",
      altText: "Chicken Soup",
      price: 350,
      soupName: "Chicken Soup",
      description: "A warm, hearty chicken broth with spices.",
    },
    {
      imageSrc: "/img3.jpg",
      altText: "Mutton Soup",
      price: 200,
      soupName: "Mutton Soup",
      description: "Rich and flavorful, made with tender mutton.",
    },
    {
      imageSrc: "/img4.png",
      altText: "Fish Soup",
      price: 450,
      soupName: "Fish Soup",
      description: "A light and tangy soup made with fresh fish.",
    },
  ],
  Starters: [
    {
      imageSrc: "/starter1.jpeg",
      altText: "Veg Starter",
      price: 300,
      soupName: "Veg Starter",
      description: "Crispy fried vegetable rolls.",
    },
    {
      imageSrc: "/starter2.png",
      altText: "Chicken Starter",
      price: 400,
      soupName: "Chicken Starter",
      description: "Spicy chicken wings tossed in sauce.",
    },
    {
      imageSrc: "/starter3.png",
      altText: "Paneer Tikka",
      price: 350,
      soupName: "Paneer Tikka",
      description: "Grilled paneer marinated with spices.",
    },
    {
      imageSrc: "/starter4.png",
      altText: "Fish Fry",
      price: 450,
      soupName: "Fish Fry",
      description: "Crispy fried fish served with lemon.",
    },
  ],
  Biryani: [
    {
      imageSrc: "/biryani1.jpeg",
      altText: "Veg Biryani",
      price: 400,
      soupName: "Veg Biryani",
      description:
        "Aromatic basmati rice cooked with fresh vegetables and spices.",
    },
    {
      imageSrc: "/biryani2.jpeg",
      altText: "Chicken Biryani",
      price: 500,
      soupName: "Chicken Biryani",
      description: "Tender chicken cooked with fragrant basmati rice.",
    },
    {
      imageSrc: "/biryani3.png",
      altText: "Mutton Biryani",
      price: 600,
      soupName: "Mutton Biryani",
      description: "Rich and flavorful mutton layered with basmati rice.",
    },
    {
      imageSrc: "/biryani4.jpeg",
      altText: "Fish Biryani",
      price: 550,
      soupName: "Fish Biryani",
      description: "Delicious fish cooked with spices and rice.",
    },
  ],
  Drinks: [
    {
      imageSrc: "/drink1.jpeg",
      altText: "Lemonade",
      price: 100,
      soupName: "Lemonade",
      description: "Refreshing lemonade to quench your thirst.",
    },
    {
      imageSrc: "/drink2.jpeg",
      altText: "Mango Lassi",
      price: 150,
      soupName: "Mango Lassi",
      description: "Creamy mango yogurt drink.",
    },
    {
      imageSrc: "/drink3.jpeg",
      altText: "Soda",
      price: 50,
      soupName: "Soda",
      description: "Chilled soda for a refreshing taste.",
    },
    {
      imageSrc: "/drink4.png",
      altText: "Masala Chai",
      price: 80,
      soupName: "Masala Chai",
      description: "Spiced tea brewed with aromatic spices.",
    },
  ],
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Soup");
  const [showIcons, setShowIcons] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    persons: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
   
  return (
    <>
      <BannerSlider />

      <section className="content-inner bg-white section-wrapper-2 overflow-hidden special-menu-section">
  <div className="container">
    <div className="section-head text-center">
      <h2 className="text-5xl font-bold mb-8 text-gray-800 font-serif tracking-wide italic">Special Menu</h2>
    </div>
    <div className="row">
      {/* Starter */}
      <div className="col-lg-3 col-md-6 col-sm-6 mb-30 wow fadeInUp">
        <div className="dz-img-box style-2 box-hover">
          <div className="digger-circle"></div>
          <div className="dz-media">
            <img src="/starter1.jpeg" alt="Veg Starter" />
          </div>
          <div className="dz-content">
            <h4 className="dz-title">
              <a href="/product-detail">Veg Starter</a>
            </h4>
            <p>A crispy vegetable starter perfect for any meal.</p>
            <h5 className="dz-price text-primary">₹250.00</h5>
            <button className="btn add-to-cart" onClick={() => handleAddToCart('Veg Starter', 250)}>Add to Cart</button>
          </div>
        </div>
      </div>

      {/* Chicken Biryani */}
      <div className="col-lg-3 col-md-6 col-sm-6 mb-30 wow fadeInUp">
        <div className="dz-img-box style-2 box-hover">
          <div className="digger-circle"></div>
          <div className="dz-media">
            <img src="/biryani2.jpeg" alt="Chicken Biryani" />
          </div>
          <div className="dz-content">
            <h4 className="dz-title">
              <a href="/product-detail">Chicken Biryani</a>
            </h4>
            <p>Succulent chicken cooked in fragrant basmati rice.</p>
            <h5 className="dz-price text-primary">₹500.00</h5>
            <button className="btn add-to-cart" onClick={() => handleAddToCart('Chicken Biryani', 500)}>Add to Cart</button>
          </div>
        </div>
      </div>

      {/* Mutton Biryani */}
      <div className="col-lg-3 col-md-6 col-sm-6 mb-30 wow fadeInUp">
        <div className="dz-img-box style-2 box-hover">
          <div className="digger-circle"></div>
          <div className="dz-media">
            <img src="/biryani3.png" alt="Mutton Biryani" />
          </div>
          <div className="dz-content">
            <h4 className="dz-title">
              <a href="/product-detail">Mutton Biryani</a>
            </h4>
            <p>Rich and flavorful mutton layered with spices and rice.</p>
            <h5 className="dz-price text-primary">₹600.00</h5>
            <button className="btn add-to-cart" onClick={() => handleAddToCart('Mutton Biryani', 600)}>Add to Cart</button>
          </div>
        </div>
      </div>

      {/* Fish Biryani */}
      <div className="col-lg-3 col-md-6 col-sm-6 mb-30 wow fadeInUp">
        <div className="dz-img-box style-2 box-hover">
          <div className="digger-circle"></div>
          <div className="dz-media">
            <img src="/biryani4.jpeg" alt="Fish Biryani" />
          </div>
          <div className="dz-content">
            <h4 className="dz-title">
              <a href="/product-detail">Fish Biryani</a>
            </h4>
            <p>Delicate fish infused with aromatic spices and rice.</p>
            <h5 className="dz-price text-primary">₹550.00</h5>
            <button className="btn add-to-cart" onClick={() => handleAddToCart('Fish Biryani', 550)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  {/* Filter Products Section */}
<section className="filterProducts py-10 relative">
  <div className="container">
    <ul className="flex justify-center space-x-10 relative">
      {["Soup", "Starters", "Biryani", "Drinks"].map((category) => (
        <li
          key={category}
          className="text-center cursor-pointer relative z-10"
          onClick={() => setSelectedCategory(category)}
        >
          <Image
            src={`/icon${
              category === "Soup"
                ? "1"
                : category === "Starters"
                ? "2"
                : category === "Biryani"
                ? "3"
                : "4"
            }.png`}
            alt={`${category} Icon`}
            width={70}
            height={70}
            className="m-auto overhangIcon" // New class for overhang effect
          />
          <h4 className="text-lg py-2 mb-0 font-bold">
            {category.toUpperCase()}
          </h4>
        </li>
      ))}
    </ul>
    
  {/* Left Image */}
  <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <img src="/hang.PNG" alt="Left Image" className="w-40 h-auto object-cover" />
      </div>

       {/* Right Image */}
       <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <img src="/hang1.PNG" alt="Right Image" className="w-40 h-auto object-cover" />
      </div>

    <div className="productsList py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-7">
        {productData[selectedCategory].map((product, index) => (
          <ProductItemV1
            key={index}
            imageSrc={product.imageSrc}
            altText={product.altText}
            price={product.price}
            soupName={product.soupName}
            description={product.description}
          />
        ))}
      </div>
    </div>
  </div>
</section>

  {/* Left Image */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <img src="/hang.PNG" alt="Left Image" className="w-40 h-auto object-cover" />
      </div>



{/* Customer Reviews Section */}
<section className="customer-reviews py-16">
  <div className="container text-center">
    <h2 className="text-5xl font-bold mb-8 text-gray-800 font-serif tracking-wide italic">
      Customer's Comment
    </h2>
    <div className="reviews-grid grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          review: "Absolutely delicious! The best Biryani I've ever had!",
          name: "John Doe",
          imageSrc: "/customer1.jpg",
        },
        {
          review: "Great service and the food is always fresh!",
          name: "Jane Smith",
          imageSrc: "/customer2.jpg",
        },
        {
          review: "I love their soups! Perfect for a cozy night in.",
          name: "Sarah Lee",
          imageSrc: "/customer3.jpg",
        },
      ].map((review, index) => (
        <div
          key={index}
          className="review-card p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center bg-white hover:bg-gray-50"
        >
          <div className="relative w-full h-48 overflow-hidden rounded-lg">
            <img
              src={review.imageSrc}
              alt={`${review.name}'s review`}
              className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-300"
            />
          </div>
          <p className="text-lg italic text-gray-700 mb-2">"{review.review}"</p>
          <p className="font-bold text-gray-800">- {review.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>
 <section className="chef-section">
      <h2 className="text-5xl font-bold mb-8 text-gray-800 font-serif tracking-wide italic text-center">
        Meet Our Master Chefs
      </h2>
      <div className="chefs-grid">
        {/* Chef 1 */}
        <div className="chef-card">
          <img src="/chef1.jpeg" alt="Chef John Doe" className="chef-image" />
          <div className="chef-info">
            <h3 className="chef-name">John Doe</h3>
            <p className="chef-title">Junior Chef</p>
            <div className="social-icons">
              <div
                className="share-container"
                onMouseEnter={() => setShowIcons(true)}
                onMouseLeave={() => setShowIcons(false)}
              >
                <div className="share-box">
                  <FaShareAlt className="share-icon" aria-hidden="true" />
                </div>
                {showIcons && (
                  <div className="social-media-icons">
                    <a href="#" aria-label="Facebook">
                      <FaFacebook className="social-icon" />
                    </a>
                    <a href="#" aria-label="Instagram">
                      <FaInstagram className="social-icon" />
                    </a>
                    <a href="#" aria-label="Twitter">
                      <FaTwitter className="social-icon" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Chef 2 */}
        <div className="chef-card">
          <img src="/chef2.jpeg" alt="Chef Jane Smith" className="chef-image" />
          <div className="chef-info">
            <h3 className="chef-name">Jane Smith</h3>
            <p className="chef-title">Senior Chef</p>
            <div className="social-icons">
              <div
                className="share-container"
                onMouseEnter={() => setShowIcons(true)}
                onMouseLeave={() => setShowIcons(false)}
              >
                <div className="share-box">
                  <FaShareAlt className="share-icon" aria-hidden="true" />
                </div>
                {showIcons && (
                  <div className="social-media-icons">
                    <a href="#" aria-label="Facebook">
                      <FaFacebook className="social-icon" />
                    </a>
                    <a href="#" aria-label="Instagram">
                      <FaInstagram className="social-icon" />
                    </a>
                    <a href="#" aria-label="Twitter">
                      <FaTwitter className="social-icon" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Chef 3 */}
        <div className="chef-card">
          <img src="/chef3.jpg" alt="Chef Alex Brown" className="chef-image" />
          <div className="chef-info">
            <h3 className="chef-name">Alex Brown</h3>
            <p className="chef-title">Senior Chef</p>
            <div className="social-icons">
              <div
                className="share-container"
                onMouseEnter={() => setShowIcons(true)}
                onMouseLeave={() => setShowIcons(false)}
              >
                <div className="share-box">
                  <FaShareAlt className="share-icon" aria-hidden="true" />
                </div>
                {showIcons && (
                  <div className="social-media-icons">
                    <a href="#" aria-label="Facebook">
                      <FaFacebook className="social-icon" />
                    </a>
                    <a href="#" aria-label="Instagram">
                      <FaInstagram className="social-icon" />
                    </a>
                    <a href="#" aria-label="Twitter">
                      <FaTwitter className="social-icon" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section id="reserve-table">
      <section className="reservation-section">
        <div className="container">
          <h2 className="text-center">Reserve Your Table</h2>
          <form className="reservation-form">
            <input type="text" placeholder="Your name" required />
            <input type="tel" placeholder="Phone number" required />
            <input type="email" placeholder="Email ID" required />
            <input type="number" placeholder="No. of persons" required />
            <input type="date" placeholder="Date" required />
            <input type="time" placeholder="Time" required />
            <button type="submit">Book a Table</button>
          </form>
        </div>
      </section>
      </section>
    </>
  );
}
