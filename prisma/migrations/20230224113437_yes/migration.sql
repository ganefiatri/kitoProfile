/*
  Warnings:

  - You are about to drop the column `customerId` on the `user` table. All the data in the column will be lost.
  - Added the required column `userId` to the `customer_poin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer_poin` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `customerId`;
