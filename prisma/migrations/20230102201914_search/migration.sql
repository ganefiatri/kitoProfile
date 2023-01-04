-- CreateIndex
CREATE FULLTEXT INDEX `product_title_idx` ON `product`(`title`);

-- CreateIndex
CREATE FULLTEXT INDEX `subCategory_name_idx` ON `subCategory`(`name`);
