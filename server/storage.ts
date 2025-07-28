import { type ContactSubmission, type InsertContactSubmission } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private submissions: Map<string, ContactSubmission>;

  constructor() {
    this.submissions = new Map();
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = { 
      ...insertSubmission,
      phone: insertSubmission.phone || null,
      eventDate: insertSubmission.eventDate || null,
      location: insertSubmission.location || null,
      serviceType: insertSubmission.serviceType || null,
      message: insertSubmission.message || null,
      id,
      createdAt: new Date()
    };
    this.submissions.set(id, submission);
    return submission;
  }
}

export const storage = new MemStorage();
