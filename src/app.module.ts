import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayTimeEntity } from './entities/play_time';
import { PlayTimeService } from './service/service';
import { PlayTimeController } from './controller/contoller'
/*

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
#nvm install v20.12.2
nvm install lts/Iron


nest new five-nights-at-antos

#sudo npm cache clean -f
#sudo npm install -g n
#sudo n stable
./install-libraries.sh
sudo npm install @nestjs/cli
# In your project
npm install @nestjs/core
npm install @nestjs/typeorm typeorm pg
npm install @nestjs/common
npm install @nestjs/mongoose
npm install @nestjs/serve-static
npm install -D @types/sanitize-html

npm install mongoose
npm install typeorm --save
npm install reflect-metadata --save

# Start the DB
POSTGRES_DB=poll_db
POSTGRES_USER=poll_user
POSTGRES_PASSWORD=poll_password

docker run --name five-nights-postgres -p 5432:5432 -e POSTGRES_PASSWORD=$POSTGRES_PASSWORD -e POSTGRES_USER=$POSTGRES_USER -e POSTGRES_DB=$POSTGRES_DB -d postgres
sudo docker exec -it $(sudo docker ps -aq) bash
psql -U poll_user -d poll_db

npm run start

curl -d "playTime=30" -X POST http://localhost:3000/play
curl -d "playTime=30" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:3000/play

*/
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'poll_user',
      password: 'poll_password',
      database: 'poll_db',
      entities: [PlayTimeEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([PlayTimeEntity]),
  ],
  providers: [PlayTimeService],
  controllers: [PlayTimeController],
})
export class AppModule { }