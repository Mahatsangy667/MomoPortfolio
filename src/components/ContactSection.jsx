import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
  MessageSquare,
  Globe,
  Calendar,
  Clock,
  CheckCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Envoi via l'API Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'eb1694d9-165f-4401-a7d1-ae8ac5f27b63', // ← CLÉ
          subject: 'New Message from Portfolio Contact Form',
          from_name: 'Portfolio Website',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck: '' // Protection anti-bot
        })
      });

      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "🎉 Message sent successfully!",
          description: "Thank you for your message. I'll get back to you within 24 hours.",
          className: "border-2 border-primary/20"
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitch, href: "#", label: "Twitch" }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mahatsangy.rjl@gmail.com",
      href: "mailto:mahatsangy.rjl@gmail.com",
      description: "Response within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+261 34 87 955 68",
      href: "tel:+261348795568",
      secondaryValue: "+261 38 57 624 50"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Moramanga, Madagascar",
      description: "Available for remote work worldwide"
    },
    {
      icon: Clock,
      title: "Time Zone",
      value: "EAT (UTC+3)",
      description: "Working hours: 8AM - 6PM"
    }
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      
      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <MessageSquare className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-transparent bg-gradient-to-r from-primary to-blue-300 bg-clip-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have an exciting project? Let's bring your ideas to life together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information - Left Side */}
          <div className="space-y-10">
            <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/30 shadow-lg">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                Contact Details
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="relative">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                      {item.secondaryValue && (
                        <p className="text-muted-foreground text-sm mt-1">
                          {item.secondaryValue}
                        </p>
                      )}
                      {item.description && (
                        <p className="text-muted-foreground text-sm mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="relative">
            <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-border/30 shadow-2xl">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              
              <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Champs cachés pour Web3Forms */}
                <input 
                  type="hidden" 
                  name="access_key" 
                  value="eb1694d9-165f-4401-a7d1-ae8ac5f27b63" // ← CLÉ
                />
                <input 
                  type="hidden" 
                  name="subject" 
                  value="New Message from Portfolio Contact Form"
                />
                <input 
                  type="hidden" 
                  name="from_name" 
                  value="Portfolio Website"
                />
                <input 
                  type="checkbox" 
                  name="botcheck" 
                  className="hidden" 
                  style={{ display: 'none' }}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-input bg-background/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                      placeholder="Jean Rakoto"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-input bg-background/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                      placeholder="rakoto@gmail.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl border border-input bg-background/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                    placeholder="Hi, I'm interested in collaborating on..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "group relative w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-500 overflow-hidden",
                    "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "shadow-lg hover:shadow-xl hover:shadow-primary/20"
                  )}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>

                <p className="text-xs text-center text-muted-foreground pt-4">
                  By submitting this form, you agree to our privacy policy. 
                  I'll never share your information with third parties.
                </p>
              </form>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};