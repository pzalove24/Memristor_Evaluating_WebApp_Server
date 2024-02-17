import {
  BenchmarkInformation,
  BenchmarkInput,
  BenchmarkInputSetup,
  BenchmarkMethod,
  BenchmarkType,
  BenchmarkUnit,
  DataType,
  MethodType,
  PrismaClient,
  SetResetVoltageDefinition,
  VoltageType,
  paperReference,
} from '@prisma/client';
import * as fs from 'fs/promises';
import * as path from 'path';
const prisma = new PrismaClient();

async function main() {
  try {
    // Benchmark Seed data
    const voltageTypePath = path.resolve(
      __dirname,
      '../database_seed/benchmark/voltageType/voltageType.seed.json',
    );

    const methodTypePath = path.resolve(
      __dirname,
      '../database_seed/benchmark/methodType/methodType.seed.json',
    );

    const dataTypePath = path.resolve(
      __dirname,
      '../database_seed/benchmark/dataType/dataType.seed.json',
    );

    const setResetVoltageDefinitionPath = path.resolve(
      __dirname,
      '../database_seed/benchmark/setResetVoltageDefinition/setResetVoltageDefinition.seed.json',
    );

    const paperReferencePath = path.resolve(
      __dirname,
      '../database_seed/research/paperReference/paperReference.seed.json',
    );

    const benchmarkUnitPath = path.resolve(
      __dirname,
      '../database_seed/benchmark/benchmarkUnit/benchmarkUnit.seed.json',
    );

    const benchmarkTypePath = path.resolve(
      __dirname,
      '../database_seed/benchmark/benchmarkType/benchmarkType.seed.json',
    );
    const benchmarkInformationPath = path.resolve(
      __dirname,
      '../database_seed/benchmark/benchmarkInformation/benchmarkInformation.seed.json',
    );

    const benchmarkInputPath = path.resolve(
      __dirname,
      '../database_seed/benchmark/benchmarkInput/benchmarkInput.seed.json',
    );

    const benchmarkInputSetupPath = path.resolve(
      __dirname,
      '../database_seed/benchmark/benchmarkInputSetup/benchmarkInputSetup.seed.json',
    );

    const benchmarkMethodPath = path.resolve(
      __dirname,
      '../database_seed/benchmark/benchmarkMethod/benchmarkMethod.seed.json',
    );
    // Read user seed data from file

    const voltageTypes: VoltageType[] = JSON.parse(
      await fs.readFile(voltageTypePath, 'utf-8'),
    );
    const methodTypes: MethodType[] = JSON.parse(
      await fs.readFile(methodTypePath, 'utf-8'),
    );
    const dataTypes: DataType[] = JSON.parse(
      await fs.readFile(dataTypePath, 'utf-8'),
    );

    const setResetVoltageDefinitions: SetResetVoltageDefinition[] = JSON.parse(
      await fs.readFile(setResetVoltageDefinitionPath, 'utf-8'),
    );

    const paperReferences: paperReference[] = JSON.parse(
      await fs.readFile(paperReferencePath, 'utf-8'),
    );

    const benchmarkUnits: BenchmarkUnit[] = JSON.parse(
      await fs.readFile(benchmarkUnitPath, 'utf-8'),
    );

    const benchmarkTypes: BenchmarkType[] = JSON.parse(
      await fs.readFile(benchmarkTypePath, 'utf-8'),
    );
    const benchmarkInformations: BenchmarkInformation[] = JSON.parse(
      await fs.readFile(benchmarkInformationPath, 'utf-8'),
    );

    const benchmarkInputs: BenchmarkInput[] = JSON.parse(
      await fs.readFile(benchmarkInputPath, 'utf-8'),
    );

    const benchmarkInputSetups: BenchmarkInputSetup[] = JSON.parse(
      await fs.readFile(benchmarkInputSetupPath, 'utf-8'),
    );

    const benchmarkMethods: BenchmarkMethod[] = JSON.parse(
      await fs.readFile(benchmarkMethodPath, 'utf-8'),
    );

    await prisma.voltageType.deleteMany();
    await prisma.methodType.deleteMany();
    await prisma.dataType.deleteMany();
    await prisma.setResetVoltageDefinition.deleteMany();
    await prisma.paperReference.deleteMany();
    await prisma.benchmarkMethod.deleteMany();
    await prisma.benchmarkInputSetup.deleteMany();
    await prisma.benchmarkInput.deleteMany();
    await prisma.benchmarkUnit.deleteMany();
    await prisma.benchmarkInformation.deleteMany();
    await prisma.benchmarkType.deleteMany();

    for (const voltageType of voltageTypes) {
      await prisma.voltageType.create({
        data: {
          ...voltageType,
        },
      });
      console.log('Created voltageType Success');
    }

    for (const methodType of methodTypes) {
      await prisma.methodType.create({
        data: {
          ...methodType,
        },
      });
      console.log('Created methodType Success');
    }

    for (const dataType of dataTypes) {
      await prisma.dataType.create({
        data: {
          ...dataType,
        },
      });
      console.log('Created dataType Success');
    }

    for (const setResetVoltageDefinition of setResetVoltageDefinitions) {
      await prisma.setResetVoltageDefinition.create({
        data: {
          ...setResetVoltageDefinition,
        },
      });
      console.log('Created setResetVoltageDefinition Success');
    }

    for (const paperReference of paperReferences) {
      await prisma.paperReference.create({
        data: {
          ...paperReference,
        },
      });
      console.log('Created paperReference success');
    }

    for (const benchmarkUnit of benchmarkUnits) {
      await prisma.benchmarkUnit.create({
        data: {
          ...benchmarkUnit,
        },
      });
      console.log('Created benchmarkUnit success');
    }

    for (const benchmarkType of benchmarkTypes) {
      await prisma.benchmarkType.create({
        data: {
          ...benchmarkType,
        },
      });
      console.log('Created benchmarkType success');
    }

    for (const benchmarkInformation of benchmarkInformations) {
      await prisma.benchmarkInformation.create({
        data: {
          ...benchmarkInformation,
        },
      });
      console.log('Created benchmarkInformation success');
    }

    for (const benchmarkInput of benchmarkInputs) {
      await prisma.benchmarkInput.create({
        data: {
          ...benchmarkInput,
        },
      });
      console.log('Created benchmarkInput success');
    }

    for (const benchmarkInputSetup of benchmarkInputSetups) {
      await prisma.benchmarkInputSetup.create({
        data: {
          ...benchmarkInputSetup,
        },
      });
      console.log('Created benchmarkInputSetup success');
    }

    for (const benchmarkMethod of benchmarkMethods) {
      await prisma.benchmarkMethod.create({
        data: {
          ...benchmarkMethod,
        },
      });
      console.log('Created benchmarkMethod success');
    }

    // for (const setResetVoltageDefinition of setResetVoltageDefinitions) {
    //   const createdSetResetVoltageDefinition =
    //     await prisma.setResetVoltageDefinition.create({
    //       data: {
    //         ...setResetVoltageDefinition,
    //         paperReferences: {
    //           create: paperReferences
    //             .filter(
    //               (info) =>
    //                 info.setResetVoltageDefinitionId ===
    //                 setResetVoltageDefinition.id,
    //             )
    //             .map((info) => ({
    //               ...info,
    //               setResetVoltageDefinitionId: undefined, // Exclude benchmarkTypeId to rely on the relationship
    //             })),
    //         },
    //       },
    //     });

    //   console.log(
    //     `Created BenchmarkType: ${createdSetResetVoltageDefinition.defName}`,
    //   );
    // }

    // // Insert benchmarkType and benchmarkInformation seed data
    // for (const benchmarkType of benchmarkTypes) {
    //   const createdBenchmarkType = await prisma.benchmarkType.create({
    //     data: {
    //       ...benchmarkType,
    //       benchmarkInformations: {
    //         create: benchmarkInformations
    //           .filter((info) => info.benchmarkTypeId === benchmarkType.id)
    //           .map((info) => ({
    //             ...info,
    //             benchmarkMethods: {
    //               create: benchmarkMethods.filter((method) => method),
    //             },
    //             benchmarkTypeId: undefined, // Exclude benchmarkTypeId to rely on the relationship
    //           })),
    //       },
    //     },
    //   });

    //   console.log(
    //     `Created BenchmarkType: ${createdBenchmarkType.benchmarkTypeName}`,
    //   );
    // }

    console.log('Seeding complete');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
