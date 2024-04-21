import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IntegerType, Repository } from 'typeorm';
import { PlayTimeEntity } from '../entities/play_time';
@Injectable()
export class PlayTimeService {
    constructor(
        @InjectRepository(PlayTimeEntity)
        private readonly playTimeRepository: Repository<PlayTimeEntity>,
    ) { }
    async setNewTime(playTime: number): Promise<PlayTimeEntity> {
        let playTimeEntity:PlayTimeEntity = null;
        let allPlayTimes = await this.playTimeRepository.find();
        if (allPlayTimes.length > 1) {
            let playTimeIds = []
            for (let index = 1; index < allPlayTimes.length; ++index) {
                playTimeIds.push(allPlayTimes['id'])
            }
            await this.playTimeRepository.delete( playTimeIds );
        }
        let onePlayTime = await this.playTimeRepository.find();
        if (onePlayTime.length == 0) {
            playTimeEntity = this.playTimeRepository.create({ playTime });
        } else {
            playTimeEntity = onePlayTime[0];
            playTimeEntity['playTime'] = playTime
        }
        return this.playTimeRepository.save(playTimeEntity);
    }
    async getAllTimes(): Promise<PlayTimeEntity[]> {
        return this.playTimeRepository.find();
    }
    async getTimeOnly(): Promise<IntegerType> {
        let playTime: IntegerType = 0;
        let playTimeEntity = await this.playTimeRepository.find();
        if (playTimeEntity.length > 0) {
            playTime = playTimeEntity[0]['playTime'];
            await this.setNewTime(0);
        }
        return playTime;
    }
}