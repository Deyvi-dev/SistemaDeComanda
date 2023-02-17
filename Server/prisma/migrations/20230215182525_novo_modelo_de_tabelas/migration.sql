/*
  Warnings:

  - The primary key for the `mesas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `data` on the `mesas` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `mesas` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `mesas` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `pratos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `type` on the `pratos` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `pratos` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `mesa_id` on the `pratos` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `data` to the `pratos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `pratos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_mesas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mesa" INTEGER NOT NULL
);
INSERT INTO "new_mesas" ("id", "mesa") SELECT "id", "mesa" FROM "mesas";
DROP TABLE "mesas";
ALTER TABLE "new_mesas" RENAME TO "mesas";
CREATE TABLE "new_pratos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "obs" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "valor" REAL NOT NULL,
    "mesa_id" INTEGER,
    CONSTRAINT "pratos_mesa_id_fkey" FOREIGN KEY ("mesa_id") REFERENCES "mesas" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_pratos" ("desc", "id", "mesa_id", "name", "obs", "valor") SELECT "desc", "id", "mesa_id", "name", "obs", "valor" FROM "pratos";
DROP TABLE "pratos";
ALTER TABLE "new_pratos" RENAME TO "pratos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
