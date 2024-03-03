/*
  Warnings:

  - Added the required column `email` to the `google_credentials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "google_credentials" ADD COLUMN     "email" TEXT NOT NULL;
