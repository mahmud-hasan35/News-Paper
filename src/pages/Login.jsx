


export default function Login() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-lg">
        <form className="space-y-4 mb-5">
        {/* Product Name */}
        <div>
            <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700"
            >
                Email Address
            </label>
            <input
                type="text"
                id="Email"
                name="EmailAddress"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter email address"
                required
            />
        </div>
    
        {/* Product Price */}
        <div>
            <label
                htmlFor="Password"
                className="block text-sm font-medium text-gray-700"
            >
                Password
            </label>
            <input
                type="Password"
                id="productPrice"
                name="productPrice"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your password"
                required
            />
        </div>
    
        {/* Submit Button */}
        <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
        >
            Submit
        </button>
    </form>
     

    </div>
  )
}
