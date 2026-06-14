'use client';

import { useState, type FormEvent } from 'react';
import { Mail, Github, Linkedin, Send, ArrowRight, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { FiverrIcon, FreelancerIcon } from '@/components/ui/brand-icons';
import { SOCIAL_LINKS, CONTACT_EMAIL } from '@/lib/constants';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

const projectTypeOptions = [
  'Full-Stack Web App',
  'AI Feature Integration',
  'E-Commerce Store',
  'Landing Page / Portfolio',
  'Other',
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  fiverr: FiverrIcon,
  freelancer: FreelancerIcon,
};

const platformLinks = SOCIAL_LINKS.map((link) => ({
  ...link,
  icon: iconMap[link.iconSlug],
}));

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  function validateForm(): boolean {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      toast({
        title: 'Message Sent!',
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });

      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Failed to send message. Please try again.';
      toast({
        title: 'Error',
        description: message,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Let&apos;s Work Together
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 bg-[#16213E] border border-[#0F3460] rounded-full px-4 py-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-text-primary font-mono">
                Open to Work
              </span>
            </div>

            {/* Direct Email */}
            <div className="space-y-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-3 text-accent hover:text-accent-hover transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#16213E] border border-[#0F3460] group-hover:border-accent/50 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">{CONTACT_EMAIL}</span>
              </a>
              <p className="text-text-secondary text-sm ml-13 pl-13">
                I reply within 24 hours
              </p>
            </div>

            {/* Platform Links */}
            <div className="space-y-3 pt-2">
              <h3 className="font-display text-lg font-semibold text-text-primary">
                Find me on
              </h3>
              <div className="space-y-2">
                {platformLinks.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-[#16213E] border border-[#0F3460] hover:border-accent/50 transition-all group card-glow"
                  >
                    <div className="flex items-center justify-center w-9 h-9 rounded-md bg-navy-accent/50 text-text-secondary group-hover:text-accent transition-colors">
                      <platform.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-text-primary flex-1">
                      {platform.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-text-secondary group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#16213E] border border-[#0F3460] rounded-xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-text-primary text-sm font-medium">
                  Name <span className="text-accent">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  className="bg-[#1A1A2E] border-[#0F3460] text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:ring-accent/20"
                />
                {errors.name && (
                  <p className="text-sm text-accent">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-text-primary text-sm font-medium">
                  Email <span className="text-accent">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  className="bg-[#1A1A2E] border-[#0F3460] text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:ring-accent/20"
                />
                {errors.email && (
                  <p className="text-sm text-accent">{errors.email}</p>
                )}
              </div>

              {/* Project Type Select */}
              <div className="space-y-2">
                <Label className="text-text-primary text-sm font-medium">
                  Project Type <span className="text-accent">*</span>
                </Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => {
                    setFormData({ ...formData, projectType: value });
                    if (errors.projectType) setErrors({ ...errors, projectType: undefined });
                  }}
                >
                  <SelectTrigger className="w-full bg-[#1A1A2E] border-[#0F3460] text-text-primary focus:border-accent focus:ring-accent/20">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#16213E] border-[#0F3460]">
                    {projectTypeOptions.map((option) => (
                      <SelectItem
                        key={option}
                        value={option}
                        className="text-text-primary focus:bg-[#0F3460] focus:text-text-primary"
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.projectType && (
                  <p className="text-sm text-accent">{errors.projectType}</p>
                )}
              </div>

              {/* Budget Field */}
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-text-primary text-sm font-medium">
                  Budget <span className="text-text-secondary text-xs">(optional)</span>
                </Label>
                <Input
                  id="budget"
                  type="text"
                  placeholder="e.g., $100-500"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="bg-[#1A1A2E] border-[#0F3460] text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:ring-accent/20"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-text-primary text-sm font-medium">
                  Message <span className="text-accent">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  className="bg-[#1A1A2E] border-[#0F3460] text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:ring-accent/20 min-h-[100px] resize-y"
                />
                {errors.message && (
                  <p className="text-sm text-accent">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent-hover text-white font-medium h-11 text-base transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
