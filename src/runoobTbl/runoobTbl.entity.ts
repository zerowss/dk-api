/*
 * @Author: your name
 * @Date: 2020-09-07 17:38:53
 * @LastEditTime: 2020-09-07 18:14:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /dk-api/src/runoobTbl/runoobTbl.entity.ts
 */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

// 会以类名来创建表,如果是驼峰命名的,生成的表名是下划线区分
@Entity()
export class runoobTbl{
    // @PrimaryGeneratedColumn({ comment: '主键id' })
    // runoob_id: number;
  
    // @Column()
    // runoob_title: string;
  
    // @Column({ length: 50, comment: '作者', unique: true })
    // runoob_author: string;
  
    // @Column()
    // submission_date: number;
}
