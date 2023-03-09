/*
  Warnings:

  - Added the required column `jenis` to the `customer_poin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer_poin` ADD COLUMN `jenis` VARCHAR(191) NOT NULL;
