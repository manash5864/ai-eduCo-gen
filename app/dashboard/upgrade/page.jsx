"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
export default function UpgradePage() {
  const [selectedPlan, setSelectedPlan] = useState("free");
  const [paymentMode, setPaymentMode] = useState("UPI");

  const isFree = selectedPlan === "free";
  const planPrices = {
    free: 0,
    monthly: 199,
    annual: 1499,
  };

  const plans = [
    {
      name: "Free",
      price: "₹0",
      oldPrice: "₹0",
      description: "For free Access",
      features: [
        "✅ Access to 5 AI Courses",
        "✅ Personal license",
        "❌ AI-Agent",
        "❌ No exclusive content",
        "❌ No priority support",
      ],
    },
    {
      name: "Monthly",
      price: "₹199",
      oldPrice: "₹299",
      description: "For One Month Subscription",
      features: [
        "✅ Unlimited AI Courses",
        "✅ Personal license",
        "✅ Access to exclusive content",
        "✅ AI-Agent",
        "❌ No priority support",
      ],
    },
    {
      name: "Annual",
      price: "₹1,499",
      oldPrice: "₹2,999",
      description: "For Annual plan",
      features: [
        "✅ Unlimited AI Courses",
        "✅ Personal license",
        "✅ Access to exclusive content",
        "✅ AI-Agent",
        "✅ Priority support",
      ],
      highlighted: true,
    },
  ];

  return (
    
      <div className=" bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-center px-4 py-10 rounded-lg">



      <h1 className="text-4xl font-bold text-center mb-4">Unlock Premium Features</h1>
      <p className="text-center text-gray-600 mb-10">
        Choose a plan that fits your team or individual needs.
      </p>

    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, index) => {
          const planKey = plan.name.toLowerCase(); // "free", "monthly", "annual"
          return (
            <div
              key={index}
              className={`rounded-3xl shadow-xl p-8 border transition-transform duration-300 hover:scale-105 ${
                plan.highlighted ? "border-sky-500 bg-white" : "bg-white"
              } ${selectedPlan === planKey ? "ring-2 ring-sky-400" : ""}`}
            >
              <h2 className="text-xl font-semibold text-center mb-2">{plan.name}</h2>
              <p className="text-sm text-gray-500 text-center mb-4">{plan.description}</p>
              <div className="text-center mb-6">
                <span className="line-through text-gray-400 mr-2">{plan.oldPrice}</span>
                <span className="text-3xl font-bold text-sky-600">{plan.price}</span>
                {plan.oldPrice !== plan.price && (
                  <p className="text-sm text-green-600">
                    Save up to{" "}
                    {Math.round(
                      ((parseInt(plan.oldPrice.replace("₹", "")) -
                        parseInt(plan.price.replace("₹", ""))) /
                        parseInt(plan.oldPrice.replace("₹", ""))) *
                        100
                    )}
                    %
                  </p>
                )}
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={selectedPlan === planKey ? "default" : "outline"}
                onClick={() => setSelectedPlan(planKey)}
              >
                Get {plan.name} Access
              </Button>
            </div>
          );
        })}
      </div>
      </motion.div>

      {!isFree && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
      <div className=" max-w-xl w-full bg-white shadow-2xl rounded-2xl p-8 border mt-7">  
        <>
        {/* flex justify-center gap-4 mb-6 mt-10 */}
          <div className="flex justify-center gap-4 mb-6 mt-10">
            <Button
              variant={paymentMode === "UPI" ? "default" : "outline"}
              onClick={() => setPaymentMode("UPI")}
            >
              UPI
            </Button>
            <Button
              variant={paymentMode === "CARD" ? "default" : "outline"}
              onClick={() => setPaymentMode("CARD")}
            >
              Credit/Debit Card
            </Button>
          </div>

          <div>
            {paymentMode === "UPI" && (
                <div className="mb-6">
                  <label className="block text-gray-700 mb-1">Select UPI App</label>
                  <div className="flex gap-4 flex-wrap mb-4">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="upiApp" value="gpay" defaultChecked />
                      <Image src="/gpay1.png" alt="Google Pay" width={60} height={20} />
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="upiApp" value="phonepe" />
                      <Image src="/phonepe.jpeg" alt="PhonePe" width={60} height={20} />
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="upiApp" value="paytm" />
                      <Image src="/paytm.png" alt="Paytm" width={60} height={20} />
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="upiApp" value="upi" />
                      <Image src="/upi1.png" alt="UPI" width={60} height={20} />
                    </label>
                  </div>

                  <label className="block text-gray-700 mb-1">Enter your UPI ID</label>
                  <input
                    type="text"
                    placeholder="e.g. yourname@upi"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}


            {paymentMode === "CARD" && (
              <div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Select Card Type</label>                                   
                    <div className=" flex gap-7 flex-wrap">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="cardType" value="visa" defaultChecked />
                        <Image src="/visa.png" alt="Visa" width={60} height={20} />
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="cardType" value="mastercard" />
                        <Image src="/mastercard1.png" alt="Mastercard" width={60} height={20} />
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="cardType" value="rupay" />
                        <Image src="/rupay1.png" alt="RuPay" width={60} height={40} />
                      </label>
                    </div>
                  </div>

                <label className="block text-gray-700 mb-1">Card Number</label>
                <input
                  type="text"
                  placeholder="XXXX XXXX XXXX XXXX"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-gray-700 mb-1">Expiry</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 mb-1">CVV</label>
                    <input
                      type="password"
                      placeholder="***"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            <Button className="w-full mt-5">
              Pay ₹{planPrices[selectedPlan]} and Upgrade
            </Button>
          </div>
        </>
      </div>
      </motion.div>
      
      )}

      {isFree && (
        <div className="text-center mt-6 text-gray-500">
          You are currently on the free plan. Enjoy learning!
        </div>
      )}

      {/* Payment Logos */}
      <div className="text-center text-sm text-gray-500 mt-16">
        <div className="flex justify-center gap-10 flex-wrap items-center">
          <Image src="/visa.png" width={70} height={20} alt="Visa" />
          <Image src="/mastercard1.png" width={70} height={20} alt="Mastercard" />
          <Image src="/rupay1.png" width={110} height={20} alt="RuPay" />
          <Image src="/upi1.png" width={110} height={20} alt="UPI" />
          <Image src="/gpay1.png" width={110} height={20} alt="Google Pay" />
          <Image src="/phonepe.jpeg" width={70} height={20} alt="PhonePe" />
          <Image src="/paytm.png" width={100} height={40} alt="PhonePe" />
        </div>
        <p className="mt-4">
          All orders are securely processed in INR via UPI or Card. Cancel anytime.
        </p>
      </div>
     

      </div>

  );
  
}
