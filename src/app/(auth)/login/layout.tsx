import React from 'react';

// You MUST have 'export default' and it MUST return JSX
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="login-wrapper">
      {/* Layout code here */}
      {children}
    </section>
  );
}