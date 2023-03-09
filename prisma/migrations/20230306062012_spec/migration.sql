-- CreateTable
CREATE TABLE `spesification` (
    `id` VARCHAR(191) NOT NULL,
    `titleOne` VARCHAR(191) NULL,
    `titleTwo` VARCHAR(191) NULL,
    `titleThree` VARCHAR(191) NULL,
    `titleFour` VARCHAR(191) NULL,
    `titleFive` VARCHAR(191) NULL,
    `answerOne` VARCHAR(191) NULL,
    `answerTwo` VARCHAR(191) NULL,
    `answerThree` VARCHAR(191) NULL,
    `answerFour` VARCHAR(191) NULL,
    `answerFive` VARCHAR(191) NULL,
    `productId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
