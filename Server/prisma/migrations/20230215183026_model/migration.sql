/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `mesas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `pratos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "mesas_id_key" ON "mesas"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pratos_id_key" ON "pratos"("id");
