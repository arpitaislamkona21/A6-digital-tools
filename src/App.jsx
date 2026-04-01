import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('Product'); // Toggling State

  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    if (!isExist) {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.warn("Product already in cart!");
    }
  };

  const removeProduct = (id) => {
    const remaining = cart.filter(item => item.id !== id);
    setCart(remaining);
    toast.error("Product removed from cart!");
  };

  const proceedCheckout = () => {
    setCart([]);
    toast.info("Checkout successful! Cart cleared.");
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <ToastContainer position="top-center" autoClose={2000} />
      
      {/* Navbar */}
      {/* Navbar */}
      <nav className="navbar bg-white shadow-md px-10 sticky top-0 z-50 flex justify-between items-center py-4">
  
  
  <div className="text-2xl font-bold text-purple-600">DigiTools</div>

  
  <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
    <li><a href="#" className="hover:text-blue-600 transition-colors">Products</a></li>
    <li><a href="#" className="hover:text-blue-600 transition-colors">Features</a></li>
    <li><a href="#" className="hover:text-blue-600 transition-colors">Pricing</a></li>
    <li><a href="#" className="hover:text-blue-600 transition-colors">Testimonials</a></li>
    <li><a href="#" className="hover:text-blue-600 transition-colors">FAQ</a></li>
  </ul>

 
  <div className="flex items-center gap-4">
    
    <div className="indicator">
      <span className="indicator-item badge badge-secondary">{cart.length}</span>
      <button className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </button>
    </div>
    <a href="#" className="hover:text-blue-600 transition-colors">Login</a>
   
    <button className="btn btn-primary rounded-full px-8">Get Started</button>
  </div>

</nav>

      {/* Hero/Banner Section */}
      <header className="hero py-16 px-6 lg:px-12 bg-white">
  <div className="container mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

    {/* বাম দিকের টেক্সট এবং বাটন অংশ */}
    <div className="flex-1 text-left flex flex-col items-start lg:items-start space-y-6">
      <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-black">
        Supercharge Your <br />
        Digital Workflow
      </h1>
      <p className="text-lg lg:text-xl text-gray-600 max-w-xl">Access premium AI tool,design assets,templates, and productivity <br /> software-all in one place.  Start creating faster today. <br />Explore Products
</p>

      {/* বাটন গ্রুপ */}
      <div className="flex items-center gap-4">
        {/* Explore Products বাটন - Figma কালার কোড */}
        <button className="btn bg-[#5500FF] hover:bg-[#4400CC] text-white rounded-full px-8 py-3 text-lg font-semibold border-none">
          Explore Products
        </button>

        {/* Watch Demo বাটন - আইকন সহ */}
        <button className="btn btn-ghost text-lg text-blue-800 border-blue-800 flex items-center gap-2 font-medium hover:bg-gray-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
          </svg>
          Watch Demo
        </button>
      </div>
    </div>

    {/* ডান দিকের ছবি অংশ */}
    <div className="flex-1 w-full flex justify-center lg:justify-end">
      {/* Figma থেকে এক্সপোর্ট করা ছবি এখানে ব্যবহার করুন */}
      <img src="./assets/banner.png" alt="" />
    </div>

  </div>
</header>

      {/* Main Section & Toggling */}
      <section className="container mx-auto py-10 px-4">
        <div className="flex justify-center mb-10 gap-4">
          <button onClick={() => setActiveTab('Product')} className={`btn px-10 ${activeTab === 'Product' ? 'btn-primary' : 'btn-outline'}`}>Product</button>
          <button onClick={() => setActiveTab('Cart')} className={`btn px-10 ${activeTab === 'Cart' ? 'btn-primary' : 'btn-outline'}`}>Cart ({cart.length})</button>
        </div>

        {activeTab === 'Product' ? (
          /* Product Grid (3 Column) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id} className="card bg-white shadow-xl hover:scale-105 transition-transform">
                <div className="card-body">
                  <div className="flex justify-between items-start">
                    <img src={product.icon} alt={product.name} className="w-12 h-12" />
                    <span className={`badge ${product.tagType}`}>{product.tag}</span>
                  </div>
                  <h2 className="card-title mt-4 text-2xl">{product.name}</h2>
                  <p className="text-gray-500">{product.description}</p>
                  <p className="text-xl font-bold mt-2">${product.price} <span className="text-sm font-normal">/{product.period}</span></p>
                  <div className="divider"></div>
                  <ul className="space-y-1 mb-4">
                    {product.features.map((f, i) => <li key={i} className="text-sm text-gray-600">✅ {f}</li>)}
                  </ul>
                  <button onClick={() => addToCart(product)} className="btn btn-primary w-full">Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Cart Section (1 Column) */
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Your Cart Items</h2>
            {cart.length === 0 ? (
              <p className="text-center py-10 text-gray-400">No products added yet.</p>
            ) : (
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-xl bg-gray-50">
                    <div className="flex items-center gap-4">
                      <img src={item.icon} alt="" className="w-10 h-10" />
                      <div>
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-sm text-purple-600">${item.price}</p>
                      </div>
                    </div>
                    <button onClick={() => removeProduct(item.id)} className="btn btn-error btn-sm text-white">Remove</button>
                  </div>
                ))}
                <div className="pt-6 border-t mt-6 flex justify-between items-center">
                  <p className="text-xl font-bold">Total: ${cart.reduce((sum, i) => sum + i.price, 0)}</p>
                  <button onClick={proceedCheckout} className="btn btn-success text-white">Proceed to Checkout</button>
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="footer p-10 bg-base-200 text-base-content mt-20">
        <div>
          <span className="footer-title">DigiTools</span> 
          <p>Supercharging your workflow since 2026.</p>
        </div> 
        <div>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
        </div>
      </footer>
    </div>
  );
};

export default App;