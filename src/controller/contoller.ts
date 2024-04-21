import { Controller, Get, Post, Body } from '@nestjs/common';
import { PlayTimeService } from '../service/service';
import { Long } from 'typeorm';
import { IntegerType } from 'typeorm';

@Controller('play')
export class PlayTimeController {
    constructor(private readonly playTimeService: PlayTimeService) { }
    @Post()
    setNewTime(@Body() { playTime }: { playTime: number }) {
        return this.playTimeService.setNewTime(playTime);
    }
    @Get()
    getTimeOnly(): Promise<IntegerType> {
        const playTime: Promise<IntegerType> = this.playTimeService.getTimeOnly();
        return playTime;
    }
}

@Controller('logs')
export class LogsPlayTimeController {
    constructor(private readonly playTimeService: PlayTimeService) { }
    @Get()
    getAllTimes() {
        return this.playTimeService.getAllTimes();
    }
}