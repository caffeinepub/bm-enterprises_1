import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useSubmitEnquiry } from '../hooks/useSubmitEnquiry';
import { useSubmitFeedback } from '../hooks/useSubmitFeedback';
import { useFeedbackList } from '../hooks/useFeedbackList';
import { CheckCircle2, AlertCircle, Loader2, Phone, Mail, MapPin, Star, MessageSquare } from 'lucide-react';
import { validateEnquiry } from '../lib/validation/enquiryValidation';
import { validateFeedback } from '../lib/validation/feedbackValidation';
import { formatTimestamp } from '../lib/formatters/time';
import LegalRegistrationDetails from '../components/LegalRegistrationDetails';

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

  const [feedbackFormData, setFeedbackFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    rating: 0,
    suggestions: '',
  });
  const [feedbackValidationErrors, setFeedbackValidationErrors] = useState<Record<string, string>>({});
  const [feedbackId, setFeedbackId] = useState<bigint | null>(null);

  const submitEnquiry = useSubmitEnquiry();
  const submitFeedback = useSubmitFeedback();
  const { data: feedbackList, isLoading: isFeedbackLoading } = useFeedbackList();

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

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackValidationErrors({});
    setFeedbackId(null);

    const validation = validateFeedback(feedbackFormData);
    if (!validation.isValid) {
      setFeedbackValidationErrors(validation.errors);
      return;
    }

    try {
      const contactInfo = feedbackFormData.email || feedbackFormData.phone;
      
      const id = await submitFeedback.mutateAsync({
        name: feedbackFormData.name,
        email: contactInfo,
        message: feedbackFormData.message,
        rating: BigInt(feedbackFormData.rating),
        suggestions: feedbackFormData.suggestions,
      });

      setFeedbackId(id);
      setFeedbackFormData({ name: '', email: '', phone: '', message: '', rating: 0, suggestions: '' });
    } catch (error) {
      console.error('Failed to submit feedback:', error);
    }
  };

  const handleFeedbackChange = (field: string, value: string | number) => {
    setFeedbackFormData((prev) => ({ ...prev, [field]: value }));
    if (feedbackValidationErrors[field]) {
      setFeedbackValidationErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const renderStars = (rating: number, interactive: boolean = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => interactive && handleFeedbackChange('rating', star)}
            disabled={!interactive}
            className={`${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'}`}
          >
            <Star
              className={`h-5 w-5 ${
                star <= rating
                  ? 'fill-amber-400 text-amber-400'
                  : 'fill-none text-muted-foreground'
              }`}
            />
          </button>
        ))}
      </div>
    );
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

        {/* Legal & Registration Details Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Legal & Registration Details</CardTitle>
            <CardDescription>
              Official registration and compliance information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LegalRegistrationDetails />
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

        <Card className="mb-12">
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

        {/* Client Feedback Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Client Feedback</CardTitle>
            <CardDescription>
              We value your feedback! Share your experience working with BM ENTERPRISES and help us improve our services. Your feedback will be visible to other visitors.
            </CardDescription>
            <div className="flex items-center space-x-2 mt-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>bmenterprises1212@gmail.com</span>
            </div>
          </CardHeader>
          <CardContent>
            {feedbackId !== null && (
              <Alert className="mb-6 border-primary/50 bg-primary/5">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <AlertTitle className="text-primary">Feedback Submitted Successfully!</AlertTitle>
                <AlertDescription>
                  Thank you for your valuable feedback! Your feedback reference number is <strong>#{feedbackId.toString()}</strong>.
                </AlertDescription>
              </Alert>
            )}

            {submitFeedback.isError && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-5 w-5" />
                <AlertTitle>Submission Failed</AlertTitle>
                <AlertDescription>
                  We encountered an error while submitting your feedback. Please try again or contact us directly.
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleFeedbackSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="feedback-name">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="feedback-name"
                  value={feedbackFormData.name}
                  onChange={(e) => handleFeedbackChange('name', e.target.value)}
                  placeholder="John Doe"
                  className={feedbackValidationErrors.name ? 'border-destructive' : ''}
                />
                {feedbackValidationErrors.name && (
                  <p className="text-sm text-destructive">{feedbackValidationErrors.name}</p>
                )}
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="feedback-email">Email Address</Label>
                  <Input
                    id="feedback-email"
                    type="email"
                    value={feedbackFormData.email}
                    onChange={(e) => handleFeedbackChange('email', e.target.value)}
                    placeholder="john@example.com"
                    className={feedbackValidationErrors.email ? 'border-destructive' : ''}
                  />
                  {feedbackValidationErrors.email && (
                    <p className="text-sm text-destructive">{feedbackValidationErrors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="feedback-phone">Phone Number</Label>
                  <Input
                    id="feedback-phone"
                    type="tel"
                    value={feedbackFormData.phone}
                    onChange={(e) => handleFeedbackChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className={feedbackValidationErrors.phone ? 'border-destructive' : ''}
                  />
                  {feedbackValidationErrors.phone && (
                    <p className="text-sm text-destructive">{feedbackValidationErrors.phone}</p>
                  )}
                </div>
              </div>

              {feedbackValidationErrors.contact && (
                <p className="text-sm text-destructive">{feedbackValidationErrors.contact}</p>
              )}

              <div className="space-y-2">
                <Label>
                  Rating <span className="text-destructive">*</span>
                </Label>
                {renderStars(feedbackFormData.rating, true)}
                {feedbackValidationErrors.rating && (
                  <p className="text-sm text-destructive">{feedbackValidationErrors.rating}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback-message">
                  Feedback Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="feedback-message"
                  value={feedbackFormData.message}
                  onChange={(e) => handleFeedbackChange('message', e.target.value)}
                  placeholder="Share your experience working with us..."
                  rows={4}
                  className={feedbackValidationErrors.message ? 'border-destructive' : ''}
                />
                {feedbackValidationErrors.message && (
                  <p className="text-sm text-destructive">{feedbackValidationErrors.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback-suggestions">Suggestions for Improvement (Optional)</Label>
                <Textarea
                  id="feedback-suggestions"
                  value={feedbackFormData.suggestions}
                  onChange={(e) => handleFeedbackChange('suggestions', e.target.value)}
                  placeholder="Any suggestions on how we can improve our services?"
                  rows={3}
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={submitFeedback.isPending}>
                {submitFeedback.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Feedback'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Recent Client Feedback */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Recent Client Feedback
            </CardTitle>
            <CardDescription>
              See what our clients are saying about us
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isFeedbackLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              </div>
            ) : feedbackList && feedbackList.length > 0 ? (
              <div className="space-y-4">
                {feedbackList.map((feedback) => (
                  <Card key={feedback.id.toString()} className="border-muted">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-semibold text-base">{feedback.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {formatTimestamp(feedback.timestampCreated)}
                          </p>
                        </div>
                        {renderStars(Number(feedback.rating), false)}
                      </div>
                      <p className="text-sm text-foreground mb-2 break-words whitespace-pre-wrap line-clamp-4">
                        {feedback.message}
                      </p>
                      {feedback.suggestions && feedback.suggestions.trim() && (
                        <div className="mt-3 pt-3 border-t border-muted">
                          <p className="text-xs font-medium text-muted-foreground mb-1">Suggestions:</p>
                          <p className="text-sm text-muted-foreground break-words whitespace-pre-wrap line-clamp-3">
                            {feedback.suggestions}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50" />
                <p className="text-muted-foreground">No feedback submitted yet.</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Be the first to share your experience!
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
