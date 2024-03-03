-- CreateTable
CREATE TABLE "google_credentials" (
    "id" TEXT NOT NULL,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "scope" TEXT,
    "expiryDate" TEXT,
    "tokenType" TEXT,
    "idToken" TEXT,

    CONSTRAINT "google_credentials_pkey" PRIMARY KEY ("id")
);
