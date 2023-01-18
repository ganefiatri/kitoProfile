/*
  Warnings:

  - You are about to drop the column `price` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `subCategoryId` on the `product` table. All the data in the column will be lost.
  - Added the required column `code` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `price`,
    DROP COLUMN `subCategoryId`,
    ADD COLUMN `code` VARCHAR(191) NOT NULL,
    ADD COLUMN `group` ENUM('HOSANA', 'KITO') NOT NULL DEFAULT 'HOSANA';

-- CreateTable
CREATE TABLE `units` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `units_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_detail` (
    `id` VARCHAR(191) NOT NULL,
    `product_id` VARCHAR(191) NULL,
    `unit_id` VARCHAR(191) NULL,
    `store_id` VARCHAR(191) NULL,
    `subCategoryId` VARCHAR(191) NULL,
    `discount` VARCHAR(191) NULL,
    `price` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE FULLTEXT INDEX `category_name_idx` ON `category`(`name`);
