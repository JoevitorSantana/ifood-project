import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class ChangeRestaurantTable1650933106696 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('restaurants',
            new TableColumn({
                name: 'start_time',
                type: 'integer',
                isNullable: true,
            })
        );

        await queryRunner.addColumn('restaurants',
            new TableColumn({
                name: 'end_time',
                type: 'integer',
                isNullable: true,
            })
        )

        await queryRunner.addColumn('restaurants',
            new TableColumn({
                name: 'cover_image_url',
                type: 'varchar',
                isNullable: true,
            })
        )

        await queryRunner.addColumn('restaurants',
            new TableColumn({
                name: 'distance',
                type: 'decimal',
                isNullable: true,
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('restaurants', 'start_time');
        await queryRunner.dropColumn('restaurants', 'end_time');
        await queryRunner.dropColumn('restaurants', 'cover_image_url');
        await queryRunner.dropColumn('restaurants', 'distance');
    }

}
