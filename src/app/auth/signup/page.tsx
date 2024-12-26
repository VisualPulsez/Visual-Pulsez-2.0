"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2, Mail, Building, User, Lock, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/../components/ui/card";
import { Input } from "@/../components/ui/input";
import { Button } from "@/../components/ui/button";
import { Label } from "@/../components/ui/label";
import { Alert, AlertDescription } from "@/../components/ui/alert";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "", surname: "", company: "", email: "", password: ""
  });
  const [currentField, setCurrentField] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInputFocus = (field: string | React.SetStateAction<null>) => setCurrentField(field);
  const handleInputBlur = () => setCurrentField(null);

  const handleSignup = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed.");
      }
      setSuccess(true);
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formFields = [
    { name: 'name', label: 'First Name', icon: User },
    { name: 'surname', label: 'Last Name', icon: User },
    { name: 'company', label: 'Company', icon: Building },
    { name: 'email', label: 'Email', icon: Mail, type: 'email' },
    { name: 'password', label: 'Password', icon: Lock, type: 'password' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-none shadow-lg">
          <CardHeader>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Create Account
              </CardTitle>
            </motion.div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-6">
              <AnimatePresence>
                {formFields.map((field) => (
                  <motion.div
                    key={field.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="space-y-2"
                  >
                    <Label htmlFor={field.name} className="text-gray-700 font-medium">
                      {field.label}
                    </Label>
                    <div className="relative group">
                      <motion.div
                        animate={{
                          scale: currentField === field.name ? 1.1 : 1,
                          color: currentField === field.name ? "#4F46E5" : "#9CA3AF"
                        }}
                        className="absolute left-3 top-3"
                      >
                        <field.icon className="h-4 w-4" />
                      </motion.div>
                      <Input
                        id={field.name}
                        name={field.name}
                        type={field.type || "text"}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        onFocus={() => handleInputFocus(field.name)}
                        onBlur={handleInputBlur}
                        className="pl-10 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300"
                        required
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  disabled={loading}
                >
                  <motion.div
                    className="flex items-center justify-center gap-2"
                    animate={{ x: loading ? 20 : 0 }}
                  >
                    {loading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : success ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <ChevronRight className="h-5 w-5" />
                    )}
                    {loading ? "Creating Account..." : success ? "Welcome!" : "Sign up"}
                  </motion.div>
                </Button>
              </motion.div>
            </form>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4"
                >
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                </motion.div>
              )}

              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="mt-4"
                >
                  <Alert className="bg-green-50 border-green-500">
                    <AlertDescription className="text-green-700">
                      Account created successfully!
                    </AlertDescription>
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}