'use client';

import { Card, Badge, Heading, Text, Flex, Button } from '@aws-amplify/ui-react';
import { ExternalLink, Calendar } from 'lucide-react';

interface JobCardProps {
  job: {
    id: string;
    companyName: string;
    role: string;
    status: string;
    appliedDate: string;
    domain: string;
  };
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card variation="elevated" className="glass-card border border-white/10 hover:border-canyon-orange/50 transition-all">
      <Flex direction="column" gap="small">
        <Flex justifyContent="space-between" alignItems="center">
          <Badge size="small" variation={job.status === 'Applied' ? 'info' : 'success'}>
            {job.status}
          </Badge>
          <Text fontSize="xs" color="orange.100" className="flex items-center gap-1">
            <Calendar size={12} /> {job.appliedDate}
          </Text>
        </Flex>

        <View>
          <Heading level={4} color="white">{job.companyName}</Heading>
          <Text color="orange.200" fontWeight="bold">{job.role}</Text>
          <Text fontSize="xs" color="white/40" marginTop="4px">{job.domain.replace('_', ' ')}</Text>
        </View>

        <Button 
          gap="xs" 
          size="small" 
          variation="primary" 
          className="bg-canyon-orange mt-2"
          onClick={() => window.open(`/dashboard/applications/${job.id}`, '_self')}
        >
          View Details <ExternalLink size={14} />
        </Button>
      </Flex>
    </Card>
  );
}