'use client';

import { useState } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../../amplify/data/resource';
import { toast, Toaster } from 'react-hot-toast'; // Run: npm install react-hot-toast

const client = generateClient<Schema>();

export default function JobEntryForm({ onSuccess }: { onSuccess: () => void }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const { errors } = await client.models.Job.create({
        companyName: formData.get('company') as string,
        role: formData.get('role') as string,
        domain: formData.get('domain') as string,
        status: 'Applied',
        appliedDate: new Date().toISOString().split('T')[0],
      });

      if (errors) throw errors;

      toast.success('Application tracked successfully! 🌵');
      onSuccess(); // Close modal or clear form
    } catch (err) {
      toast.error('Failed to save. Try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form fields here */}
        <button disabled={loading} className="w-full bg-canyon-orange py-3 font-bold text-white">
          {loading ? 'Saving...' : 'Log Application'}
        </button>
      </form>
    </>
  );
}