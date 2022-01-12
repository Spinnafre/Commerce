// import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

// export class CreateStock1629948013344 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.createTable(
//             new Table({
//                 name: "stock",
//                 columns: [
//                     {
//                         name: "qtd",
//                         type: "integer",
//                         isNullable: false,
//                     },
//                     {
//                         name: "created_at",
//                         type: "timestamp",
//                         default: "now()",
//                     },
//                     {
//                         name: "updated_at",
//                         type: "timestamp",
//                         default: "now()",
//                         onUpdate: "now()"
//                     }
//                 ]
//             }
//         ))
//         await queryRunner.addColumn('stock',new TableColumn({
//             name:"product_id",
//             type:"uuid",
//             isNullable:false,
//             isPrimary: true,
//         }))

//         await queryRunner.createForeignKey('stock',new TableForeignKey({
//             name:"FkProduct",
//             columnNames:['product_id'],
//             referencedTableName:'products',
//             referencedColumnNames:['id']
//         }))
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.dropTable('stock')
//     }

// }
