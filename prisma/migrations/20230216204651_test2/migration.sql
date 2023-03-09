/*
  Warnings:

  - Made the column `number` on table `phone_user_poin` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `phone_user_poin` MODIFY `number` BIGINT NOT NULL;
