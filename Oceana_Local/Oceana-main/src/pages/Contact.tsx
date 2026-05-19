import { MapPin, Phone, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Oceana",
    "image": "https://oceana.sa/og-image.jpg",
    "@id": "https://oceana.sa",
    "url": "https://oceana.sa",
    "telephone": "057 096 2002",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6656 الملك عبد الله 2266",
      "addressLocality": "Ash Shati Al Gharbi, Dammam",
      "postalCode": "32412",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.444,
      "longitude": 50.126
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "02:00"
      }
    ]
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
      <Helmet>
        <title>Visit Us | Experience the Legacy by the Dammam Corniche</title>
        <meta name="description" content="Find us on the historic Dammam Corniche. Experience thirty years of culinary excellence where three cultures converge by the Arabian Gulf." />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <h1 className="font-serif text-5xl font-bold text-gold mb-12 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold text-white mb-4">Connect with the Legacy</h2>
          <p className="text-gray-300 leading-relaxed italic">
            For three decades, we have been the stage for Dammam's most cherished celebrations. Whether you are planning a corporate milestone or a private moment, our home on the Corniche is yours.
          </p>
          
          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-start gap-4 text-gray-300">
              <Phone className="text-burgundy shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-1">Phone</h3>
                <p>057 096 2002</p>
              </div>
            </div>
            <div className="flex items-start gap-4 text-gray-300">
              <Mail className="text-burgundy shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-1">Email</h3>
                <p>reservations@oceana.sa</p>
              </div>
            </div>
            <div className="flex items-start gap-4 text-gray-300">
              <MapPin className="text-burgundy shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-1">Our Stage</h3>
                <p>6656 الملك عبد الله 2266<br />حي الشاطئ الغربي، الدمام 32412<br />Saudi Arabia</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="font-bold text-white uppercase tracking-wide mb-6">Send a Message</h3>
          <form className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
            />
            <textarea 
              placeholder="Your Message" 
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
            ></textarea>
            <button 
              type="button"
              className="w-full bg-burgundy hover:bg-burgundy/90 text-white font-bold uppercase tracking-widest py-4 rounded-xl transition-colors mt-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
