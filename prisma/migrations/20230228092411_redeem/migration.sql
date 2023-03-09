/*
  Warnings:

  - You are about to drop the column `phoneId` on the `redeem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `redeem` DROP COLUMN `phoneId`,
    ADD COLUMN `userId` VARCHAR(191) NULL;
