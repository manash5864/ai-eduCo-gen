"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
 import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useUser } from "@clerk/nextjs";

function LogoutPage() {
  const router = useRouter();
    const {user}=useUser();
  const handleLogout = () => {
    // TODO: Add your logout logic (e.g. auth().signOut(), remove token, etc.)
    router.push("/");
  };

  return (
    <div className=" bg-gradient-to-tr from-purple-100 to-blue-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
      >
        <Image
          src="/logout.jpg"
          alt="Logout illustration"
          width={180}
          height={180}
          className="mx-auto mb-6"
        />
        <h2 className="text-xl font-bold text-gray-800 mb-1">Ready to Leave?</h2>
        <span className='text-2xl font-bold text-gray-800 mb-2'>{user?.fullName}</span>
        <p className="text-gray-500 mb-6">Are you sure you want to logout from your account?</p>
        <div className="flex gap-4 justify-center">
          <Button
            variant="outline"
            className="w-32"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button
            className="w-32 bg-red-500 hover:bg-red-600 text-white"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default LogoutPage;
