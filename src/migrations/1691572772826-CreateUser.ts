import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1691562664900 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "user" (email, password) VALUES ('test1@cybertan.com.tw', 'Mis@12345')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM "user" WHERE email = 'test1@cybertan.com.tw'`,
    );
  }
}
