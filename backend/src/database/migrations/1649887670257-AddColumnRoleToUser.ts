import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnRoleToUser1649887670257 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', 
            new TableColumn({
                name: 'role',
                type: 'varchar',            
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'role');
    }

}
