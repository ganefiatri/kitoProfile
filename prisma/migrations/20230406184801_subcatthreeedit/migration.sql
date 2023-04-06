/*
  Warnings:

  - You are about to drop the `subCategoryThird` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `subCategoryThird`;

-- CreateTable
CREATE TABLE `subCategorythird` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `subcatId` VARCHAR(191) NULL,

    UNIQUE INDEX `subCategorythird_name_key`(`name`),
    FULLTEXT INDEX `subCategorythird_name_idx`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
