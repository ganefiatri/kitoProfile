/*
  Warnings:

  - Made the column `loc` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ar_type` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ar_no` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ar_date` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `due_date` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cust_code` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `total_ar` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `payment` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `giro_rls` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `giro_no` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ar_notemp` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ac_code` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `seri_id` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `flag_gl` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `flag_giro` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status_giro` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `giro` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `flag_gl_cair` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ac_biaya` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `biaya` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cust_name` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sales_code` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sisa` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone1` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `due` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `jual` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `retur_panjar` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `periode` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `keterangan` on table `customer_poin` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `customer_poin` MODIFY `loc` VARCHAR(191) NOT NULL,
    MODIFY `ar_type` VARCHAR(191) NOT NULL,
    MODIFY `ar_no` VARCHAR(191) NOT NULL,
    MODIFY `ar_date` INTEGER NOT NULL,
    MODIFY `due_date` INTEGER NOT NULL,
    MODIFY `cust_code` VARCHAR(191) NOT NULL,
    MODIFY `total_ar` INTEGER NOT NULL,
    MODIFY `payment` BIGINT NOT NULL,
    MODIFY `giro_rls` INTEGER NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL,
    MODIFY `giro_no` VARCHAR(191) NOT NULL,
    MODIFY `ar_notemp` VARCHAR(191) NOT NULL,
    MODIFY `ac_code` VARCHAR(191) NOT NULL,
    MODIFY `seri_id` INTEGER NOT NULL,
    MODIFY `status` VARCHAR(191) NOT NULL,
    MODIFY `flag_gl` VARCHAR(191) NOT NULL,
    MODIFY `flag_giro` INTEGER NOT NULL,
    MODIFY `status_giro` VARCHAR(191) NOT NULL,
    MODIFY `giro` INTEGER NOT NULL,
    MODIFY `flag_gl_cair` VARCHAR(191) NOT NULL,
    MODIFY `ac_biaya` INTEGER NOT NULL,
    MODIFY `biaya` INTEGER NOT NULL,
    MODIFY `cust_name` VARCHAR(191) NOT NULL,
    MODIFY `sales_code` VARCHAR(191) NOT NULL,
    MODIFY `sisa` BIGINT NOT NULL,
    MODIFY `phone1` VARCHAR(191) NOT NULL,
    MODIFY `due` INTEGER NOT NULL,
    MODIFY `jual` BIGINT NOT NULL,
    MODIFY `retur_panjar` INTEGER NOT NULL,
    MODIFY `periode` BIGINT NOT NULL,
    MODIFY `keterangan` VARCHAR(191) NOT NULL;
