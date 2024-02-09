## Guideline of developing backend for Memristor Evaluating Server

1. Validation
    - In case of customized request => use nestjs pipe validation
    - In case of request compatible with prisma => use prismaCreateInput or prisma-built-in input
2. Folder & File Structure
    - dto => customized request with nestjs pipe validation
    - event => event emitter collection
    - controller
    - service
3. Benchmark
    - Benchmark Operation must use EventEmitter to create abstaction of operation


