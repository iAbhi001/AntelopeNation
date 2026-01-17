import { generateClient } from 'aws-amplify/data';
import { uploadData } from 'aws-amplify/storage';
import type { Schema } from '../../amplify/data/resource';

const client = generateClient<Schema>();

export const jobService = {
  // Logic to handle the full creation flow
  async createFullApplication(formData: any, file: File | null) {
    try {
      // 1. Create Job in DynamoDB
      const { data: newJob, errors } = await client.models.Job.create({
        companyName: formData.company,
        role: formData.role,
        domain: formData.domain,
        status: 'Applied',
        applicationLink: formData.link,
        locationCity: formData.city,
        locationState: formData.state,
        appliedDate: new Date().toISOString().split('T')[0],
      });

      if (errors || !newJob) throw new Error("Failed to create job record");

      // 2. Upload Resume to S3 if it exists
      if (file) {
        const uploadResult = await uploadData({
          path: `resumes/${newJob.id}/${file.name}`,
          data: file,
        }).result;

        // 3. Update the Job record with the S3 Path
        await client.models.Job.update({
          id: newJob.id,
          resumeUrl: uploadResult.path
        });
      }

      return newJob;
    } catch (error) {
      console.error("Critical error in job creation:", error);
      throw error;
    }
  }
};