-- AlterTable
ALTER TABLE `product_detail` ADD COLUMN `brand_id` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `subCategoryThird` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `subcatId` VARCHAR(191) NULL,

    UNIQUE INDEX `subCategoryThird_name_key`(`name`),
    FULLTEXT INDEX `subCategoryThird_name_idx`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `brands` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `brands_name_key`(`name`),
    FULLTEXT INDEX `brands_name_idx`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
