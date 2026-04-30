import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const HOURS = [
  ["Mon", "10:00 AM — 9:00 PM"],
  ["Tue", "10:00 AM — 9:00 PM"],
  ["Wed", "10:00 AM — 9:00 PM"],
  ["Thu", "10:00 AM — 9:00 PM"],
  ["Fri", "10:00 AM — 10:00 PM"],
  ["Sat", "11:00 AM — 10:00 PM"],
  ["Sun", "11:00 AM — 8:00 PM"],
];

const MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.0!2d-96.5750!3d32.9707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNCwzMjUgTWlsZXMgUmQsIFNhY2hzZSwgVFggNzUwNDg!5e0!3m2!1sen!2sus!4v1700000000000";

export default function Location() {
  return (
    <section
      id="location"
      data-testid="location-section"
      className="relative bg-[#FDFBF7] py-24 md:py-40"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#3E5748] mb-6">
              ◦ 05 — Visit
            </p>
            <h2 className="font-display font-light text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] text-[#1A3627] mb-10">
              come say
              <br />
              <span className="italic font-extralight">hi.</span>
            </h2>

            <div className="space-y-5 mb-10">
              <a
                href="https://www.google.com/maps?q=4325+Miles+Rd+Suite+108+Sachse+TX+75048"
                target="_blank"
                rel="noreferrer"
                data-testid="location-address-link"
                data-cursor="hover"
                className="group flex items-start gap-4"
              >
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-[#1A3627]" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#3E5748] mb-1">
                    Address
                  </p>
                  <p className="font-display text-xl md:text-2xl text-[#1A3627] group-hover:text-[#D97736] transition-colors">
                    4325 Miles Rd, Suite 108<br />Sachse, TX 75048
                  </p>
                </div>
              </a>

              <a
                href="tel:+12145013231"
                data-testid="location-phone-link"
                data-cursor="hover"
                className="group flex items-start gap-4"
              >
                <Phone className="w-4 h-4 mt-1 shrink-0 text-[#1A3627]" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#3E5748] mb-1">
                    Call
                  </p>
                  <p className="font-display text-xl md:text-2xl text-[#1A3627] group-hover:text-[#D97736] transition-colors">
                    (214) 501-3231
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <Clock className="w-4 h-4 mt-1 shrink-0 text-[#1A3627]" />
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#3E5748] mb-3">
                    Hours
                  </p>
                  <ul className="space-y-1.5 max-w-xs">
                    {HOURS.map(([d, h]) => (
                      <li
                        key={d}
                        data-testid={`hours-${d.toLowerCase()}`}
                        className="flex items-baseline justify-between text-sm"
                      >
                        <span className="text-[#1A3627] font-medium w-12">{d}</span>
                        <span className="leader flex-1 mx-2 h-px text-[#1A3627]/30" />
                        <span className="text-[#3E5748]">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://pos.chowbus.com/online-ordering/store/Koala-Tea/14544?referrer=google_food_ordering"
                target="_blank"
                rel="noreferrer"
                data-testid="order-pickup-btn"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1A3627] text-[#FDFBF7] px-5 py-3 text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#D97736] transition-colors"
              >
                Order Pickup <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://pos.chowbus.com/online-ordering/store/Koala-Tea/14544?referrer=google_food_ordering&service_type=delivery"
                target="_blank"
                rel="noreferrer"
                data-testid="order-delivery-btn"
                data-cursor="hover"
                className="inline-flex items-center gap-2 rounded-full border border-[#1A3627] text-[#1A3627] px-5 py-3 text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#1A3627] hover:text-[#FDFBF7] transition-colors"
              >
                Order Delivery <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 relative rounded-2xl overflow-hidden border border-[#1A3627]/15 min-h-[420px] md:min-h-[600px]"
            data-testid="location-map"
          >
            <iframe
              title="Haus of Boba location"
              src={MAP}
              className="absolute inset-0 w-full h-full grayscale-[40%] contrast-[0.95]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 left-4 bg-[#FDFBF7] border border-[#1A3627]/15 rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-[#1A3627] flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#D97736]" /> Sachse, TX
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
