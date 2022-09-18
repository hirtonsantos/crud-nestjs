import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserRefactorting1663537743533 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL, "username" character varying NOT NULL, "email" character varying(200) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "SocialMedia" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_c649ab9f0203000478310c49adc" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "users_socialMedia" ("userId" uuid NOT NULL, "socialMediaId" uuid NOT NULL, CONSTRAINT "PK_c2c19c8991bf6d9fadacf39aa8e" PRIMARY KEY ("userId", "socialMediaId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_01a63acbb97b8c87f47ca8e23e" ON "users_socialMedia" ("userId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_3f1b599406ecada85cbf234eeb" ON "users_socialMedia" ("socialMediaId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "users_socialMedia" ADD CONSTRAINT "FK_01a63acbb97b8c87f47ca8e23e9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_socialMedia" ADD CONSTRAINT "FK_3f1b599406ecada85cbf234eeb9" FOREIGN KEY ("socialMediaId") REFERENCES "SocialMedia"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
