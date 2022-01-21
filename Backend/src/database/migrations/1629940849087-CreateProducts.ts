import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducts1629940849087 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isNullable: false,
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "price",
                        type: "decimal",
                    },
                    {
                        name:"img_url",
                        type:"varchar"
                    },
                    {
                        name: "qtd",
                        type: "integer",
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

                ],
            }
        ))
        // await queryRunner.addColumn('products',new TableColumn({
        //     name:"category_id",
        //     type:"uuid",
        //     isNullable:true
        // }))

        // await queryRunner.createForeignKey('products',new TableForeignKey({
        //     name:"FkCategory",
        //     columnNames:['category_id'],
        //     referencedColumnNames:['id'],
        //     referencedTableName:'categories',
        //     onDelete:'CASCADE'
        // }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products')
    }

}
