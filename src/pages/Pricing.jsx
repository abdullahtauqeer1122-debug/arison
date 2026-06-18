import { Check, X, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Pricing.css'

const packages = [
  {
    title: 'E-Commerce Website',
    price: 'PKR 10,000',
    desc: 'Perfect for local brands & retail stores trying to launch their digital sales journey.',
    features: [
      { text: 'Custom Design (5 Pages)', enabled: true },
      { text: 'E-Commerce integration (WooCommerce)', enabled: true },
      { text: 'Up to 50 Products Upload', enabled: true },
      { text: 'Payment Gateways & Shipping setup', enabled: true },
      { text: 'WhatsApp Order Integration', enabled: true },
      { text: 'Mobile Friendly & SEO Optimized', enabled: true },
      { text: '1 Month Maintenance Support', enabled: true },
      { text: 'SaaS App architecture', enabled: false },
      { text: 'Enterprise Dedicated Server VPS', enabled: false },
    ],
    cta: 'Start E-Commerce',
    featured: false,
  },
  {
    title: 'Business Website',
    price: 'PKR 15,000',
    desc: 'High-converting portfolio & corporate website to showcase your service offering.',
    features: [
      { text: 'Premium Custom Design (10 Pages)', enabled: true },
      { text: 'Service catalog / Lead Forms', enabled: true },
      { text: 'Testimonials, FAQ, Careers Page', enabled: true },
      { text: 'CMS Integration for Blog / Articles', enabled: true },
      { text: 'WhatsApp Chat & Call Integrations', enabled: true },
      { text: 'Mobile Friendly & SEO Optimized', enabled: true },
      { text: '2 Months Maintenance Support', enabled: true },
      { text: 'SaaS App architecture', enabled: false },
      { text: 'Enterprise Dedicated Server VPS', enabled: false },
    ],
    cta: 'Build Business Site',
    featured: true,
  },
  {
    title: 'Full Stack App',
    price: 'PKR 20,000 - 25,000',
    desc: 'Dynamic custom web app tailored to automate your internal systems or workflows.',
    features: [
      { text: 'Modern frontend React + Node.js', enabled: true },
      { text: 'Database Engineering (MongoDB/SQL)', enabled: true },
      { text: 'Secure JWT Auth & Roles Management', enabled: true },
      { text: 'Admin Dashboard with Full CRUD', enabled: true },
      { text: 'API Integrations & Payment Gateway', enabled: true },
      { text: 'Mobile Friendly & SEO Optimized', enabled: true },
      { text: '3 Months Maintenance Support', enabled: true },
      { text: 'SaaS App architecture', enabled: true },
      { text: 'Enterprise Dedicated Server VPS', enabled: false },
    ],
    cta: 'Build Custom App',
    featured: false,
  },
  {
    title: 'Custom SaaS & Enterprise',
    price: 'Custom Quote',
    desc: 'Scaling cloud platform or complex software systems ready for thousands of active users.',
    features: [
      { text: 'Custom Microservice / SaaS Setup', enabled: true },
      { text: 'Multi-tenant database architectures', enabled: true },
      { text: 'Automated billing / stripe subscription', enabled: true },
      { text: 'Admin Portal, analytics dashboard', enabled: true },
      { text: 'AWS/Cloud integration & serverless', enabled: true },
      { text: 'Mobile Friendly & SEO Optimized', enabled: true },
      { text: '6 Months Maintenance Support', enabled: true },
      { text: 'SaaS App architecture', enabled: true },
      { text: 'Enterprise Dedicated Server VPS', enabled: true },
    ],
    cta: 'Contact for Quote',
    featured: false,
  },
]

const comparison = {
  features: [
    { name: 'Number of Pages', ecommerce: 'Up to 5', business: 'Up to 10', fullstack: 'Unlimited', saas: 'Unlimited' },
    { name: 'Database Setup', ecommerce: 'MySQL (Standard)', business: 'No database or static CMS', fullstack: 'Custom MongoDB/SQL', saas: 'Multi-tenant architecture' },
    { name: 'User Authentication', ecommerce: 'Standard Customer login', business: 'None', fullstack: 'JWT Roles-based Login', saas: 'High-security multi-tenant login' },
    { name: 'Payment Gateways', ecommerce: 'COD, Bank, EasyPaisa', business: 'None', fullstack: 'Stripe, PayPal, Local APIs', saas: 'Stripe Subscriptions & Recurring' },
    { name: 'Admin Dashboard', ecommerce: 'WooCommerce Dashboard', business: 'WP/CMS Standard', fullstack: 'Fully Custom Admin CMS', saas: 'Premium Business Panel + Metrics' },
    { name: 'WhatsApp & Social Integration', ecommerce: 'Yes', business: 'Yes', fullstack: 'Yes', saas: 'Yes' },
    { name: 'Mobile responsiveness', ecommerce: 'Yes', business: 'Yes', fullstack: 'Yes', saas: 'Yes' },
    { name: 'Tech Stack Options', ecommerce: 'WordPress/Shopify', business: 'HTML/CSS/Vite/NextJS', fullstack: 'MERN / React + Node + SQL', saas: 'NextJS, React, Node, AWS/GCP' },
    { name: 'Monthly Maintenance Support', ecommerce: '1 Month', business: '2 Months', fullstack: '3 Months', saas: '6 Months' },
  ]
}

export default function Pricing() {
  return (
    <div className="pricing-page">
      <div className="pricing-bg-glow" aria-hidden="true" />
      <div className="container">
        
        <div className="pricing-header">
          <span className="label text-accent">Transparent Pricing</span>
          <h1 className="heading-xl" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            Investment Packages Custom Fit For Your Growth
          </h1>
          <p className="body-lg text-secondary">
            Get premium engineering and beautiful designs with transparent, competitive rates in Pakistan.
          </p>
        </div>

        <div className="pricing-grid">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={pkg.title}
              className={`pricing-card${pkg.featured ? ' featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="pricing-card-header">
                <div className="pricing-card-title">{pkg.title}</div>
                <div className="pricing-card-price">
                  {pkg.price}
                  {pkg.price !== 'Custom Quote' && <span>/project</span>}
                </div>
                <p className="pricing-card-desc">{pkg.desc}</p>
              </div>

              <div className="pricing-card-features">
                {pkg.features.map((feat, fIdx) => (
                  <div key={fIdx} className={`pricing-feature-item${!feat.enabled ? ' disabled' : ''}`}>
                    {feat.enabled ? <Check size={16} /> : <X size={16} />}
                    <span>{feat.text}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/contact" 
                className={`btn ${pkg.featured ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {pkg.cta} <ArrowRight size={16} style={{ marginLeft: '6px' }} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table Section */}
        <div className="pricing-compare-section">
          <h2 className="pricing-compare-title heading-lg">Compare Plan Features</h2>
          <div className="compare-table-wrapper">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>E-Commerce</th>
                  <th>Business Website</th>
                  <th>Full Stack App</th>
                  <th>Custom SaaS</th>
                </tr>
              </thead>
              <tbody>
                {comparison.features.map((feat, idx) => (
                  <tr key={idx}>
                    <td className="compare-row-header">{feat.name}</td>
                    <td><span className="compare-feature-name">{feat.ecommerce}</span></td>
                    <td><span className="compare-feature-name">{feat.business}</span></td>
                    <td><span className="compare-feature-name">{feat.fullstack}</span></td>
                    <td><span className="compare-feature-name">{feat.saas}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}
