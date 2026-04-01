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

   
    
    <div className="flex-1 text-left flex flex-col items-start lg:items-start space-y-6">
      <div className="flex items-center gap-2 bg-purple-100 border border-purple-100 rounded-full px-4 py-1.5 w-fit mb-4">
  <span className="w-2.5 h-2.5 bg-purple-600 rounded-full shadow-[0_0_10px_4px_rgba(168,85,247,0.7)]"></span>
  <span className="text-purple-700 text-xs font-semibold">
    New: AI-Powered Tools Available
  </span>
</div>

      <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-black">
        Supercharge Your <br />
        Digital Workflow
      </h1>
      <p className="text-lg lg:text-xl text-gray-600 max-w-xl">Access premium AI tool,design assets,templates, and productivity <br /> software-all in one place.  Start creating faster today. <br />Explore Products
</p>

      
      <div className="flex items-center gap-4">
        
        <button className="btn bg-[#5500FF] hover:bg-[#4400CC] text-white rounded-full px-8 py-3 text-lg font-semibold border-none">
          Explore Products
        </button>

        
        <button className="btn btn-ghost text-lg text-blue-800 border-blue-800 flex items-center gap-2 font-medium hover:bg-gray-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
          </svg>
          Watch Demo
        </button>
      </div>
    </div>

    
    <div className="flex-1 w-full flex justify-center lg:justify-end">
     
      <img src="./assets/banner.png" alt="" />
    </div>

  </div>
</header>

<div className="bg-blue-600 py-10 px-6">
  <div className="container mx-auto flex flex-col md:flex-row justify-around items-center text-white gap-8 md:gap-0">
    
    
    <div className="text-center">
      <h2 className="text-4xl lg:text-5xl font-bold">50K+</h2>
      <p className="text-blue-100 mt-2 text-lg">Active Users</p>
    </div>

   
    <div className="hidden md:block h-16 w-[1px] bg-blue-400"></div>

    
    <div className="text-center">
      <h2 className="text-4xl lg:text-5xl font-bold">200+</h2>
      <p className="text-blue-100 mt-2 text-lg">Premium Tools</p>
    </div>

   
    <div className="hidden md:block h-16 w-[1px] bg-blue-400"></div>

    
    <div className="text-center">
      <h2 className="text-4xl lg:text-5xl font-bold">4.9</h2>
      <p className="text-blue-100 mt-2 text-lg">Rating</p>
    </div>

  </div>
</div>

      {/* Main Section & Toggling */}
      <section className="container mx-auto py-10 px-4">
       
  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">
      Premium Digital Tools
    </h2>
    <p className="text-gray-500 max-w-2xl mx-auto">
      Choose from our curated collection of premium digital products designed 
      to boost your productivity and creativity.
    </p>
  </div>
   <div className="flex justify-center mb-10 gap-4">
          <button onClick={() => setActiveTab('Product')} className={`btn px-10 ${activeTab === 'Product' ? 'btn-primary' : 'btn-outline'}`}>Products</button>
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


      {/* --- 1. Get Started Section --- */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-2">Get Started In 3 Steps</h2>
    <p className="text-gray-500 mb-12">Start using premium digital tools in minutes, not hours.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Step 1 */}
      <div className="relative bg-white p-8 rounded-2xl shadow-sm border flex flex-col items-center">
        <span className="absolute -top-3 right-8 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">01</span>
        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
           <img src="./src/assets/user.png" alt="" className="w-8 h-8" />
        </div>
        <h3 className="font-bold text-lg mb-2">Create Account</h3>
        <p className="text-gray-500 text-sm">Sign up for free in seconds. No credit card required.</p>
      </div>

      {/* Step 2 */}
      <div className="relative bg-white p-8 rounded-2xl shadow-sm border flex flex-col items-center">
        <span className="absolute -top-3 right-8 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">02</span>
        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
           <img src="./src/assets/products.png" alt="" className="w-8 h-8" />
        </div>
        <h3 className="font-bold text-lg mb-2">Choose Products</h3>
        <p className="text-gray-500 text-sm">Browse our catalog and select the tools that fit your needs.</p>
      </div>

      {/* Step 3 */}
      <div className="relative bg-white p-8 rounded-2xl shadow-sm border flex flex-col items-center">
        <span className="absolute -top-3 right-8 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">03</span>
        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
           <img src="./src/assets/rocket.png" alt="" className="w-8 h-8" />
        </div>
        <h3 className="font-bold text-lg mb-2">Start Creating</h3>
        <p className="text-gray-500 text-sm">Download and start using your premium tools immediately.</p>
      </div>
    </div>
  </div>
</section>

{/* --- 2. Pricing Section (Highlighted Middle Card) --- */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-2">Simple, Transparent Pricing</h2>
    <p className="text-gray-500 mb-12">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      {/* Starter */}
      <div className="bg-gray-50 p-8 rounded-2xl border text-left">
        <h3 className="font-bold text-xl mb-1">Starter</h3>
        <p className="text-gray-400 text-sm mb-4">Perfect for getting started</p>
        <div className="text-3xl font-bold mb-6">$0<span className="text-sm text-gray-400">/Month</span></div>
        <ul className="space-y-3 mb-8 text-sm text-gray-600">
          <li>✔ Access to 10 free tools</li>
          <li>✔ Basic templates</li>
          <li>✔ Community support</li>
        </ul>
        <button className="w-full py-3 bg-purple-600 text-white rounded-xl font-semibold">Get Started Free</button>
      </div>

      {/* Pro (Highlighted) */}
      <div className="bg-purple-600 p-10 rounded-2xl shadow-2xl text-left text-white transform scale-105 relative">
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full">Most Popular</span>
        <h3 className="font-bold text-xl mb-1">Pro</h3>
        <p className="text-purple-200 text-sm mb-4">Best for professionals</p>
        <div className="text-3xl font-bold mb-6">$29<span className="text-sm text-purple-200">/Month</span></div>
        <ul className="space-y-3 mb-8 text-sm text-purple-100">
          <li>✔ Access to all premium tools</li>
          <li>✔ Unlimited templates</li>
          <li>✔ Priority support</li>
          <li>✔ Advanced analytics</li>
        </ul>
        <button className="w-full py-3 bg-white text-purple-600 rounded-xl font-bold hover:bg-gray-100 transition-colors">Start Pro Trial</button>
      </div>

      {/* Enterprise */}
      <div className="bg-gray-50 p-8 rounded-2xl border text-left">
        <h3 className="font-bold text-xl mb-1">Enterprise</h3>
        <p className="text-gray-400 text-sm mb-4">For teams and businesses</p>
        <div className="text-3xl font-bold mb-6">$99<span className="text-sm text-gray-400">/Month</span></div>
        <ul className="space-y-3 mb-8 text-sm text-gray-600">
          <li>✔ Everything in Pro</li>
          <li>✔ Custom integrations</li>
          <li>✔ Dedicated support</li>
          <li>✔ SLA guarantee</li>
        </ul>
        <button className="w-full py-3 border border-purple-600 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-colors">Contact Sales</button>
      </div>
    </div>
  </div>
</section>

      



{/* --- CTA Section (Ready To Transform) --- */}
<div className="bg-gradient-to-r from-blue-500 to-purple-500 py-16 px-4 text-center text-white">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready To Transform Your Workflow?</h2>
  <p className="text-blue-50 mb-8 max-w-2xl mx-auto opacity-90">
    Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
  </p>
  <div className="flex flex-wrap justify-center gap-4">
    <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-all">
      Explore Products
    </button>
    <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all">
      View Pricing
    </button>
  </div>
  <p className="text-xs mt-6 opacity-70">14-day free trial • No credit card required • Cancel anytime</p>
</div>

{/* --- Main Footer Section --- */}
<footer className="bg-[#0a0c10] text-gray-400 py-16">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
      
      {/* Brand & Description */}
      <div className="lg:col-span-2">
        <h2 className="text-white text-2xl font-bold mb-4">DigiTools</h2>
        <p className="text-sm leading-relaxed max-w-xs">
          Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
        </p>
      </div>

      {/* Product Links */}
      <div>
        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Product</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
        </ul>
      </div>

      {/* Company Links */}
      <div>
        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
        </ul>
      </div>

      {/* Resources & Social */}
      <div>
        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
        <ul className="space-y-2 text-sm mb-6">
          <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
        </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Social Links</h4>
        <div className="flex gap-3">
          {['instagram', 'facebook', 'twitter'].map((social) => (
            <div key={social} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition-all">
              <span className="text-white text-[10px]">{social[0].toUpperCase()}</span>
            </div>
          ))}
        </div>
        </div>
      
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
      <p>© 2026 DigiTools. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
        <a href="#" className="hover:text-white">Cookies</a>
      </div>
    </div>
  </div>
</footer>







    </div>
  );
};

export default App;