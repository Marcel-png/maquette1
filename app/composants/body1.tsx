export default function Body1() {
  return (
    <div className="flex flex-col md:flex-row justify-between px-8 md:px-24 py-16 space-y-10 md:space-y-0 md:space-x-10">
      
      {/* Formulaire de contact */}
      <div className="flex-1 space-y-5">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-200 rounded px-4 py-2 w-full"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="bg-gray-200 rounded px-4 py-2 w-full"
          />
        </div>

        <input
          type="text"
          placeholder="Name"
          className="bg-gray-200 rounded px-4 py-2 w-full"
        />

        <textarea
          placeholder="Message"
          rows={5}
          className="bg-gray-200 rounded px-4 py-2 w-full"
        ></textarea>

        <button className="bg-teal-800 text-white px-6 py-2 rounded hover:bg-teal-900">
          Submit Button
        </button>
      </div>

      {/* Newsletter */}
      <div className="flex-1 bg-teal-800 text-white rounded-lg p-6 space-y-6 max-w-md">
        <div>
          <h3 className="text-xl font-semibold mb-2">Our Newsletters</h3>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Email"
            className="bg-white text-black rounded px-4 py-2 w-full"
          />
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-900">
            Submit Button
          </button>
        </div>
      </div>
    </div>
  );
}