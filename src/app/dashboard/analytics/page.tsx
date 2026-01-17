'use client';

import { Heading, View, Text } from '@aws-amplify/ui-react';

export default function AnalyticsPage() {
  return (
    <View className="space-y-6 p-4">
      <Heading level={2} color="white">Career Insights</Heading>
      <Text color="white/70">Your application data visualization will appear here.</Text>
    </View>
  );
}