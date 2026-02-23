import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Star } from 'lucide-react';
import { useSubmitEnquiry } from '../hooks/useSubmitEnquiry';
import { useSubmitFeedback } from '../hooks/useSubmitFeedback';
import { useFeedbackList } from '../hooks/useFeedbackList';
import { validateEnquiry } from '../lib/validation/enquiryValidation';
import { validateFeedback } from '../lib/validation/feedbackValidation';
import { formatTimestamp } from '../lib/formatters/time';
import LegalRegistrationDetails from '../components/LegalRegistrationDetails';

export default function EnquiryPage() {
  const [enquiryForm, setEnquiryForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [enquiryErrors, setEnquiryErrors] = useState<Record<string, string>>({});
  const [enquirySuccess, setEnquirySuccess] = useState(false);

  const [feedbackForm, setFeedbackForm] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    message: '', 
    rating: 5,
    suggestions: ''
  });
  const [feedbackErrors, setFeedbackErrors] = useState<Record<string, string>>({});
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  const submitEnquiryMutation = useSubmitEnquiry();
  const submitFeedbackMutation = useSubmitFeedback();
  const { data: feedbackList = [], isLoading: feedbackLoading } = useFeedbackList();

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnquiryErrors({});
    setEnquirySuccess(false);

    const validation = validateEnquiry({
      name: enquiryForm.name,
      email: enquiryForm.email,
      phone: enquiryForm.phone,
      subject: enquiryForm.subject,
      message: enquiryForm.message,
    });
    
    if (!validation.isValid) {
      setEnquiryErrors(validation.errors);
      return;
    }

    try {
      await submitEnquiryMutation.mutateAsync({
        name: enquiryForm.name,
        email: enquiryForm.email || enquiryForm.phone,
        message: enquiryForm.message,
      });
      setEnquirySuccess(true);
      setEnquiryForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setEnquiryErrors({ submit: 'Failed to submit enquiry. Please try again.' });
    }
  };

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackErrors({});
    setFeedbackSuccess(false);

    const validation = validateFeedback({
      name: feedbackForm.name,
      email: feedbackForm.email,
      phone: feedbackForm.phone,
      message: feedbackForm.message,
      rating: feedbackForm.rating,
      suggestions: feedbackForm.suggestions,
    });
    
    if (!validation.isValid) {
      setFeedbackErrors(validation.errors);
      return;
    }

    const contactInfo = feedbackForm.email || feedbackForm.phone;

    try {
      await submitFeedbackMutation.mutateAsync({
        name: feedbackForm.name,
        email: contactInfo,
        message: feedbackForm.message,
        rating: BigInt(feedbackForm.rating),
        suggestions: feedbackForm.suggestions,
      });
      setFeedbackSuccess(true);
      setFeedbackForm({ name: '', email: '', phone: '', message: '', rating: 5, suggestions: '' });
    } catch (error) {
      setFeedbackErrors({ submit: 'Failed to submit feedback. Please try again.' });
    }
  };

  const renderStars = (rating: number, interactive: boolean = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              interactive ? 'cursor-pointer' : ''
            } ${
              star <= (interactive && hoveredStar !== null ? hoveredStar : rating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
            onClick={() => interactive && setFeedbackForm({ ...feedbackForm, rating: star })}
            onMouseEnter={() => interactive && setHoveredStar(star)}
            onMouseLeave={() => interactive && setHoveredStar(null)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="py-16">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Get in touch with BM ENTERPRISES for all your electrical contracting needs. We're here to help!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Direct Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+91 9422152527</p>
                  <p className="text-muted-foreground">+91 9422152528</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">bmenterprises@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">
                    123 Electrical Avenue<br />
                    Industrial District<br />
                    City, State 400001
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Legal & Registration Details</CardTitle>
            </CardHeader>
            <CardContent>
              <LegalRegistrationDetails />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Send an Enquiry</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div>
                  <Label htmlFor="enquiry-name">Name *</Label>
                  <Input
                    id="enquiry-name"
                    value={enquiryForm.name}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                    placeholder="Your full name"
                    className={enquiryErrors.name ? 'border-destructive' : ''}
                  />
                  {enquiryErrors.name && (
                    <p className="text-sm text-destructive mt-1">{enquiryErrors.name}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="enquiry-email">Email</Label>
                  <Input
                    id="enquiry-email"
                    type="email"
                    value={enquiryForm.email}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className={enquiryErrors.email ? 'border-destructive' : ''}
                  />
                  {enquiryErrors.email && (
                    <p className="text-sm text-destructive mt-1">{enquiryErrors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="enquiry-phone">Phone</Label>
                  <Input
                    id="enquiry-phone"
                    type="tel"
                    value={enquiryForm.phone}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                    placeholder="+91 1234567890"
                    className={enquiryErrors.phone ? 'border-destructive' : ''}
                  />
                  {enquiryErrors.phone && (
                    <p className="text-sm text-destructive mt-1">{enquiryErrors.phone}</p>
                  )}
                  {enquiryErrors.contact && (
                    <p className="text-sm text-destructive mt-1">{enquiryErrors.contact}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="enquiry-subject">Subject *</Label>
                  <Input
                    id="enquiry-subject"
                    value={enquiryForm.subject}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, subject: e.target.value })}
                    placeholder="What is your enquiry about?"
                    className={enquiryErrors.subject ? 'border-destructive' : ''}
                  />
                  {enquiryErrors.subject && (
                    <p className="text-sm text-destructive mt-1">{enquiryErrors.subject}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="enquiry-message">Message *</Label>
                  <Textarea
                    id="enquiry-message"
                    value={enquiryForm.message}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                    placeholder="Tell us about your electrical needs..."
                    rows={5}
                    className={enquiryErrors.message ? 'border-destructive' : ''}
                  />
                  {enquiryErrors.message && (
                    <p className="text-sm text-destructive mt-1">{enquiryErrors.message}</p>
                  )}
                </div>

                {enquiryErrors.submit && (
                  <p className="text-sm text-destructive">{enquiryErrors.submit}</p>
                )}

                {enquirySuccess && (
                  <p className="text-sm text-green-600">
                    Thank you! Your enquiry has been submitted successfully.
                  </p>
                )}

                <Button type="submit" className="w-full" disabled={submitEnquiryMutation.isPending}>
                  {submitEnquiryMutation.isPending ? 'Submitting...' : 'Submit Enquiry'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Client Feedback</CardTitle>
              <CardDescription>Share your experience working with us.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="feedback-name">Name *</Label>
                  <Input
                    id="feedback-name"
                    value={feedbackForm.name}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                    placeholder="Your full name"
                    className={feedbackErrors.name ? 'border-destructive' : ''}
                  />
                  {feedbackErrors.name && (
                    <p className="text-sm text-destructive mt-1">{feedbackErrors.name}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="feedback-email">Email</Label>
                  <Input
                    id="feedback-email"
                    type="email"
                    value={feedbackForm.email}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className={feedbackErrors.email ? 'border-destructive' : ''}
                  />
                  {feedbackErrors.email && (
                    <p className="text-sm text-destructive mt-1">{feedbackErrors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="feedback-phone">Phone</Label>
                  <Input
                    id="feedback-phone"
                    type="tel"
                    value={feedbackForm.phone}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, phone: e.target.value })}
                    placeholder="+91 1234567890"
                    className={feedbackErrors.phone ? 'border-destructive' : ''}
                  />
                  {feedbackErrors.phone && (
                    <p className="text-sm text-destructive mt-1">{feedbackErrors.phone}</p>
                  )}
                  {feedbackErrors.contact && (
                    <p className="text-sm text-destructive mt-1">{feedbackErrors.contact}</p>
                  )}
                </div>

                <div>
                  <Label>Rating *</Label>
                  <div className="mt-2">
                    {renderStars(feedbackForm.rating, true)}
                  </div>
                  {feedbackErrors.rating && (
                    <p className="text-sm text-destructive mt-1">{feedbackErrors.rating}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="feedback-message">Feedback *</Label>
                  <Textarea
                    id="feedback-message"
                    value={feedbackForm.message}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, message: e.target.value })}
                    placeholder="Share your experience with us..."
                    rows={4}
                    className={feedbackErrors.message ? 'border-destructive' : ''}
                  />
                  {feedbackErrors.message && (
                    <p className="text-sm text-destructive mt-1">{feedbackErrors.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="feedback-suggestions">Suggestions (Optional)</Label>
                  <Textarea
                    id="feedback-suggestions"
                    value={feedbackForm.suggestions}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, suggestions: e.target.value })}
                    placeholder="Any suggestions for improvement?"
                    rows={3}
                  />
                </div>

                {feedbackErrors.submit && (
                  <p className="text-sm text-destructive">{feedbackErrors.submit}</p>
                )}

                {feedbackSuccess && (
                  <p className="text-sm text-green-600">
                    Thank you for your feedback!
                  </p>
                )}

                <Button type="submit" className="w-full" disabled={submitFeedbackMutation.isPending}>
                  {submitFeedbackMutation.isPending ? 'Submitting...' : 'Submit Feedback'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-6">Recent Client Feedback</h2>
          {feedbackLoading ? (
            <p className="text-muted-foreground">Loading feedback...</p>
          ) : feedbackList.length === 0 ? (
            <p className="text-muted-foreground">No feedback yet. Be the first to share your experience!</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {feedbackList.map((feedback) => (
                <Card key={Number(feedback.id)}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{feedback.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {formatTimestamp(feedback.timestampCreated)}
                        </p>
                      </div>
                      {renderStars(Number(feedback.rating))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feedback.message}</p>
                    {feedback.suggestions && (
                      <div className="mt-3 pt-3 border-t">
                        <p className="text-sm font-medium mb-1">Suggestions:</p>
                        <p className="text-sm text-muted-foreground">{feedback.suggestions}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
