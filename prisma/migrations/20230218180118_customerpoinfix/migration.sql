/*
  Warnings:

  - You are about to alter the column `ar_date` on the `customer_poin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `due_date` on the `customer_poin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `total_ar` on the `customer_poin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `payment` on the `customer_poin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.
  - You are about to alter the column `giro_rls` on the `customer_poin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `seri_id` on the `customer_poin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `flag_giro` on the `customer_poin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `giro` on the `customer_poin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `ac_biaya` on the `customer_poin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `biaya` on the `customer_poin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `due` on the `customer_poin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `retur_panjar` on the `customer_poin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `periode` on the `customer_poin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.

*/
-- AlterTable
ALTER TABLE `customer_poin` MODIFY `ar_date` INTEGER NULL,
    MODIFY `due_date` INTEGER NULL,
    MODIFY `total_ar` INTEGER NULL,
    MODIFY `payment` BIGINT NULL,
    MODIFY `giro_rls` INTEGER NULL,
    MODIFY `seri_id` INTEGER NULL,
    MODIFY `flag_giro` INTEGER NULL,
    MODIFY `giro` INTEGER NULL,
    MODIFY `ac_biaya` INTEGER NULL,
    MODIFY `biaya` INTEGER NULL,
    MODIFY `phone1` VARCHAR(191) NULL,
    MODIFY `due` INTEGER NULL,
    MODIFY `retur_panjar` INTEGER NULL,
    MODIFY `periode` BIGINT NULL;
