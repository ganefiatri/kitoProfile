/*
  Warnings:

  - The primary key for the `project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `description` on the `project` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `project` table. All the data in the column will be lost.
  - The primary key for the `stores` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `title` on the `stores` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `stores` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `stores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `project` DROP PRIMARY KEY,
    DROP COLUMN `description`,
    DROP COLUMN `title`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `place` VARCHAR(191) NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `stores` DROP PRIMARY KEY,
    DROP COLUMN `title`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `project_name_key` ON `project`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `stores_name_key` ON `stores`(`name`);
