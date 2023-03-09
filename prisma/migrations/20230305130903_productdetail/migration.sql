/*
  Warnings:

  - You are about to drop the column `expiredAt` on the `product_detail` table. All the data in the column will be lost.
  - You are about to drop the column `poin` on the `product_detail` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product_detail` DROP COLUMN `expiredAt`,
    DROP COLUMN `poin`;
