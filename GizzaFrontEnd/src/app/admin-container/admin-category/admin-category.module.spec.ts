import { AdminCategoryModule } from './admin-category.module';

describe('AdminCategoryModule', () => {
  let adminCategoryModule: AdminCategoryModule;

  beforeEach(() => {
    adminCategoryModule = new AdminCategoryModule();
  });

  it('should create an instance', () => {
    expect(adminCategoryModule).toBeTruthy();
  });
});
