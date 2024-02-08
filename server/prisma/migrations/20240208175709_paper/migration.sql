/*
  Warnings:

  - You are about to drop the `SetResetVoltageDefinitionPaperReference` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "SetResetVoltageDefinitionPaperReference";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_paperReference" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "setResetVoltageDefinitionId" TEXT,
    "article" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "paperReference_setResetVoltageDefinitionId_fkey" FOREIGN KEY ("setResetVoltageDefinitionId") REFERENCES "SetResetVoltageDefinition" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_paperReference" ("article", "createdAt", "id", "updatedAt", "url") SELECT "article", "createdAt", "id", "updatedAt", "url" FROM "paperReference";
DROP TABLE "paperReference";
ALTER TABLE "new_paperReference" RENAME TO "paperReference";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
