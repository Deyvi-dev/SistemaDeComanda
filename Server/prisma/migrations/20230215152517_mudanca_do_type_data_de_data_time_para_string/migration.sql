-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_mesas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mesa" INTEGER NOT NULL,
    "data" TEXT NOT NULL,
    "state" TEXT NOT NULL
);
INSERT INTO "new_mesas" ("data", "id", "mesa", "state") SELECT "data", "id", "mesa", "state" FROM "mesas";
DROP TABLE "mesas";
ALTER TABLE "new_mesas" RENAME TO "mesas";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
