# Prisma Database Schema and Seeding

![Prisma](https://user-images.githubusercontent.com/42619223/123456789-fc3c3e80-d5c3-11eb-9db5-3bc24d7ab514.png)

## Overview

This project uses Prisma as an ORM to interact with a PostgreSQL database. The schema includes models for users, artists, songs, instruments, song progress, and comments. This README provides an overview of the schema and includes instructions for seeding the database with initial data.

## Prisma Schema

The Prisma schema defines the structure of the database. Here's a brief overview of the models:

| Model         | Fields                                                                 |
| ------------- | ---------------------------------------------------------------------- |
| **User**      | `id`, `email`, `name`, `password`, `comments`, `songProgress`          |
| **Artist**    | `id`, `name`, `songs`                                                  |
| **Song**      | `id`, `title`, `artistId`, `artist`, `comments`, `songProgress`        |
| **Instrument**| `id`, `name`, `songProgress`                                           |
| **SongProgress** | `id`, `userId`, `songId`, `instrumentId`, `completion`, `user`, `song`, `instrument` |
| **Comment**   | `id`, `content`, `createdAt`, `userId`, `songId`, `user`, `song`       |

## Schema Definition

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("POSTGRES_PRISMA_URL") // uses connection pooling
  directUrl = env("POSTGRES_URL_NON_POOLING") // uses a direct connection
}

model User {
  id            Int          @id @default(autoincrement())
  email         String       @unique
  name          String?
  password      String
  comments      Comment[]
  songProgress  SongProgress[]
}

model Artist {
  id    Int     @id @default(autoincrement())
  name  String  @unique
  songs Song[]
}

model Song {
  id          Int          @id @default(autoincrement())
  title       String
  artistId    Int
  artist      Artist       @relation(fields: [artistId], references: [id])
  comments    Comment[]
  songProgress SongProgress[]
}

model Instrument {
  id      Int     @id @default(autoincrement())
  name    String  @unique
  songProgress SongProgress[]
}

model SongProgress {
  id           Int         @id @default(autoincrement())
  userId       Int
  songId       Int
  instrumentId Int
  completion   Float       @default(0.0)
  user         User        @relation(fields: [userId], references: [id])
  song         Song        @relation(fields: [songId], references: [id])
  instrument   Instrument  @relation(fields: [instrumentId], references: [id])
}

model Comment {
  id      Int     @id @default(autoincrement())
  content String
  createdAt DateTime @default(now())
  userId  Int
  songId  Int
  user    User    @relation(fields: [userId], references: [id])
  song    Song    @relation(fields: [songId], references: [id])
}
# Prisma Database Schema and Seeding

![Prisma](https://user-images.githubusercontent.com/42619223/123456789-fc3c3e80-d5c3-11eb-9db5-3bc24d7ab514.png)

## Overview

This project uses Prisma as an ORM to interact with a PostgreSQL database. The schema includes models for users, artists, songs, instruments, song progress, and comments. This README provides an overview of the schema and includes instructions for seeding the database with initial data.

## Prisma Schema

The Prisma schema defines the structure of the database. Here's a brief overview of the models:

| Model         | Fields                                                                 |
| ------------- | ---------------------------------------------------------------------- |
| **User**      | `id`, `email`, `name`, `password`, `comments`, `songProgress`          |
| **Artist**    | `id`, `name`, `songs`                                                  |
| **Song**      | `id`, `title`, `artistId`, `artist`, `comments`, `songProgress`        |
| **Instrument**| `id`, `name`, `songProgress`                                           |
| **SongProgress** | `id`, `userId`, `songId`, `instrumentId`, `completion`, `user`, `song`, `instrument` |
| **Comment**   | `id`, `content`, `createdAt`, `userId`, `songId`, `user`, `song`       |
