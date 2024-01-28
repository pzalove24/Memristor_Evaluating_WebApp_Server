-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Comment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BenchmarkType" (
    "benchmarkTypeId" TEXT NOT NULL PRIMARY KEY,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "benchmarkTypeName" TEXT NOT NULL,
    "voltageType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BenchmarkInformation" (
    "benchmarkInformationId" TEXT NOT NULL PRIMARY KEY,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "benchmarkInfoName" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "voltageType" TEXT NOT NULL,
    "benchmarkTypeId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BenchmarkInformation_benchmarkTypeId_fkey" FOREIGN KEY ("benchmarkTypeId") REFERENCES "BenchmarkType" ("benchmarkTypeId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BenchmarkInput" (
    "benchmarkInputId" TEXT NOT NULL PRIMARY KEY,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "benchmarkInputName" TEXT NOT NULL,
    "voltageType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BenchmarkInputSetup" (
    "benchmarkInputSetupId" TEXT NOT NULL PRIMARY KEY,
    "benchmarkUnitId" TEXT,
    "benchmarkInputSetupName" TEXT NOT NULL,
    "voltageType" TEXT NOT NULL,
    "dataType" TEXT NOT NULL,
    "decimalNumber" INTEGER NOT NULL,
    "exampleData" REAL NOT NULL,
    "upperLimit" REAL NOT NULL,
    "lowerLimit" REAL NOT NULL,
    "stepIncreasing" REAL NOT NULL,
    "benchmarkInputId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BenchmarkInputSetup_benchmarkUnitId_fkey" FOREIGN KEY ("benchmarkUnitId") REFERENCES "BenchmarkUnit" ("benchmarkUnitId") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "BenchmarkInputSetup_benchmarkInputId_fkey" FOREIGN KEY ("benchmarkInputId") REFERENCES "BenchmarkInput" ("benchmarkInputId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BenchmarkUnit" (
    "benchmarkUnitId" TEXT NOT NULL PRIMARY KEY,
    "unitName" TEXT NOT NULL,
    "unitType" TEXT NOT NULL,
    "benchmarkSetupType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BenchmarkMethod" (
    "benchmarkMethodId" TEXT NOT NULL PRIMARY KEY,
    "benchmarkInputId" TEXT NOT NULL,
    "benchmarkUnitId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "benchmarkMethodName" TEXT NOT NULL,
    "methodType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BenchmarkMethod_benchmarkInputId_fkey" FOREIGN KEY ("benchmarkInputId") REFERENCES "BenchmarkInput" ("benchmarkInputId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BenchmarkMethod_benchmarkUnitId_fkey" FOREIGN KEY ("benchmarkUnitId") REFERENCES "BenchmarkUnit" ("benchmarkUnitId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BenchmarkResult" (
    "benchmarkResultId" TEXT NOT NULL PRIMARY KEY,
    "benchmarkName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "SetResetVoltageDefinition" (
    "setResetVoltageDefId" TEXT NOT NULL PRIMARY KEY,
    "defName" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "paperReference" (
    "paperReferenceId" TEXT NOT NULL PRIMARY KEY,
    "article" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "SetResetVoltageDefinitionPaperReference" (
    "setResetVoltageDefinitionPaperReferenceId" TEXT NOT NULL PRIMARY KEY,
    "setResetVoltageDefId" TEXT NOT NULL,
    "paperReferenceId" TEXT,
    CONSTRAINT "SetResetVoltageDefinitionPaperReference_setResetVoltageDefId_fkey" FOREIGN KEY ("setResetVoltageDefId") REFERENCES "SetResetVoltageDefinition" ("setResetVoltageDefId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SetResetVoltageDefinitionPaperReference_paperReferenceId_fkey" FOREIGN KEY ("paperReferenceId") REFERENCES "paperReference" ("paperReferenceId") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BenchmarkResult_benchmarkName_key" ON "BenchmarkResult"("benchmarkName");
