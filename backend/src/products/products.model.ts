import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class ProductsModel {
	@Field()
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({ length: 500, nullable: false })
	name: string;

	@Field()
	@Column('text', { nullable: false })
	image: string;

	@Field()
	@Column('integer', { nullable: false })
	price: number;

	@Field()
	@Column('text', { nullable: false })
	color: string;

	@Field()
	@Column('integer', { nullable: false })
	length: number;

	@Field()
	@Column('text', { nullable: false })
	size: string;

	@Field()
	@Column()
	@CreateDateColumn()
	created_at: Date;

	@Field()
	@Column()
	@UpdateDateColumn()
	updated_at: Date;
}