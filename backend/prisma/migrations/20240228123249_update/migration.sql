/*
  Warnings:

  - You are about to drop the column `letras` on the `Alternativa` table. All the data in the column will be lost.
  - Added the required column `letra` to the `Alternativa` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Alternativa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "texto" TEXT NOT NULL,
    "letra" TEXT NOT NULL
);
INSERT INTO "new_Alternativa" ("id", "texto") SELECT "id", "texto" FROM "Alternativa";
DROP TABLE "Alternativa";
ALTER TABLE "new_Alternativa" RENAME TO "Alternativa";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
