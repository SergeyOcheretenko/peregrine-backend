-- CreateTable
CREATE TABLE "google_credentials" (
    "id" TEXT NOT NULL,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "scope" TEXT,
    "expiryDate" TEXT,
    "tokenType" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "google_credentials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "google_credentials_userId_key" ON "google_credentials"("userId");

-- AddForeignKey
ALTER TABLE "google_credentials" ADD CONSTRAINT "google_credentials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
