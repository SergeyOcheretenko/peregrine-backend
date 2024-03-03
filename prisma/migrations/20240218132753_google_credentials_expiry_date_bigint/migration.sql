/*
  Warnings:

  - The `expiryDate` column on the `google_credentials` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "google_credentials" DROP COLUMN "expiryDate",
ADD COLUMN     "expiryDate" BIGINT;
