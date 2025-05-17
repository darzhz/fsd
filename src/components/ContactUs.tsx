export default function ContactUs() {
  return (
    <div className="flex flex-col items-center pt-10 w-full bg-gray-300 h-screen">
        <div className="h-[20vh] text-center">
        <h1 className="text-2xl font-bold mb-4 ">CONTACT US</h1>
        <p className="text-lg font-light">
            If you have any questions or inquiries, please don't hesitate to contact
            us.
        </p>
        </div>
      
      <div className="w-full grid grid-cols-2 gap-4 mt-4">
        {/* left side form */}
        <form className="flex flex-col space-y-4 p-4 bg-white rounded-md shadow-sm ml-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Subject"
            className="p-2 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Message"
            className="p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-md"
          >
            Submit
          </button>
        </form>
        {/* right side contact info */}
        <div className="flex flex-col space-y-4 text-center p-3">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <div className="w-full text-center m-0">
              <p>123 Main St, City, State, Country</p>
            </div>
            <div className="w-full text-center m-0">
              <i className="fas fa-phone mr-2"></i>
              <p>(123) 456-7890</p>
            </div>
            <div className="w-full text-center m-0">
              <i className="fas fa-envelope mr-2"></i>
              <p>g9aV3@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
