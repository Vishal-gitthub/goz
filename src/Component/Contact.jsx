import React from 'react'
import ContactHeroBg from "../Images/contact page images/gold-diamond-jewelry.jpg"
const Contact = () => {
  return (
    <div>
      <div
        className="relative flex justify-center items-center bg-cover bg-no-repeat bg-center h-64 sm:h-80 md:h-96"
        style={{ backgroundImage: `url(${ContactHeroBg})` }}
      >
        <div className="absolute inset-0 flex justify-center items-center bg-black/40">
          <h1 className="px-4 font-bold text-white text-3xl sm:text-4xl md:text-5xl text-center">
            Contact Us
          </h1>
        </div>
      </div>

      <div className='gap-5 grid grid-cols-2 m-auto pt-20 max-w-7xl'>
        {/* contact form  */}
        <div className="bg-white shadow-md mx-auto p-6 rounded-lg w-full">
          <h1 className='pt-6 pb-10 text-5xl'>Tell Us Your Message</h1>
          <form action="submit" className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium text-gray-700 text-sm">
                  Name <span className="text-red">*</span>
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  id="name"
                  className="px-4 py-2 border border-gray-300 focus:border-red rounded-md outline-0 focus:ring-2 focus:ring-gold w-full transition duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 font-medium text-gray-700 text-sm">
                  Email <span className="text-red">*</span>
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  id="email"
                  className="px-4 py-2 border border-gray-300 focus:border-gold rounded-md outline-0 focus:ring-2 focus:ring-gold w-full transition duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-1 font-medium text-gray-700 text-sm">
                  Phone <span className="text-red">*</span>
                </label>
                <input
                  type="tel"
                  required
                  name="phone"
                  id="phone"
                  className="px-4 py-2 border border-gray-300 focus:border-gold rounded-md outline-0 focus:ring-2 focus:ring-gold w-full transition duration-200"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 font-medium text-gray-700 text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="px-4 py-2 border border-gray-300 focus:border-gold rounded-md outline-0 focus:ring-2 focus:ring-gold w-full transition duration-200"
                  placeholder="Your message here..."
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="bg-red hover:bg-gold px-4 py-3 rounded-md outline-0 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 w-full font-medium text-white transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="bg-white shadow-lg mx-auto px-6 py-16 max-w-4xl">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 font-bold text-gray-900 text-4xl">Contact Us</h1>
            <p className="mb-10 text-gray-600 text-xl leading-relaxed">
              Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
              Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit
              litterarum formas human.
            </p>

            <div className="gap-8 grid md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h2 className="mb-3 font-semibold text-gray-800 text-2xl">Address</h2>
                  <p className="text-gray-600 text-lg">Zurich, Switzerland</p>
                </div>

                <div>
                  <h2 className="mb-3 font-semibold text-gray-800 text-2xl">Phone</h2>
                  <p className="text-gray-600 text-lg">Mobile: (08) 123 456 789</p>
                  <p className="mt-1 text-gray-600 text-lg">Hotline: 1009 678 456</p>
                </div>
              </div>

              <div>
                <h2 className="mb-3 font-semibold text-gray-800 text-2xl">Email</h2>
                <p className="text-gray-600 text-lg">info@goz.com</p>
                <p className="mt-1 text-gray-600 text-lg">support@goz.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-20'>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86456.63197243627!2d8.454335637399973!3d47.3774122261295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b9749bea219%3A0xe66e8df1e71fdc03!2sZ%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2sin!4v1748333338348!5m2!1sen!2sin"
          width="100%"
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

export default Contact

// 11 to 4 clock 