import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useSubmitEnquiry } from '../hooks/useSubmitEnquiry';
import { CheckCircle2, AlertCircle, Loader2, Phone, Mail, MapPin } from 'lucide-react';
import { validateEnquiry } from '../lib/validation/enquiryValidation';

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [enquiryId, setEnquiryId] = useState<bigint | null>(null);

  const submitEnquiry = useSubmitEnquiry();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationErrors({});
    setEnquiryId(null);

    const validation = validateEnquiry(formData);
    if (!validation.isValid) {
      setValidationErrors(validation.errors);
      return;
    }

    try {
      const contactInfo = formData.email || formData.phone;
      const fullMessage = `Subject: ${formData.subject}\nPhone: ${formData.phone || 'Not provided'}\n\n${formData.message}`;
      
      const id = await submitEnquiry.mutateAsync({
        name: formData.name,
        email: contactInfo,
        message: fullMessage,
      });

      setEnquiryId(id);
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to submit enquiry:', error);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (validationErrors[field]) {
      setValidationErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <div className="py-16">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Get in touch with us and let's discuss how we can help bring your electrical needs to life.
          </p>
        </div>

        {/* Direct Contact Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Direct Contact</CardTitle>
            <CardDescription>
              Reach out to us directly using the contact information below
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">9561549685 / 7875400932</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">bmenterprises1212@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Office Address</p>
                <p className="text-sm text-muted-foreground">
                  A-60, Opp, Siverl Oak, Libherr Chowk, Shendra MIDC, Chh.Sambhajingar, 431154
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {enquiryId !== null && (
          <Alert className="mb-8 border-primary/50 bg-primary/5">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <AlertTitle className="text-primary">Enquiry Submitted Successfully!</AlertTitle>
            <AlertDescription>
              Thank you for contacting BM ENTERPRISES. Your enquiry reference number is <strong>#{enquiryId.toString()}</strong>. We will get back to you shortly.
            </AlertDescription>
          </Alert>
        )}

        {submitEnquiry.isError && (
          <Alert variant="destructive" className="mb-8">
            <AlertCircle className="h-5 w-5" />
            <AlertTitle>Submission Failed</AlertTitle>
            <AlertDescription>
              We encountered an error while submitting your enquiry. Please try again or contact us directly.
            </AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Send Us an Enquiry</CardTitle>
            <CardDescription>
              Fill out the form below and our team will respond to your enquiry as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="John Doe"
                  className={validationErrors.name ? 'border-destructive' : ''}
                />
                {validationErrors.name && (
                  <p className="text-sm text-destructive">{validationErrors.name}</p>
                )}
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className={validationErrors.phone ? 'border-destructive' : ''}
                  />
                  {validationErrors.phone && (
                    <p className="text-sm text-destructive">{validationErrors.phone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="john@example.com"
                    className={validationErrors.email ? 'border-destructive' : ''}
                  />
                  {validationErrors.email && (
                    <p className="text-sm text-destructive">{validationErrors.email}</p>
                  )}
                </div>
              </div>

              {validationErrors.contact && (
                <p className="text-sm text-destructive">{validationErrors.contact}</p>
              )}

              <div className="space-y-2">
                <Label htmlFor="subject">
                  Subject <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  placeholder="Project enquiry, quote request, etc."
                  className={validationErrors.subject ? 'border-destructive' : ''}
                />
                {validationErrors.subject && (
                  <p className="text-sm text-destructive">{validationErrors.subject}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Please provide details about your electrical project or enquiry..."
                  rows={6}
                  className={validationErrors.message ? 'border-destructive' : ''}
                />
                {validationErrors.message && (
                  <p className="text-sm text-destructive">{validationErrors.message}</p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={submitEnquiry.isPending}>
                {submitEnquiry.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Enquiry'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
