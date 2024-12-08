// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-white py-8 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-blue-700">Staycation.</h3>
            <p className="mt-2 text-gray-500 dark:text-white">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
              For Beginner
            </h3>
            <ul className="mt-2 text-gray-500 dark:text-white">
              <li className="mt-1">New Account</li>
              <li className="mt-1">Booking a Room</li>
              <li className="mt-1">Payment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
              Explore Us
            </h3>
            <ul className="mt-2 text-gray-500 dark:text-white">
              <li className="mt-1">About</li>
              <li className="mt-1">Privacy Policy</li>
              <li className="mt-1">Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
              Contact Us
            </h3>
            <ul className="mt-2 text-gray-500 dark:text-white">
              <li className="mt-1">support@lorem.id</li>
              <li className="mt-1">021 - 2208 - 4421</li>
              <li className="mt-1">Staycation Oy, Jakarta</li>
            </ul>
          </div>
        </div>

        <div className="text-center border-t border-gray-200 mt-8 pt-4 text-gray-500 dark:text-white">
          <p>Copyright 2024. All rights reserved. Staycation</p>
        </div>
      </div>
    </footer>
  );
}
