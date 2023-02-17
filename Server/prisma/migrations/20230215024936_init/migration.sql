-- CreateTable
CREATE TABLE "mesas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mesa" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "state" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Prato" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "obs" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "mesa_id" TEXT,
    CONSTRAINT "Prato_mesa_id_fkey" FOREIGN KEY ("mesa_id") REFERENCES "mesas" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
