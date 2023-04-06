/*
  Warnings:

  - You are about to drop the `subCategorythird` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `subCategorythird`;

-- CreateTable
CREATE TABLE `sub_category_third` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `subcatId` VARCHAR(191) NULL,

    UNIQUE INDEX `sub_category_third_name_key`(`name`),
    FULLTEXT INDEX `sub_category_third_name_idx`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
