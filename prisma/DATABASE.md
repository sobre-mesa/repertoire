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

# Reset the database and skip the automatic seeding
npx prisma migrate reset --force --skip-seed

# Generate Prisma client
npx prisma generate

# Deploy migrations to your database
npx prisma migrate deploy

# Run the seeding script
npx prisma db seed
