import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="p-5 md:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-gray-800">
        Privacy Policy
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">1. Introduction</h2>
          <p className="text-gray-600">
            Welcome to Shaadi Tamil. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our website and services.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">2. Information We Collect</h2>
          <p className="text-gray-600">
            <strong>Personal Information:</strong> We collect personal information that you voluntarily provide to us when you register, update your profile, or use our services. This may include your name, contact details, date of birth, gender, religion, community, and other relevant details.
          </p>
          <p className="text-gray-600">
            <strong>Technical Data:</strong> We may collect information about your device, browsing actions, and usage patterns. This includes IP addresses, browser types, and operating systems.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">3. How We Use Your Information</h2>
          <p className="text-gray-600">
            <strong>Service Provision:</strong> We use your information to provide, maintain, and improve our services, including matching you with potential partners.
          </p>
          <p className="text-gray-600">
            <strong>Communication:</strong> We may use your contact information to send you updates, newsletters, and promotional materials related to our services.
          </p>
          <p className="text-gray-600">
            <strong>Personalization:</strong> We use your information to personalize your experience on our website, including displaying relevant content and advertisements.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">4. Data Sharing and Disclosure</h2>
          <p className="text-gray-600">
            <strong>Third-Party Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our website and delivering services. These providers are contractually obligated to protect your information.
          </p>
          <p className="text-gray-600">
            <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">5. Data Security</h2>
          <p className="text-gray-600">
            We implement reasonable security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">6. Your Rights</h2>
          <p className="text-gray-600">
            <strong>Access and Correction:</strong> You have the right to access and correct your personal information held by us.
          </p>
          <p className="text-gray-600">
            <strong>Opt-Out:</strong> You may opt-out of receiving promotional communications from us at any time by following the unsubscribe instructions provided in those communications.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">7. Changes to This Privacy Policy</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our services after the changes indicates your acceptance of the revised Privacy Policy.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-700">8. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
            <a href="mailto:shaadiTamil@gmail.com" className="text-blue-500 underline">shaadiTamil@gmail.com</a> or Shaadi Tamil Headquarters, 2-78, Chennai-123456.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
