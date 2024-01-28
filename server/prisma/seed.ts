import {
  BenchmarkInformation,
  BenchmarkType,
  PrismaClient,
  SetResetVoltageDefinition,
  paperReference,
} from '@prisma/client';
import fs from 'fs/promises';
import path from 'path';
const prisma = new PrismaClient();
// async function main() {
//   const alice = await prisma.user.upsert({
//     where: { email: "alice@prisma.io" },
//     update: {},
//     create: {
//       email: "alice@prisma.io",
//       username: "Alice",
//       posts: {
//         create: {
//           title: "Check out Prisma with Next.js",
//           content: "https://www.prisma.io/nextjs",
//         },
//       },
//     },
//   });
//   const bob = await prisma.user.upsert({
//     where: { email: "bob@prisma.io" },
//     update: {},
//     create: {
//       email: "bob@prisma.io",
//       username: "Bob",
//       posts: {
//         create: [
//           {
//             title: "Follow Prisma on Twitter",
//             content: "https://twitter.com/prisma",

//           },
//           {
//             title: "Follow Nexus on Twitter",
//             content: "https://twitter.com/nexusgql",

//           },
//         ],
//       },
//     },
//   });
//   console.log({ alice, bob });
// }

async function main() {
  try {
    // Resolve the absolute path to the JSON files
    const usersPath = path.resolve(__dirname, '../database_seed/users.json');
    const postsPath = path.resolve(__dirname, '../database_seed/posts.json');
    const commentsPath = path.resolve(
      __dirname,
      '../database_seed/comments.json',
    );

    // Read user seed data from file
    const users = JSON.parse(await fs.readFile(usersPath, 'utf-8'));

    // Read post seed data from file
    const posts = JSON.parse(await fs.readFile(postsPath, 'utf-8'));

    // Read comment seed data from file
    const comments = JSON.parse(await fs.readFile(commentsPath, 'utf-8'));

    console.log('users', users);
    console.log('posts', posts);
    console.log('comments', comments);

    // // Insert users from seed data
    // for (const user of users) {
    //   await prisma.user.create({
    //     data: user,
    //   });
    // }

    // // Insert posts from seed data
    // for (const post of posts) {
    //   // Create the post without comments first
    //   const { comments: postComments, ...postWithoutComments } = post;
    //   const createdPost = await prisma.post.create({
    //     data: postWithoutComments,
    //   });

    //   // Filter comments for the current post
    //   const postCommentsForCurrentPost = comments.filter(
    //     (comment: any) => comment.postId === post.id
    //   );

    //   // Create comments for the post
    //   for (const comment of postCommentsForCurrentPost) {
    //     await prisma.comment.create({
    //       data: {
    //         ...comment,
    //         postId: createdPost.id,
    //       },
    //     });
    //   }
    // }

    // Benchmark Seed data
    const setResetVoltageDefinitionPath = path.resolve(
      __dirname,
      '../database_seed/benchmark/setResetVoltageDefinition/setResetVoltageDefinition.seed.json',
    );
    const benchmarkTypePath = path.resolve(
      __dirname,
      '../database_seed/benchmark/benchmarkType/benchmarkType.seed.json',
    );
    const benchmarkInformationPath = path.resolve(
      __dirname,
      '../database_seed/benchmark/benchmarkInformation/benchmarkInformation.seed.json',
    );

    const paperReferencePath = path.resolve(
      __dirname,
      '../database_seed/research/paperReference/paperReference.seed.json',
    );

    // Read user seed data from file

    const setResetVoltageDefinitions: SetResetVoltageDefinition[] = JSON.parse(
      await fs.readFile(setResetVoltageDefinitionPath, 'utf-8'),
    );

    const benchmarkTypes: BenchmarkType[] = JSON.parse(
      await fs.readFile(benchmarkTypePath, 'utf-8'),
    );
    const benchmarkInformations: BenchmarkInformation[] = JSON.parse(
      await fs.readFile(benchmarkInformationPath, 'utf-8'),
    );

    const paperReferences: paperReference[] = JSON.parse(
      await fs.readFile(paperReferencePath, 'utf-8'),
    );

    //กำลังทำให้ seed ไม่ต้องใช้ list เก็บซ้ำซาก

    // // Insert users and liked posts seed data
    // for (const setResetVoltageDefinition of setResetVoltageDefinitions) {
    //   const createdSetResetVoltageDefinition = await prisma.setResetVoltageDefinition.upsert({
    //     where: { setResetVoltageDefId: setResetVoltageDefinition.setResetVoltageDefId },
    //     update: {},
    //     create: {
    //       ...setResetVoltageDefinition,
    //       paperReferences: {
    //         connect: paperReferences.map(paperReferenceId => ({ paperReferenceId: paperReferenceId })),
    //       },
    //     },
    //   });

    //   console.log(`Created User: ${createdUser.username}`);
    // }

    // for (const setResetVoltageDefinition of setResetVoltageDefinitions) {
    //   const createdSetResetVoltageDefinition =
    //     await prisma.setResetVoltageDefinition.create({
    //       data: {
    //         ...setResetVoltageDefinition,
    //         paperReferences: {
    //           create: paperReferences
    //             .filter(
    //               (info) =>
    //                 info.setResetVoltageDefId ===
    //                 setResetVoltageDefinition.setResetVoltageDefId
    //             )
    //             .map((info) => ({
    //               ...info,
    //               setResetVoltageDefId: undefined, // Exclude benchmarkTypeId to rely on the relationship
    //             })),
    //         },
    //       },
    //     });

    //   console.log(
    //     `Created BenchmarkType: ${createdSetResetVoltageDefinition.defName}`
    //   );
    // }

    // // Insert benchmarkType and benchmarkInformation seed data
    // for (const benchmarkType of benchmarkTypes) {
    //   const createdBenchmarkType = await prisma.benchmarkType.create({
    //     data: {
    //       ...benchmarkType,
    //       benchmarkInformations: {
    //         create: benchmarkInformations
    //           .filter(
    //             (info) => info.benchmarkTypeId === benchmarkType.benchmarkTypeId
    //           )
    //           .map((info) => ({
    //             ...info,
    //             benchmarkTypeId: undefined, // Exclude benchmarkTypeId to rely on the relationship
    //           })),
    //       },
    //     },
    //   });

    //   console.log(
    //     `Created BenchmarkType: ${createdBenchmarkType.benchmarkTypeName}`
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
