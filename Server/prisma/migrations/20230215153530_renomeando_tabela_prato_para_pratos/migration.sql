/*
  Warnings:

  - You are about to drop the `Prato` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Prato";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "pratos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "obs" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "mesa_id" TEXT,
    CONSTRAINT "pratos_mesa_id_fkey" FOREIGN KEY ("mesa_id") REFERENCES "mesas" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
