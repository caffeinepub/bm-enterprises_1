import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Award, BookOpen, Users } from 'lucide-react';

export default function QualitySafetyPolicyPage() {
  return (
    <div className="py-16">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Quality and Safety Policy</h1>
          <p className="text-lg text-muted-foreground">
            At BM ENTERPRISES, quality and safety are not just priorities—they are the foundation of everything we do.
          </p>
        </div>

        <div className="mb-12">
          <img
            src="/assets/safety policy.jpeg"
            alt="BM Enterprises electrical safety team conducting site inspection with proper PPE and safety protocols"
            className="w-full max-w-5xl mx-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Quality Commitment</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We are committed to delivering electrical services of the highest quality. Our quality management system ensures that every project meets or exceeds industry standards and client expectations.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use of premium-grade materials and equipment from certified suppliers</li>
                <li>Adherence to international electrical codes and standards</li>
                <li>Rigorous quality control inspections at every project phase</li>
                <li>Continuous improvement through feedback and performance monitoring</li>
                <li>Documentation and traceability of all work performed</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Safety Commitment</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Safety is paramount in all our operations. We maintain a zero-tolerance policy for unsafe practices and are dedicated to protecting our employees, clients, and the public.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Comprehensive safety training for all personnel</li>
                <li>Regular safety audits and hazard assessments</li>
                <li>Provision of appropriate personal protective equipment (PPE)</li>
                <li>Strict adherence to OSHA and local safety regulations</li>
                <li>Emergency response procedures and incident reporting systems</li>
                <li>Lockout/tagout procedures for electrical work</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <BookOpen className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Compliance and Standards</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                BM ENTERPRISES maintains full compliance with all applicable electrical codes, regulations, and industry standards. Our work is regularly inspected and certified by relevant authorities.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>National Electrical Code (NEC) compliance</li>
                <li>Local building and electrical codes</li>
                <li>Environmental regulations and sustainability practices</li>
                <li>Industry-specific standards (IEEE, NFPA, etc.)</li>
                <li>Regular license renewals and certifications</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Training and Development</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We invest in our team's continuous professional development to ensure they remain at the forefront of electrical technology and safety practices.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Ongoing technical training and skill development programs</li>
                <li>Safety certification and recertification courses</li>
                <li>Workshops on new technologies and industry best practices</li>
                <li>Mentorship programs for junior electricians</li>
                <li>Regular toolbox talks and safety meetings</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
