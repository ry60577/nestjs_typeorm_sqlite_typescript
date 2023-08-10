import { MigrationInterface, QueryRunner } from 'typeorm';

const UserSeedList = [
  {
    email: 'test11@cybertan.com.tw',
    password: 'Mis@12345',
  },
  {
    email: 'test5@cybertan.com.tw',
    password: 'Mis@12345',
  },
  {
    email: 'test6@cybertan.com.tw',
    password: 'Mis@12345',
  },
  {
    email: 'test7@cybertan.com.tw',
    password: 'Mis@12345',
  },
  {
    email: 'test8@cybertan.com.tw',
    password: 'Mis@12345',
  },
  {
    email: 'test9@cybertan.com.tw',
    password: 'Mis@12345',
  },
  {
    email: 'test10@cybertan.com.tw',
    password: 'Mis@12345',
  },
];

export class UserSeeder1691576668422 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      UserSeedList.map((user) =>
        queryRunner.query(
          `INSERT INTO user (email, password) VALUES ('${user.email}', '${user.password}')`,
        ),
      ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const UserDeleteList = UserSeedList.map((user) => user.email);
    await Promise.all(
      UserDeleteList.map((email) =>
        queryRunner.query(`DELETE FROM user WHERE email ='${email}';`),
      ),
    );
  }
}
