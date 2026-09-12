import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Truck,
} from "lucide-react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <main className="bg-[#F7F3E7] text-[#24382E]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#063C2D]">

        <img
          src="/about-us-banner.png"
          alt="Indian spices"
          className="absolute inset-0 h-full w-full object-cover "
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#063C2D] via-[#063C2D]/90 to-[#063C2D]/55" />

        <div className="relative z-10 mx-auto max-w-[1250px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="max-w-[700px]">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#E9B83F]" />

              <span className="text-[10px] font-bold uppercase tracking-[4px] text-[#E9B83F]">
                Get In Touch
              </span>
            </div>

            <h1 className="font-serif text-5xl font-bold leading-tight text-white sm:text-6xl">
              Contact Us
            </h1>

            <p className="mt-5 max-w-[620px] text-sm leading-7 text-white/70 sm:text-base">
              Have a question about our spices, want to place a bulk
              order or discuss a partnership? Our team is here to help.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 bg-[#E9B83F] px-6 py-3.5 text-[10px] font-extrabold uppercase tracking-wide text-[#173025] transition hover:bg-[#F5CC58]"
              >
                Send Enquiry
                <ArrowRight size={15} />
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 border border-white/30 bg-white/5 px-6 py-3.5 text-[10px] font-extrabold uppercase tracking-wide text-white transition hover:bg-white/10"
              >
                WhatsApp Us
                <MessageCircle size={15} />
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT CARDS
      ===================================================== */}
      <section className="relative z-20 mx-auto -mt-8 max-w-[1150px] px-5 sm:px-8 lg:px-0">

        <div className="grid overflow-hidden border border-[#DDD5C2] bg-[#FFFDF7] shadow-xl sm:grid-cols-2 lg:grid-cols-4">

          {/* Phone */}
          <a
            href="tel:+919876543210"
            className="group border-b border-[#DDD5C2] p-6 transition hover:bg-[#F3EFE2] sm:border-r lg:border-b-0"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF1E9] text-[#103F2C]">
              <Phone size={18} />
            </div>

            <p className="mt-5 text-[9px] font-bold uppercase tracking-[2px] text-[#8B938C]">
              Call Us
            </p>

            <p className="mt-1 font-serif text-lg font-bold text-[#103F2C]">
              +91 98765 43210
            </p>

          </a>


          {/* Email */}
          <a
            href="mailto:hello@maatadka.com"
            className="group border-b border-[#DDD5C2] p-6 transition hover:bg-[#F3EFE2] lg:border-b-0 lg:border-r"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F7EBD0] text-[#9D211D]">
              <Mail size={18} />
            </div>

            <p className="mt-5 text-[9px] font-bold uppercase tracking-[2px] text-[#8B938C]">
              Email Us
            </p>

            <p className="mt-1 break-all font-serif text-lg font-bold text-[#103F2C]">
              hello@maatadka.com
            </p>

          </a>


          {/* Location */}
          <div className="border-b border-[#DDD5C2] p-6 transition hover:bg-[#F3EFE2] sm:border-r lg:border-b-0">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF1E9] text-[#103F2C]">
              <MapPin size={18} />
            </div>

            <p className="mt-5 text-[9px] font-bold uppercase tracking-[2px] text-[#8B938C]">
              Location
            </p>

            <p className="mt-1 font-serif text-lg font-bold text-[#103F2C]">
              India
            </p>

          </div>


          {/* Hours */}
          <div className="p-6 transition hover:bg-[#F3EFE2]">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F7EBD0] text-[#9D211D]">
              <Clock3 size={18} />
            </div>

            <p className="mt-5 text-[9px] font-bold uppercase tracking-[2px] text-[#8B938C]">
              Working Hours
            </p>

            <p className="mt-1 font-serif text-lg font-bold text-[#103F2C]">
              10 AM – 6 PM
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTACT AREA
      ===================================================== */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

        <div className="mx-auto grid max-w-[1150px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">


          {/* LEFT CONTENT */}
          <div>

            <div className="text-[10px] font-extrabold uppercase tracking-[4px] text-[#9D211D]">
              Let's Talk
            </div>

            <h2 className="mt-3 max-w-[480px] font-serif text-4xl font-bold leading-tight text-[#103F2C] sm:text-5xl">
              We'd Love To Hear From You
            </h2>

            <p className="mt-5 max-w-[500px] text-sm leading-7 text-[#707A72]">
              Whether you're a home cook, retailer, distributor or
              business partner, reach out to Maa Tadka and our team
              will get back to you as soon as possible.
            </p>


            {/* Business enquiry */}
            <div className="mt-8 border border-[#DCD5C3] bg-[#FFFDF7] p-6">

              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#103F2C] text-white">
                  <Truck size={18} />
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-[#103F2C]">
                    Bulk & Business Orders
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#737D75]">
                    Looking for bulk quantities, retail distribution,
                    private label or business partnerships?
                  </p>

                  <a
                    href="mailto:business@maatadka.com"
                    className="mt-4 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-wide text-[#9D211D]"
                  >
                    Business Enquiry
                    <ArrowRight size={13} />
                  </a>
                </div>

              </div>

            </div>


            {/* Trust points */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="flex gap-3">
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-[#103F2C]"
                />

                <div>
                  <p className="text-xs font-bold text-[#103F2C]">
                    Quick Response
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-[#7A827C]">
                    We aim to respond to enquiries promptly.
                  </p>
                </div>
              </div>


              <div className="flex gap-3">
                <ShieldCheck
                  size={19}
                  className="mt-0.5 shrink-0 text-[#103F2C]"
                />

                <div>
                  <p className="text-xs font-bold text-[#103F2C]">
                    Genuine Support
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-[#7A827C]">
                    Get help directly from the Maa Tadka team.
                  </p>
                </div>
              </div>

            </div>


            {/* Social */}
            <div className="mt-10 border-t border-[#DDD6C4] pt-6">

              <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#8B938C]">
                Stay Connected
              </p>

              <div className="mt-4 flex gap-2">

                {["Instagram", "Facebook", "YouTube"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="border border-[#D5CEBD] bg-[#FFFDF7] px-4 py-2 text-[9px] font-bold uppercase tracking-wide text-[#103F2C] transition hover:bg-[#103F2C] hover:text-white"
                    >
                      {social}
                    </a>
                  )
                )}

              </div>

            </div>

          </div>


          {/* =====================================================
              FORM
          ===================================================== */}
          <div
            id="contact-form"
            className="border border-[#DDD5C2] bg-[#FFFDF7] p-6 shadow-sm sm:p-8 lg:p-10"
          >

            <div className="border-b border-[#E1DAC9] pb-6">

              <p className="text-[9px] font-bold uppercase tracking-[3px] text-[#9D211D]">
                Send Us A Message
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold text-[#103F2C]">
                How Can We Help?
              </h2>

              <p className="mt-2 text-xs leading-6 text-[#7A827C]">
                Fill in the form and our team will get in touch with you.
              </p>

            </div>


            {submitted ? (

              /* SUCCESS MESSAGE */
              <div className="flex min-h-[430px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F1E8] text-[#103F2C]">
                  <CheckCircle2 size={30} />
                </div>

                <h3 className="mt-6 font-serif text-2xl font-bold text-[#103F2C]">
                  Message Sent!
                </h3>

                <p className="mt-3 max-w-[350px] text-xs leading-6 text-[#737D75]">
                  Thank you for contacting Maa Tadka. Our team will
                  get back to you shortly.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[10px] font-extrabold uppercase tracking-wide text-[#9D211D]"
                >
                  Send Another Message
                </button>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="pt-7"
              >

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-[9px] font-bold uppercase tracking-[1.5px] text-[#45564B]">
                      Your Name *
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="Enter your name"
                      className="h-12 w-full border border-[#D9D2C0] bg-white px-4 text-xs outline-none transition placeholder:text-[#A4A9A4] focus:border-[#103F2C] focus:ring-1 focus:ring-[#103F2C]"
                    />
                  </div>


                  <div>
                    <label className="mb-2 block text-[9px] font-bold uppercase tracking-[1.5px] text-[#45564B]">
                      Email Address *
                    </label>

                    <input
                      required
                      type="email"
                      placeholder="Enter your email"
                      className="h-12 w-full border border-[#D9D2C0] bg-white px-4 text-xs outline-none transition placeholder:text-[#A4A9A4] focus:border-[#103F2C] focus:ring-1 focus:ring-[#103F2C]"
                    />
                  </div>

                </div>


                {/* Phone */}
                <div className="mt-5">

                  <label className="mb-2 block text-[9px] font-bold uppercase tracking-[1.5px] text-[#45564B]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="h-12 w-full border border-[#D9D2C0] bg-white px-4 text-xs outline-none transition placeholder:text-[#A4A9A4] focus:border-[#103F2C] focus:ring-1 focus:ring-[#103F2C]"
                  />

                </div>


                {/* Subject */}
                <div className="mt-5">

                  <label className="mb-2 block text-[9px] font-bold uppercase tracking-[1.5px] text-[#45564B]">
                    Subject *
                  </label>

                  <select
                    required
                    defaultValue=""
                    className="h-12 w-full border border-[#D9D2C0] bg-white px-4 text-xs text-[#56635A] outline-none focus:border-[#103F2C] focus:ring-1 focus:ring-[#103F2C]"
                  >

                    <option value="" disabled>
                      Select an enquiry type
                    </option>

                    <option>
                      Product Information
                    </option>

                    <option>
                      Bulk Order
                    </option>

                    <option>
                      Distribution
                    </option>

                    <option>
                      Partnership
                    </option>

                    <option>
                      General Enquiry
                    </option>

                  </select>

                </div>


                {/* Message */}
                <div className="mt-5">

                  <label className="mb-2 block text-[9px] font-bold uppercase tracking-[1.5px] text-[#45564B]">
                    Your Message *
                  </label>

                  <textarea
                    required
                    rows="5"
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none border border-[#D9D2C0] bg-white px-4 py-3 text-xs leading-6 outline-none transition placeholder:text-[#A4A9A4] focus:border-[#103F2C] focus:ring-1 focus:ring-[#103F2C]"
                  />

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="mt-5 inline-flex w-full items-center justify-center gap-3 bg-[#103F2C] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[1px] text-white transition hover:bg-[#9D211D]"
                >
                  Send Message
                  <Send size={14} />
                </button>


                <p className="mt-4 text-center text-[9px] text-[#929891]">
                  Your information is safe with us.
                </p>

              </form>

            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          MAP / LOCATION
      ===================================================== */}
      <section className="border-t border-[#DED7C5] bg-[#FFFDF7] px-5 py-16 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-[1150px]">

          <div className="grid overflow-hidden border border-[#DDD5C2] lg:grid-cols-[0.8fr_1.2fr]">

            {/* Location information */}
            <div className="bg-[#103F2C] p-8 text-white sm:p-10">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E9B83F] text-[#103F2C]">
                <MapPin size={19} />
              </div>

              <p className="mt-7 text-[9px] font-bold uppercase tracking-[3px] text-[#E9B83F]">
                Our Location
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold">
                Maa Tadka
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/60">
                India
                <br />
                Serving authentic spices across India.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">

                <div className="flex items-center gap-3">
                  <Clock3 size={17} className="text-[#E9B83F]" />

                  <div>
                    <p className="text-xs font-bold">
                      Monday – Saturday
                    </p>

                    <p className="mt-1 text-[10px] text-white/50">
                      10:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>

              </div>

            </div>


            {/* Map placeholder */}
            <div className="relative min-h-[320px] bg-[#E8E2D4]">

              <img
                src="https://images.unsplash.com/photo-1524666041070-9c876415f705?auto=format&fit=crop&w=1200&q=80"
                alt="India location"
                className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale"
              />

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="bg-[#FFFDF7] p-5 text-center shadow-xl">

                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#9D211D] text-white">
                    <MapPin size={21} />
                  </div>

                  <p className="mt-3 font-serif text-lg font-bold text-[#103F2C]">
                    Maa Tadka
                  </p>

                  <p className="mt-1 text-[10px] text-[#788179]">
                    India
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}
      <section className="bg-[#9D211D] px-5 py-14 text-center text-white sm:px-8">

        <div className="mx-auto max-w-[750px]">

          <p className="text-[9px] font-bold uppercase tracking-[4px] text-[#F5D36A]">
            Maa Tadka
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
            Let's Bring More Flavour To Your Kitchen
          </h2>

          <p className="mx-auto mt-4 max-w-[550px] text-sm leading-6 text-white/70">
            Questions, feedback or just want to say hello?
            We're always happy to hear from you.
          </p>

          <a
            href="mailto:hello@maatadka.com"
            className="mt-7 inline-flex items-center gap-3 bg-[#E9B83F] px-7 py-3.5 text-[10px] font-extrabold uppercase tracking-wide text-[#173025] transition hover:bg-[#F5CC58]"
          >
            Email Us
            <Mail size={14} />
          </a>

        </div>

      </section>

    </main>
  );
}

export default Contact;