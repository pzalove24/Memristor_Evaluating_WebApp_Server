/*
  Warnings:

  - You are about to drop the column `setResetVoltageDefId` on the `paperReference` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "SetResetVoltageDefinitionPaperReference" (
    "setResetVoltageDefinitionPaperReferenceId" TEXT NOT NULL PRIMARY KEY,
    "setResetVoltageDefId" TEXT NOT NULL,
    "paperReferenceId" TEXT,
    CONSTRAINT "SetResetVoltageDefinitionPaperReference_setResetVoltageDefId_fkey" FOREIGN KEY ("setResetVoltageDefId") REFERENCES "SetResetVoltageDefinition" ("setResetVoltageDefId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SetResetVoltageDefinitionPaperReference_paperReferenceId_fkey" FOREIGN KEY ("paperReferenceId") REFERENCES "paperReference" ("paperReferenceId") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_paperReference" (
    "paperReferenceId" TEXT NOT NULL PRIMARY KEY,
    "article" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_paperReference" ("article", "createdAt", "paperReferenceId", "updatedAt", "url") SELECT "article", "createdAt", "paperReferenceId", "updatedAt", "url" FROM "paperReference";
DROP TABLE "paperReference";
ALTER TABLE "new_paperReference" RENAME TO "paperReference";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
