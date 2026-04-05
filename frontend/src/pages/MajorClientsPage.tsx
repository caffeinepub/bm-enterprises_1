import { Building2 } from 'lucide-react';

export default function MajorClientsPage() {
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

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            And many more satisfied clients across commercial, industrial, and residential sectors.
          </p>
        </div>
      </div>
    </div>
  );
}
