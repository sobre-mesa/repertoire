import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      name: 'User One',
      password: 'password123',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'user2@example.com',
      name: 'User Two',
      password: 'password456',
    },
  });

  // Create artists
  const artist1 = await prisma.artist.create({
    data: {
      name: 'Nirvana',
    },
  });

  const artist2 = await prisma.artist.create({
    data: {
      name: 'The Ramones',
    },
  });

  // Create songs
  const song1 = await prisma.song.create({
    data: {
      title: 'In Bloom',
      artist: { connect: { id: artist1.id } },
    },
  });

  const song2 = await prisma.song.create({
    data: {
      title: 'Commando',
      artist: { connect: { id: artist2.id } },
    },
  });

  // Create instruments
  const instrument1 = await prisma.instrument.create({
    data: {
      name: 'Guitar',
    },
  });

  const instrument2 = await prisma.instrument.create({
    data: {
      name: 'Bass',
    },
  });

  // Create song progress
  await prisma.songProgress.createMany({
    data: [
      {
        userId: user1.id,
        songId: song1.id,
        instrumentId: instrument1.id,
        completion: 0.5,
      },
      {
        userId: user2.id,
        songId: song2.id,
        instrumentId: instrument2.id,
        completion: 0.75,
      },
      {
        userId: user2.id,
        songId: song1.id,
        instrumentId: instrument2.id,
        completion: 0.75,
      },
      {
        userId: user1.id,
        songId: song2.id,
        instrumentId: instrument2.id,
        completion: 0.75,
      },
    ],
  });

  // Create comments
  await prisma.comment.createMany({
    data: [
      {
        content: 'Great song!',
        userId: user1.id,
        songId: song1.id,
        createdAt: new Date(),
      },
      {
        content: 'Nice beat!',
        userId: user2.id,
        songId: song2.id,
        createdAt: new Date(),
      },
    ],
  });

  console.log('Database has been seeded.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
