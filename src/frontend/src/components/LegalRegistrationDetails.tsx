import { FileText, Building2, Shield, Users } from 'lucide-react';

export default function LegalRegistrationDetails() {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold">Legal & Registration Details</h3>
      <div className="flex flex-col space-y-3 text-sm text-muted-foreground">
        <div className="flex items-start space-x-2">
          <FileText className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-medium text-foreground">GSTIN:</span> 27FDNPD6723C1ZM
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <Building2 className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-medium text-foreground">UDYAM Reg. No.:</span> UDYAM-MH-04-0083847
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <Shield className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-medium text-foreground">PF No.:</span> NGAUR2742358000
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <Users className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-medium text-foreground">ESIC ID:</span> 33250230640011099
          </div>
        </div>
      </div>
    </div>
  );
}
