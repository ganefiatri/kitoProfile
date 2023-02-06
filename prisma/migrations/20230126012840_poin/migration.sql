/*
  Warnings:

  - The primary key for the `history` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `history` table. All the data in the column will be lost.
  - Added the required column `phoneId` to the `history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `history` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `history` DROP PRIMARY KEY,
    DROP COLUMN `userId`,
    ADD COLUMN `phoneId` VARCHAR(191) NOT NULL,
    ADD COLUMN `productId` VARCHAR(191) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `product_detail` ADD COLUMN `poin` INTEGER NOT NULL DEFAULT 10;

-- CreateTable
CREATE TABLE `phone_user_poin` (
    `id` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `phone_user_poin_number_key`(`number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `redeem` (
    `id` VARCHAR(191) NOT NULL,
    `redeem_poin` VARCHAR(191) NULL,
    `phoneId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
