import {AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class User extends Model{
    // @AutoIncrement
    @PrimaryKey
    @Column(DataType.STRING)
    declare id:string;
    @Column(DataType.STRING)
    name:string;
    @Column(DataType.STRING)
    email:string;
    @Column(DataType.STRING)
    password:string;
}