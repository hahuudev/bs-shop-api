import { MigrationInterface, QueryRunner } from "typeorm";

export class Create1695216952990 implements MigrationInterface {
    name = 'Create1695216952990'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`order_products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`productId\` int NOT NULL, \`orderId\` int NOT NULL, \`amount\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`order_products\``);
    }

}
