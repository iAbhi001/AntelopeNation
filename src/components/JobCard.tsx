import { Badge } from "lucide-react";

// src/components/JobCard.tsx
interface JobCardProps {
  job: {
    id: string;
    companyName: string;
    role: string;
    status?: string | null; // Add '?' and '| null'
    appliedDate?: string | null;
    domain?: string | null;
  };
}

// In your component, provide a fallback for optional fields
export const JobCard = ({ job }: JobCardProps) => {
  return <Badge>{job.status || 'Pending'}</Badge>;
};