'use client';

import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../../../amplify/data/resource';
import JobCard from '@/components/JobCard';
import { 
  Grid, 
  Loader, 
  Heading, 
  View, 
  Flex, 
  Text 
} from '@aws-amplify/ui-react'; // Added missing Flex and Text

// Generate the type-safe data client
const client = generateClient<Schema>();

export default function ApplicationsPage() {
  const [jobs, setJobs] = useState<Schema['Job']['type'][]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch jobs from DynamoDB on mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await client.models.Job.list();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // Show a centered loading spinner if data is fetching
  if (loading) {
    return (
      <Flex justifyContent="center" alignItems="center" height="50vh">
        <Loader size="large" />
      </Flex>
    );
  }

  return (
    <View className="space-y-6 p-4">
      <Heading level={2} color="white">My Career Canyon</Heading>
      
      {jobs.length === 0 ? (
        <Flex 
          direction="column" 
          alignItems="center" 
          padding="xl" 
          className="glass-card border-dashed border-2 border-white/10"
        >
          <Text color="white/60">No applications tracked yet. Start your journey!</Text>
        </Flex>
      ) : (
        <Grid 
          templateColumns={{ base: '1fr', medium: '1fr 1fr', large: '1fr 1fr 1fr' }} 
          gap="1rem"
        >
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </Grid>
      )}
    </View>
  );
}