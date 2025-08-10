"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

const FuturisticForm = () => {
  const [inquiry, setInquiry] = useState({ name: "", email: "", message: "" });
  const [quote, setQuote] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    materials: "",
    budget: "",
  });

  const handleInquiryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInquiry({ ...inquiry, [e.target.name]: e.target.value });
  };

  const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuote({ ...quote, [e.target.name]: e.target.value });
  };

  const inquiryMailto = `mailto:eightstars@gmail.com?subject=General Inquiry from ${inquiry.name}&body=${inquiry.message}`;
  const inquiryWhatsapp = `https://wa.me/?text=General Inquiry from ${inquiry.name}: ${inquiry.message}`;

  const quoteMailto = `mailto:eightstars@gmail.com?subject=Quote Request from ${quote.name}&body=Project Type: ${quote.projectType}%0D%0AMaterials: ${quote.materials}%0D%0AEstimated Budget: ${quote.budget}%0D%0AEmail: ${quote.email}%0D%0APhone: ${quote.phone}`;
  const quoteWhatsapp = `https://wa.me/?text=Quote Request from ${quote.name}: Project Type: ${quote.projectType}, Materials: ${quote.materials}, Estimated Budget: ${quote.budget}, Email: ${quote.email}, Phone: ${quote.phone}`;

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg border border-gray-700 rounded-2xl shadow-lg text-white">
        <Tabs defaultValue="inquiry" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-transparent border-b border-gray-700 rounded-none">
            <TabsTrigger value="inquiry" className="text-lg font-bold text-gray-400 data-[state=active]:text-white data-[state=active]:shadow-none">General Inquiry</TabsTrigger>
            <TabsTrigger value="quote" className="text-lg font-bold text-gray-400 data-[state=active]:text-white data-[state=active]:shadow-none">Request a Quote</TabsTrigger>
          </TabsList>
          <TabsContent value="inquiry">
            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="inquiry-name" className="text-base">Name</Label>
                <Input id="inquiry-name" name="name" value={inquiry.name} onChange={handleInquiryChange} placeholder="Your Name" className="bg-white/10 border-gray-600 focus:ring-blue-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inquiry-email" className="text-base">Email</Label>
                <Input id="inquiry-email" name="email" value={inquiry.email} onChange={handleInquiryChange} placeholder="Your Email" type="email" className="bg-white/10 border-gray-600 focus:ring-blue-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inquiry-message" className="text-base">Message</Label>
                <Textarea id="inquiry-message" name="message" value={inquiry.message} onChange={handleInquiryChange} placeholder="Your Message" className="bg-white/10 border-gray-600 focus:ring-blue-500" />
              </div>
              <div className="flex justify-end space-x-4">
                <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <a href={inquiryMailto}><Mail className="w-5 h-5 mr-2" /> Send via Email</a>
                </Button>
                <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <a href={inquiryWhatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5 mr-2" /> Send via WhatsApp</a>
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="quote">
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="quote-name" className="text-base">Name</Label>
                  <Input id="quote-name" name="name" value={quote.name} onChange={handleQuoteChange} placeholder="Your Name" className="bg-white/10 border-gray-600 focus:ring-blue-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quote-email" className="text-base">Email</Label>
                  <Input id="quote-email" name="email" value={quote.email} onChange={handleQuoteChange} placeholder="Your Email" type="email" className="bg-white/10 border-gray-600 focus:ring-blue-500" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quote-phone" className="text-base">Phone Number</Label>
                <Input id="quote-phone" name="phone" value={quote.phone} onChange={handleQuoteChange} placeholder="Your Phone Number" type="tel" className="bg-white/10 border-gray-600 focus:ring-blue-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quote-project-type" className="text-base">Project Type</Label>
                <Input id="quote-project-type" name="projectType" value={quote.projectType} onChange={handleQuoteChange} placeholder="e.g., Residential, Commercial" className="bg-white/10 border-gray-600 focus:ring-blue-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quote-materials" className="text-base">Materials Needed</Label>
                <Textarea id="quote-materials" name="materials" value={quote.materials} onChange={handleQuoteChange} placeholder="Describe the materials you need" className="bg-white/10 border-gray-600 focus:ring-blue-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quote-budget" className="text-base">Estimated Budget</Label>
                <Input id="quote-budget" name="budget" value={quote.budget} onChange={handleQuoteChange} placeholder="Your Estimated Budget" className="bg-white/10 border-gray-600 focus:ring-blue-500" />
              </div>
              <div className="flex justify-end space-x-4">
                 <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <a href={quoteMailto}><Mail className="w-5 h-5 mr-2" /> Send via Email</a>
                </Button>
                <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <a href={quoteWhatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5 mr-2" /> Send via WhatsApp</a>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FuturisticForm;
