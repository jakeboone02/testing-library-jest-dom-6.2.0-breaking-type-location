import { expect as _expect } from "expect";
import { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

declare module "expect" {
  export interface Matchers<R = void>
    extends TestingLibraryMatchers<typeof _expect.stringContaining, R> {}
}

declare global {
  const expect: typeof _expect;
}

expect(undefined).toBeInTheDocument();
