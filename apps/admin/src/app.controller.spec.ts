import { Test, TestingModule } from '@nestjs/testing';
import { AdminController } from './app.controller';
import { AdminService } from './app.service';

describe('AdminController', () => {
  let adminController: AdminController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AdminController],
      providers: [AdminService],
    }).compile();

    adminController = app.get<AdminController>(AdminController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(adminController.getHello()).toBe('Hello World!');
    });
  });
});
