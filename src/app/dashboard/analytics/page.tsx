'use client';

import { Heading, View, Text } from '@aws-amplify/ui-react';

// You MUST have 'export default' for Next.js to render the route
export default function AnalyticsPage() {
  return (
    <View className="p-8">
      <Heading level={2} color="white">Career Analytics</Heading>
      <Text color="white/70" marginTop="1rem">
        This is where your job application trends will appear.
      </Text>
    </View>
  );
}