import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/ui/Button";
import { Frown } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex items-center justify-center h-[70vh] bg-white">
      <div className="text-center p-8 max-w-md">
        <Frown className="h-20 w-20 text-rose-500 mx-auto mb-6" />
        <h1 className="text-6xl font-heading font-extrabold text-gray-900 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <NavLink to="/">
          <Button
            className="bg-rose-500 hover:bg-rose-600"
            aria-label="Go back to homepage"
          >
            Go to Homepage
          </Button>
        </NavLink>
      </div>
    </main>
  );
};

export default NotFound;