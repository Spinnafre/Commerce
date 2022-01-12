import {Column, MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class CreateSale1629947244174 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "sales",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isNullable: false,
                        isPrimary: true,
                    },
                    {
                        name: "date",
                        type: "timestamp",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                        onUpdate: "now()"
                    }
                ]
            }
        ))
        await queryRunner.addColumn('sales',new TableColumn({
            name:"user_id",
            type:"uuid",
            isNullable:false
        }))

        await queryRunner.createForeignKey('sales',new TableForeignKey({
            name:"FkUser",
            columnNames:['user_id'],
            referencedTableName:'users',
            referencedColumnNames:['id']
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sales')
    }

}
