-- AlterTable
ALTER TABLE `customer_poin` MODIFY `ar_date` VARCHAR(191) NOT NULL,
    MODIFY `due_date` VARCHAR(191) NOT NULL,
    MODIFY `total_ar` VARCHAR(191) NOT NULL,
    MODIFY `payment` VARCHAR(191) NOT NULL,
    MODIFY `giro_rls` VARCHAR(191) NOT NULL,
    MODIFY `giro_no` VARCHAR(191) NOT NULL,
    MODIFY `seri_id` VARCHAR(191) NOT NULL,
    MODIFY `flag_giro` VARCHAR(191) NOT NULL,
    MODIFY `giro` VARCHAR(191) NOT NULL,
    MODIFY `ac_biaya` VARCHAR(191) NOT NULL,
    MODIFY `biaya` VARCHAR(191) NOT NULL,
    MODIFY `sisa` VARCHAR(191) NOT NULL,
    MODIFY `phone1` VARCHAR(191) NOT NULL,
    MODIFY `due` VARCHAR(191) NOT NULL,
    MODIFY `jual` VARCHAR(191) NOT NULL,
    MODIFY `retur_panjar` VARCHAR(191) NOT NULL,
    MODIFY `periode` VARCHAR(191) NOT NULL,
    MODIFY `kind` VARCHAR(191) NOT NULL;