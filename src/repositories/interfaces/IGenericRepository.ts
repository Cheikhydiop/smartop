export interface IGenericRepository<T> {
    create(data: Partial<T>): Promise<T>;
    findAll(options?: any): Promise<T[]>;
    findById(id: string): Promise<T | null>;
    update(id: string, data: Partial<T>): Promise<T>;
    delete(id: string): Promise<void>;
  }
  