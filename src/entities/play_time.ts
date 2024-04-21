import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class PlayTimeEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    playTime: number;
}
@Entity()
export class LogsPlayTimeEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    playTime: number;
}
