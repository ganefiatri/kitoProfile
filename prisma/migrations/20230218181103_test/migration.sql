/*
  Warnings:

  - You are about to alter the column `giro_no` on the `customer_poin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `phone1` on the `customer_poin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.

*/
-- AlterTable
ALTER TABLE `customer_poin` MODIFY `giro_no` INTEGER NOT NULL,
    MODIFY `phone1` BIGINT NOT NULL;
