import { AdminContainerModule } from './admin-container.module';

describe('AdminContainerModule', () => {
  let adminContainerModule: AdminContainerModule;

  beforeEach(() => {
    adminContainerModule = new AdminContainerModule();
  });

  it('should create an instance', () => {
    expect(adminContainerModule).toBeTruthy();
  });
});
