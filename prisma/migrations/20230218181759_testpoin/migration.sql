/*
  Warnings:

  - Added the required column `kind` to the `customer_poin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer_poin` ADD COLUMN `kind` INTEGER NOT NULL,
    MODIFY `total_ar` BIGINT NOT NULL;
