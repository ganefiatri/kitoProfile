-- CreateTable
CREATE TABLE `history_poin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tgl` VARCHAR(191) NOT NULL,
    `jenis` VARCHAR(191) NOT NULL,
    `no_faktur` VARCHAR(191) NOT NULL,
    `no_cust` VARCHAR(191) NOT NULL,
    `nama_cust` VARCHAR(191) NOT NULL,
    `qty` VARCHAR(191) NOT NULL,
    `unit` VARCHAR(191) NOT NULL,
    `bns` VARCHAR(191) NOT NULL,
    `kode_stock` VARCHAR(191) NOT NULL,
    `nama_stock` VARCHAR(191) NOT NULL,
    `sls` VARCHAR(191) NOT NULL,
    `harga` VARCHAR(191) NOT NULL,
    `disc` VARCHAR(191) NOT NULL,
    `biaya` VARCHAR(191) NOT NULL,
    `jumlah` VARCHAR(191) NOT NULL,
    `loc` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
