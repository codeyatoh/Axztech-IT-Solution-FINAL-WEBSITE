import React, { useState, useEffect } from 'react';
import styles from './PricingSelection.module.css';
import PricingCard from '../PricingCard/PricingCard';
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const PricingSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3);
      else if (window.innerWidth >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const pricingPlans = [
    {
      title: "Starter",
      subtitle: "Micro Business", 
      price: "₱1,499",
      period: "/month",
      description: "Small local businesses or individuals just starting to build their digital presence.",
      features: [
        "Limited Access",
        "Email support",
        "Small local shops trying to go online affordably"
      ],
      color: "blue"
    },
    {
      title: "Growth",
      subtitle: "Small Business",
      price: "₱4,999",
      period: "/month", 
      description: "Small businesses looking to expand their online presence and operations.",
      features: [
        "Expanded Features",
        "Access to advanced SSP modules",
        "Ongoing technical support and updates",
        "Growing online sellers and service providers"
      ],
      color: "purple"
    },
    {
      title: "Pro",
      subtitle: "",
      price: "Contact Us",
      period: "",
      description: "Custom enterprise solutions with tailored features, integrations, and dedicated support. Contact us for a personalized quote that fits your business needs.",
      features: [
        "All SSP modules and advanced features",
        "Dedicated technical support and updates",
        "Business analytics and financial tracking",
        "Custom modules, integrations, and scalability"
      ],
      color: "green"
    },
    {
      title: "Website Setup",
      subtitle: "Customization Fee",
      price: "₱50,000",
      period: "/one-time",
      description: "A one-time professional service fee to build, design, and customize your business website and SSP platform.",
      features: [
        "Professional website design",
        "Custom branding",
        "Platform setup and configuration",
        "Initial training and support"
      ],
      color: "orange"
    },
    {
      title: "Add-on Services",
      subtitle: "Custom Solutions",
      price: "Based on",
      period: " requirements",
      description: "Custom modules, integrations, and marketing support tailored to your specific business needs.",
      features: [
        "Custom module development",
        "Third-party integrations",
        "Marketing support services",
        "Advanced analytics setup"
      ],
      color: "blue"
    },
    {
      title: "Store Listing",
      subtitle: "HanapShops",
      price: "₱799",
      period: "/year",
      description: "Placement fee and business profile setup for Non-SSP Members on the HanapShops platform.",
      features: [
        "Business profile listing",
        "Store visibility on HanapShops",
        "Basic analytics",
        "Customer inquiries management"
      ],
      color: "purple"
    }
  ];

  const maxIndex = pricingPlans.length - cardsPerView;

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? maxIndex : prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => prevIndex === maxIndex ? 0 : prevIndex + 1);
  };

  const visibleCards = pricingPlans.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <div className={styles.pricingSectionWrapper} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, type: 'tween' }}>
      <div className={styles.pricingSection} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: 0.1, type: 'tween' }}>
        <div className={styles.pricingHeader} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: 0.2, type: 'tween' }}>
          <h1 className={styles.title}>SSP Pricing Plans</h1>
          <p className={styles.subtitle} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: 0.3, type: 'tween' }}>Choose the plan that best fits your business needs and budget</p>
        </div>
        <div className={styles.carouselContainer} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: 0.4, type: 'tween' }}>
          <div className={styles.navButtonsTop}>
            <button 
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={handlePrevious}
            >
              <ChevronLeftIcon size={24} />
            </button>
            <button 
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={handleNext}
            >
              <ChevronRightIcon size={24} />
            </button>
          </div>
          <div className={styles.pricingCardsContainer}>
            {visibleCards.map((plan, index) => (
              <div
                key={currentIndex + index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.13, type: 'tween' }}
              >
                <PricingCard 
                  title={plan.title}
                  subtitle={plan.subtitle}
                  price={plan.price}
                  period={plan.period}
                  description={plan.description}
                  features={plan.features}
                  isPopular={false}
                  color={plan.color}
                  icon={CheckIcon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;