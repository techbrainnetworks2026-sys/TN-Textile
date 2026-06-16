import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Products = () => {
  const productsList = [
    {
      title: "Sustainable Fashion Design Software",
      desc: "Eco-conscious design tools for modern fashion.",
      image: "public/images/product1.jpg",
    },
    {
      title: "Textile Production Process Optimization Software",
      desc: "Streamline manufacturing workflows with AI.",
      image: "public/images/product2.jpg",
    },
    {
      title: "Quality Control & Traceability Systems",
      desc: "End-to-end tracking for textile assurance.",
      image: "public/images/product3.jpg",
    },
    {
      title: "Apparel Design & Pattern Making Software",
      desc: "Precision tools for digital tailoring.",
      image: "public/images/product4.jpg",
    },
    {
      title: "Digital Textile Printing Tools",
      desc: "High-fidelity printing management solutions.",
      image: "public/images/product5.jpg",
    },
    {
      title: "Textile Recycling Management Systems",
      desc: "Circular economy software for textiles.",
      image: "public/images/product6.jpg",
    },
    {
      title: "Supply Chain Visibility Platforms",
      desc: "Real-time transparency across networks.",
      image: "public/images/product7.jpg",
    },
    {
      title: "Environmental Impact Assessment Software",
      desc: "Measure and reduce ecological footprint.",
      image: "public/images/product8.jpg",
    },
    {
      title: "Inventory Management for Textiles",
      desc: "Smart tracking for fabrics and garments.",
      image: "public/images/product9.jpg",
    },
    {
      title: "Fashion E-commerce & Virtual Fitting Rooms",
      desc: "Immersive AR retail experiences.",
      image: "public/images/product10.jpg",
    },
    {
      title: "Material Traceability Software",
      desc: "Blockchain-backed fabric tracking.",
      image: "public/images/product11.jpg",
    },
    {
      title: "Sustainable Supply Chain Management",
      desc: "Optimize logistics for green operations.",
      image: "public/images/product12.jpg",
    },
    {
      title: "CAD Software for Textile Designers",
      desc: "Advanced drafting for intricate patterns.",
      image: "public/images/product13.jpg",
    },
    {
      title: "Textile Chemical Compliance Software",
      desc: "Ensure global safety standards.",
      image: "public/images/product14.jpg",
    },
    {
      title: "Apparel Production Scheduling Tools",
      desc: "Dynamic timeline management.",
      image: "public/images/product15.jpg",
    },
    {
      title: "RFID Textile Tracking",
      desc: "Next-gen asset location services.",
      image: "public/images/product16.jpg",
    },
    {
      title: "Textile Waste Reduction Software",
      desc: "Analytics for lean manufacturing.",
      image: "public/images/product17.jpg",
    },
    {
      title: "Apparel Manufacturing ERP Systems",
      desc: "Enterprise resource planning for fashion.",
      image: "public/images/product18.jpg",
    },
    {
      title: "Virtual Sampling & 3D Prototyping",
      desc: "Reduce physical waste with digital twins.",
      image: "public/images/product19.jpg",
    },
    {
      title: "AI-Powered Trend Forecasting Tools",
      desc: "Data-driven insights for future collections.",
      image: "public/images/product20.jpg",
    },
  ];

  return (
    <section
      id="products"
      className="py-24 bg-indigo-950 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-300 uppercase tracking-widest mb-2">
            Our Solutions
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Premium Textile Products
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsList.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group cursor-pointer flex flex-col"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-lg font-semibold mb-2">
                  {product.title}
                </h4>

                <p className="text-indigo-200 text-sm mb-6 flex-grow">
                  {product.desc}
                </p>

                <button className="text-sm font-medium text-indigo-300 flex items-center group-hover:text-white transition-colors">
                  Learn More
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;