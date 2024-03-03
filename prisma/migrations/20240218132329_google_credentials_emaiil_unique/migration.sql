/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `google_credentials` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "google_credentials_email_key" ON "google_credentials"("email");
