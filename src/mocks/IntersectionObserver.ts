// Mock IntersectionObserver
export class MockIntersectionObserver {
  observe: jest.Mock;
  disconnect: jest.Mock;
  unobserve: jest.Mock;

  constructor() {
    this.observe = jest.fn();
    this.disconnect = jest.fn();
    this.unobserve = jest.fn();
  }
}