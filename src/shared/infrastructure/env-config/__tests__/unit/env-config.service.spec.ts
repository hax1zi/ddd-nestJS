import { Test, TestingModule } from '@nestjs/testing';
import { EnvConfigService } from '../../env-config.service';
import { EnvConfigModule } from '../../env-config.module';

describe('EnvConfigService unit tests', () => {
  let SUT: EnvConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EnvConfigModule.forRoot()],
      providers: [EnvConfigService],
    }).compile();

    SUT = module.get<EnvConfigService>(EnvConfigService);
  });

  it('should be defined', () => {
    expect(SUT).toBeDefined();
  });

  it('should return the variable PORT', () => {
    expect(SUT.getAppPort()).toBe(3000);
  });

  it('should return the variable NODE_ENV', () => {
    expect(SUT.getNodeEnv()).toBe('test');
  });
});
