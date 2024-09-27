/*
  Warnings:

  - You are about to drop the `VerificationRequest` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "ProfileId" TEXT;

-- DropTable
DROP TABLE "VerificationRequest";
