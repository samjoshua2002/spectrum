import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Mail, Phone, MapPin, Twitter } from "lucide-react";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import contactHero from "@assets/Contact (1)_1757149781403.png";
import scrollIcon from "@assets/ri_scroll-to-bottom-fill_1757148198411.png";
import contactIllustration from "@assets/Illustration_1757148569459.png";
import mapImage from "@assets/Rectangle 18_1757149508854.png";

export default function ContactPage() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <div>
      {/* Contact Header */}
      <div 
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(${contactHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontWeight: 'bold',
                fontSize: '40px',
                color: 'white',
                textAlign: 'center',
                marginBottom: '24px'
              }}
              data-testid="heading-contact"
            >
              Contact
            </h1>
            <div className="flex justify-center space-x-6 text-white mb-8">
              <Mail className="w-8 h-8" />
              <Twitter className="w-8 h-8" />
              <Phone className="w-8 h-8" />
            </div>
            <div className="w-16 h-1 bg-white mx-auto mb-8"></div>
            <div className="flex justify-center">
              <img 
                src={scrollIcon} 
                alt="Scroll Down" 
                className="w-8 h-auto opacity-80 animate-bounce"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Content - White Background */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <div className="fadeInUp stagger-1">
              <div className="bg-gray-100 rounded-xl p-8 shadow-sm">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input 
                              placeholder="Name" 
                              {...field}
                              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent smooth-transition"
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder="Phone" 
                              {...field}
                              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent smooth-transition"
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="Email" 
                              {...field}
                              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent smooth-transition"
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea 
                              placeholder="Message" 
                              rows={5}
                              {...field}
                              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent smooth-transition resize-none"
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex justify-center mt-6">
                      <Button 
                        type="submit" 
                        disabled={contactMutation.isPending}
                        className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold smooth-transition"
                        style={{
                          fontFamily: 'Parkinsans, sans-serif',
                          fontSize: '14px',
                          fontWeight: 'semibold'
                        }}
                        data-testid="button-submit"
                      >
                        {contactMutation.isPending ? "Sending..." : "Submit"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
            
            {/* Contact Illustration */}
            <div className="fadeInUp stagger-2 flex items-center justify-center">
              <img 
                src={contactIllustration} 
                alt="Customer service representative illustration" 
                className="w-80 h-auto"
              />
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Contact Information Cards */}
      <div 
        className="py-16 relative overflow-hidden"
        style={{
          backgroundImage: `url(${contactHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 fadeInUp stagger-3">
            {/* Address Card */}
            <div style={{backgroundColor: '#374499'}} className="text-white rounded-xl p-8 text-center hover-lift smooth-transition" data-testid="card-address">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6" style={{color: '#374499'}}>
                <MapPin className="w-8 h-8" />
              </div>
              <h2 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '16px'
                }}
              >
                Address
              </h2>
              <div className="space-y-2">
                <p 
                  style={{
                    fontFamily: 'Parkinsans, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}
                >
                  Spectrum Solar Solutions
                </p>
                <p 
                  style={{
                    fontFamily: 'Parkinsans, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}
                >
                  No. 56,10th Main, 14th Cross,
                </p>
                <p 
                  style={{
                    fontFamily: 'Parkinsans, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}
                >
                  Behind MES College, Malleshwaram,
                </p>
                <p 
                  style={{
                    fontFamily: 'Parkinsans, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}
                >
                  Bangalore - 560003
                </p>
              </div>
            </div>
            
            {/* Phone Card */}
            <div style={{backgroundColor: '#374499'}} className="text-white rounded-xl p-8 text-center hover-lift smooth-transition" data-testid="card-phone">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6" style={{color: '#374499'}}>
                <Phone className="w-8 h-8" />
              </div>
              <h2 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '16px'
                }}
              >
                Phone
              </h2>
              <div className="space-y-2">
                <p 
                  style={{
                    fontFamily: 'Parkinsans, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}
                >
                  +91 9741289148
                </p>
                <p 
                  style={{
                    fontFamily: 'Parkinsans, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}
                >
                  +91 9901960760
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="fadeInUp stagger-4">
            <div className="text-center mb-8">
              <h2 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#374499',
                  marginBottom: '16px'
                }}
              >
                Map
              </h2>
            </div>
            
            <div className="bg-muted rounded-xl p-4">
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <img 
                  src={mapImage} 
                  alt="Bangalore map showing Spectrum Solar Solutions office location" 
                  className="w-full h-full object-cover rounded-lg"
                  data-testid="img-map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
