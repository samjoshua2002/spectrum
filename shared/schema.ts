import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const solarCalculations = pgTable("solar_calculations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  buildingType: text("building_type").notNull(),
  numberOfFloors: text("number_of_floors").notNull(),
  roofType: text("roof_type").notNull(),
  sanctionedLoad: text("sanctioned_load").notNull(),
  monthlyBill: text("monthly_bill").notNull(),
  location: text("location").notNull(),
  systemSize: text("system_size"),
  totalCost: text("total_cost"),
  subsidyAmount: text("subsidy_amount"),
  finalCost: text("final_cost"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  phone: true,
  message: true,
});

export const insertSolarCalculationSchema = createInsertSchema(solarCalculations).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertSolarCalculation = z.infer<typeof insertSolarCalculationSchema>;
export type SolarCalculation = typeof solarCalculations.$inferSelect;
