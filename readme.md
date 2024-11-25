# Moodle Prisma Client

This is a TypeScript Prisma client designed to interact with Moodle's MariaDB database. It simplifies database queries and handles schema serialization issues.

## Setup

### Environment Variables
Create a `.env` file in the root directory and include the following field:

```env
DATABASE_URL=mysql://bn_moodle:@localhost:3306/bitnami_moodle
```

### Generating The Prisma Client
To generate the typescript client from the schema.prisma file simply run
```bash
npx prisma generate
```


### Running Locally
To run the project locally, you can use the provided Docker Compose setup in the moodle-docker folder.

- Navigate to the `moodle-docker` folder.
- Run the following command:
```bash
docker-compose up
```
This will start:
- Moodle on port 8051
- MariaDB on port 3306

The default Moodle credentials are:

- Username: `user`
- Password: `bitnami`

### Known Issue: BigInt Serialization
Due to JavaScript's handling of BigInt, serializing database schemas to JSON may cause issues. As a workaround, a helper function called PrismaToJSON has been provided.

### Usage of `PrismaToJSON`
Use PrismaToJSON to serialize database queries containing BigInt into JSON format.

```typescript
import { PrismaToJSON } from './prisma.ts';

const queryResult = await prisma.someTable.findMany();
const serializedResult = PrismaToJSON(queryResult);

console.log(serializedResult);
```
This is a good temporary fix handling of BigInt fields in your database responses.