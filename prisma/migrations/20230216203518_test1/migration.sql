-- DropIndex
DROP INDEX `phone_user_poin_number_key` ON `phone_user_poin`;

-- AlterTable
ALTER TABLE `phone_user_poin` MODIFY `number` INTEGER NULL;
