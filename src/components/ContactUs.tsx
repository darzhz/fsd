import { useForm } from 'react-hook-form';

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="flex flex-col items-center pt-10 w-full bg-gray-300 h-screen">
      <div className="h-[20vh] text-center">
        <h1 className="text-2xl font-bold mb-4 ">CONTACT US</h1>
        <p className="text-lg font-light">
          If you have any questions or inquiries, please don't hesitate to
          contact us.
        </p>
      </div>

      <div className="w-full grid grid-cols-2 gap-4 mt-4">
        {/* left side form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 p-4 bg-white rounded-md shadow-sm ml-4"
        >
          <input
            type="text"
            placeholder="Enter your name"
            {...register('name', { required: true })}
            className="p-2 border border-gray-300 rounded-md"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">
              This field is required
            </span>
          )}
          <input
            type="email"
            placeholder="Enter your email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            className="p-2 border border-gray-300 rounded-md"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">
              Please enter a valid email address
            </span>
          )}
          <input
            type="text"
            placeholder="Enter Subject"
            {...register('subject', { required: true })}
            className="p-2 border border-gray-300 rounded-md"
          />
          {errors.subject && (
            <span className="text-red-500 text-sm">
              This field is required
            </span>
          )}
          <textarea
            placeholder="Enter Message"
            {...register('message', { required: true })}
            className="p-2 border border-gray-300 rounded-md"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              This field is required
            </span>
          )}
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

