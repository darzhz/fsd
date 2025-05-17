import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export default function Subscription() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then((data) => {
            if(data.success) {
                toast("Subscribed", {
                    description: "You will be contacted by our team soon",
                  });
            }
        })
        .catch(error => console.log(error));
    }

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-12 mx-auto">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
                        Subscribe to our newsletter
                    </h2>
                    <p className="max-w-md mx-auto mt-4 text-center text-gray-600 dark:text-gray-300">
                        Get the latest news and updates delivered straight to your inbox.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center mt-8 gap-2">
                        <input
                            type="name"
                            {...register('name', { required: true })}
                            className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:outline-none focus:ring"
                            placeholder="Enter your name"
                        />
                        {errors.name && <p className="text-red-500">Name is required</p>}
                        <input
                            type="email"
                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                            className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:outline-none focus:ring"
                            placeholder="Enter your email address"
                        />
                        {errors.email && <p className="text-red-500">Invalid email address</p>}
                        <button
                            type="submit"
                            className="px-4 py-2 ml-2 text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}