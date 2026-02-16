import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2 } from 'lucide-react';

export default function MajorClientsPage() {
  const clients = [
    'Metropolitan Hospital Network',
    'TechCorp Industries',
    'Riverside Shopping Complex',
    'State University Campus',
    'Global Manufacturing Ltd.',
    'Downtown Business Center',
    'Greenfield Residential Development',
    'City Transit Authority',
    'Premier Hotels Group',
    'Advanced Pharmaceuticals Inc.',
    'Regional Airport Authority',
    'Skyline Office Towers',
  ];

  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Major Clients</h1>
          <p className="text-lg text-muted-foreground">
            BM ENTERPRISES is proud to serve a diverse portfolio of clients across multiple sectors. Our reputation for quality and reliability has made us the preferred electrical contractor for leading organizations.
          </p>
        </div>

        <div className="mb-12">
          <img
            src="/assets/major clients.jpeg"
            alt="BM ENTERPRISES major clients showcase featuring logos of Dhoot Transmissions, NLMK India, Tata Consumer Products, MSEDCL, NMDC, and other leading organizations"
            className="w-full max-w-5xl mx-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Building2 className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">{client}</CardTitle>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            And many more satisfied clients across commercial, industrial, and residential sectors.
          </p>
        </div>
      </div>
    </div>
  );
}
