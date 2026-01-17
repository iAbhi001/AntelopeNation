'use client';

import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function SignupHandler() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const router = useRouter();

  useEffect(() => {
    // If Cognito confirms the user is logged in, move them to the dashboard
    if (authStatus === 'authenticated') {
      router.push('/dashboard/applications');
    }
  }, [authStatus, router]);

  return (
    <div className="text-white text-center">
      <p className="animate-pulse">Finalizing your Antelope account...</p>
    </div>
  );
}

export default function SignupPage() {
  return (
    <View padding="large">
      <Authenticator initialState="signUp">
        <SignupHandler />
      </Authenticator>
    </View>
  );
}