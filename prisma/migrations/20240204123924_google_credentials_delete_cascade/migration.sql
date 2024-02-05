-- DropForeignKey
ALTER TABLE "google_credentials" DROP CONSTRAINT "google_credentials_userId_fkey";

-- AddForeignKey
ALTER TABLE "google_credentials" ADD CONSTRAINT "google_credentials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
